import { onMount } from "svelte"
import { navbar } from "../stores/app"

export function debounce(callback, wait) {
  let timeout
  return (...args) => {
    const context = this
    clearTimeout(timeout)
    timeout = setTimeout(() => callback.apply(context, args), wait)
  }
}

export function scrollTo(elementId) {
  if (!process.browser) return
  const targetEl = document.getElementById(elementId)
  if (targetEl) {
    targetEl.scrollIntoView({ behavior: "smooth", block: "start" })
    history.pushState(null, null, `#${elementId}`)
  }
}

export function linkScrollTo(event) {
  const hash = event.target.hash
  const id = hash && hash.replace("#", '')
  id && scrollTo(id)
}

/**
 * Directive for handling click outside elements
 * 
 * @param {Element} node Self node 
 * @param {Array<String>} excludes Collection of excluded element ids
 */
export function clickOutside(node, excludes) {
  if (!process.browser) return {}

  let excludedNodes = excludes && Array.isArray(excludes) ? excludes : []
  excludedNodes = excludedNodes.map(n => document.getElementById(n))
  excludedNodes.push(node)

  const handleClick = e => {
    const targets = excludedNodes.some(n => n.contains(e.target))

    if (node && !targets && !e.defaultPrevented) {
      node.dispatchEvent(new CustomEvent('clickoutside', node))
    }
  }

  window.addEventListener('click', handleClick, true)

  return {
    destroy() {
      window.removeEventListener('click', handleClick, true)
    }
  }
}

export function observeElement(element) {
  onMount(() => {
    // simple function to use for callback in the intersection observer
    const changeElement = (entries /* observer */) => {
      entries.forEach((entry) => {
        // verify the element is intersecting
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          const visibleElement = entry.target.id
          navbar.setActiveMenu(visibleElement)
          history.replaceState(null, null, `#${visibleElement}`)
        }
      })
    }

    // init the observer
    const options = { threshold: 0.55 }
    const observer = new IntersectionObserver(changeElement, options)

    // target the elements (section) to be observed
    const elements = document.querySelectorAll(element)
    elements.forEach((el) => {
      observer.observe(el)
    })

    return function () {
      elements.forEach((el) => {
        observer.unobserve(el)
      })
      observer.disconnect()
    }
  })
}
