<script>
	import { PUBLIC_APP_NAME } from '$env/static/public';
	import AccrCert from '$lib/assets/ssec-accr-cert-20231106.pdf';
	import SectionContact from './section-contact.svelte';
	import SectionPhysician from './section-physician.svelte';
	import SectionSchedule from './section-schedule.svelte';
	import SectionService from './section-service.svelte';
	import TopBar from './top-bar.svelte';

	export let data;
</script>

<TopBar />

<article class="h-screen bg-contain bg-no-repeat bg-right-bottom bg-[url(/bg-main-hero.svg)]">
	<section class="flex h-full">
		<div class="my-auto mx-8 md:ml-16">
			<p class="text-5xl mb-4 md:mb-1 font-semibold text-gray-700" style="text-wrap: balance;">
				Kesehatan Mata Anda adalah Prioritas Kami
			</p>
			<p class="text-lg md:text-xl text-gray-600 md:max-w-2xl">
				Silampari Sriwijaya Eye Centre merupakan Pusat Pelayanan Kesehatan Spesialistik Mata Terpadu
				terakreditasi <a
					class="underline text-emerald-700"
					href={AccrCert}
					target="_blank"
					rel="noopener noreferrer"
				>
					Paripurna
				</a>
				yang berada di Kota
				<a
					class="underline text-emerald-700"
					href="http://g.page/ssec-llg"
					target="_blank"
					rel="noopener noreferrer"
				>
					Lubuklinggau,
				</a>
				Sumatra Selatan.
			</p>
			<a
				class="inline-flex space-x-2 px-6 py-3 uppercase rounded-full border border-emerald-400
					mt-4 text-white bg-emerald-400 shadow-lg hover:bg-emerald-500 md:(px-6 py-4)"
				href="#services"
			>
				<div class="icon-medical-services" />
				<span class="font-bold">Pelayanan kami</span>
			</a>
			<a
				class="inline-flex space-x-2 px-6 py-3 uppercase rounded-full border border-emerald-400
					mt-2 text-emerald-500 bg-gray-200 bg-opacity-50 shadow hover:bg-gray-300 md:(ml-2 mt-0 px-6 py-4)"
				href="#contacts"
			>
				<div class="icon-near-me" />
				<span class="font-bold">Berkunjung</span>
			</a>
		</div>
	</section>

	<SectionService />

	<SectionPhysician />

	<SectionSchedule schedules={data.lazy.physicianSchedules} />

	<SectionContact />

	<footer class="text-center p-4 bg-gradient-to-b from-zinc-200 to-white">
		<p class="p-4 md:py-8 text-neutral-500">
			&copy;2023 Dibuat dengan <span class="icon-favorite text-emerald-500" /> oleh
			<a class="text-emerald-500 hover:underline" href="https://github.com/ssecd">
				{PUBLIC_APP_NAME}
			</a> di Lubuklinggau
		</p>
	</footer>
</article>
