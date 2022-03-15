import Image from "next/image"

export const BuildItInRust = () => {
	const buildItInRustObj = [
		{
			imageURL: 'https://www.rust-lang.org/static/images/cli.svg',
			name: 'Command Line',
			desc: 'Whip up a CLI tool quickly with Rust’s robust ecosystem. Rust helps you maintain your app with confidence and distribute it with ease.',
			buttonText: 'Building tools'
		},
		{
			imageURL: 'https://www.rust-lang.org/static/images/webassembly.svg',
			name: 'WebAssembly',
			desc: 'Use Rust to supercharge your JavaScript, one module at a time. Publish to npm, bundle with webpack, and you’re off to the races.',
			buttonText: 'Writing web apps'
		},
		{
			imageURL: 'https://www.rust-lang.org/static/images/networking.svg',
			name: 'Networking',
			desc: 'Predictable performance. Tiny resource footprint. Rock-solid reliability. Rust is great for network services.',
			buttonText: 'Working on servers'
		},
		{
			imageURL: 'https://www.rust-lang.org/static/images/embedded.svg',
			name: 'Embedded',
			desc: 'Targeting low-resource devices? Need low-level control without giving up high-level conveniences? Rust has you covered.',
			buttonText: 'Starting with embedded'
		},
	]
	return (
		<div className='bg-purple-800 w-full h-fit'>
			<div className='max-w-6xl mx-auto'>
				<h1 className='text-white text-4xl font-extrabold pt-9'>Build it in Rust</h1>
				<div className='h-3 w-1/4 bg-pink-700 mt-1 pr-6'/>
				<p className='text-white text-lg pt-5 px-2'>In 2018, the Rust community decided to improve the programming experience for a few distinct domains (see <a href='#' className='underline'>the 2018 roadmap</a>). For these, you can find many high-quality crates and some awesome guides on how to get started.</p>
				<div className='flex justify-between pt-9 w-full h-96'>
					{buildItInRustObj.map((buildItInRustObject) => (
						<div key={buildItInRustObject.name} className='px-3 flex flex-col w-1/3 h-full'>
							<Image src={buildItInRustObject.imageURL} height={100} width={100} loading='eager'/>
							<h2 className='text-white text-center font-bold text-3xl pt-3'>{buildItInRustObject.name}</h2>
							<p className='text-white text-lg py-5 h-1/2'>{buildItInRustObject.desc}</p>
							<button className='text-white bg-pink-700 py-2 bottom-0 font-bold uppercase text-sm'>{buildItInRustObject.buttonText}</button>
						</div>
					))}		
				</div>
			</div>
		</div>
	)
}
