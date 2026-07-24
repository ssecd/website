<script>
	import ssec_map from '$lib/assets/contact__map.png';

	const contacts = [
		// text, icon, href, classes
		[
			'Instagram', //
			'icon-favorite-outline',
			'https://instagram.com/ssec.llg',
			'bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white'
		],
		[
			'Facebook', //
			'icon-thumb-up-outline',
			'https://fb.com/ssec.llg',
			'bg-gradient-to-r from-blue-500 to-blue-400 text-white'
		],
		[
			'WhatsApp', //
			'icon-chat-bubble-outline',
			'https://wa.me/6285156200678',
			'bg-gradient-to-r from-green-600 to-green-400 text-white'
		],
		[
			'(0733) 3286 255', //
			'icon-call-outline',
			'tel:07333286255',
			'bg-gradient-to-r from-pink-600 to-pink-400 text-white'
		],
		[
			'contact@ssec.co.id', //
			'icon-mail-outline',
			'mailto:contact@ssec.co.id',
			'bg-gradient-to-r from-violet-600 to-violet-400 text-white'
		]
	];
</script>

<section id="contacts" class="py-16">
	<p class="m-4 md:m-8 text-center text-3xl font-bold uppercase">Hubungi Kami</p>
	<article class="grid md:grid-cols-2 mx-8 mb-16 md:(mt-16 mb-36 mx-a) max-w-5xl">
		<!-- service images -->
		<section class="m-4 md:m-8">
			<a href="https://maps.app.goo.gl/fMW7NDMyTwCTUPJq5" target="_blank" rel="noopener noreferrer">
				<img
					class="border-4 rounded shadow -rotate-2 transition-all duration-150
						hover:(rotate-2 shadow-lg)"
					alt="Lokasi atau map SSEC"
					src={ssec_map}
				/>
			</a>
		</section>

		<!-- contacts text detail -->
		<section class="m-2 md:m-8">
			<p class="text-xl leading-tight text-center md:text-left">
				Jl. Sultan Mahmud Badaruddin II, RT 3, Tanah Periuk, Lubuk Linggau Selatan II, Lubuklinggau, Sumatera Selatan, 31627
			</p>
			<ol class="flex flex-wrap justify-center gap-1 mt-2 max-w-md md:(justify-start mt-6 gap-2)">
				{#each contacts as [text, icon, href, classes]}
					<li
						class="{classes} md:text-xl leading-none border shadow rounded-full hover:(shadow-xl opacity-80)"
					>
						<a
							class="flex items-center space-x-1 p-2 px-3 md:(p-3 px-4)"
							rel="noopener noreferrer"
							target="_blank"
							{href}
						>
							<div class={icon} />
							<span>{text}</span>
						</a>
					</li>
				{/each}
			</ol>
		</section>

		<section class="md:col-span-2 mx-auto mt-2">
			<p class="text-center max-w-md text-neutral-500">
				<span class="icon-info-outline -mt-1" />
				Pendaftaran Rawat Jalan khusus peserta JKN atau BPJS dapat dilakukan secara online melalui Mobile
				JKN. Download aplikasi Mobile JKN di <strong>PlayStore</strong> atau
				<strong>AppStore</strong>.
			</p>
		</section>
	</article>
</section>
