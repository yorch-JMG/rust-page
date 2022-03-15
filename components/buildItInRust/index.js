import Image from "next/image"

export const BuildItInRust = () => {
	return (
		<div className='bg-purple-800 w-full h-fit'>
			<div className='max-w-6xl mx-auto'>
				<h1 className='text-white text-4xl font-extrabold pt-9'>Build it in Rust</h1>
				<div className='h-3 w-1/4 bg-pink-700 mt-1 pr-6'/>
				<p className='text-white text-lg pt-5 px-2'>In 2018, the Rust community decided to improve the programming experience for a few distinct domains (see <a href='#' className='underline'>the 2018 roadmap</a>). For these, you can find many high-quality crates and some awesome guides on how to get started.</p>
				<div className='flex justify-between pt-9 w-full h-2/5'>
					<div className='px-3 flex flex-col w-1/4 h-full'>
						<Image src='https://www.rust-lang.org/static/images/cli.svg' height={100} width={100} loading='eager'/>
						<h2 className='text-white text-center font-bold text-3xl pt-3'>Command Line</h2>
						<p className='text-white text-lg py-5'>Whip up a CLI tool quickly with Rust’s robust ecosystem. Rust helps you maintain your app with confidence and distribute it with ease.</p>
		<button className='text-white bg-pink-700 py-2 font-bold uppercase text-sm'>Building tools</button>
					</div>
					<div className='px-3 flex flex-col w-1/4 h-full'>
						<Image src='https://www.rust-lang.org/static/images/webassembly.svg' height={100} width={100} loading='eager'/>
						<h2 className='text-white text-center font-bold text-3xl pt-3'>WebAssembly</h2>
						<p className='text-white text-lg py-5'>Use Rust to supercharge your JavaScript, one module at a time. Publish to npm, bundle with webpack, and you’re off to the races.</p>
		<button className='text-white bg-pink-700 py-2 font-bold uppercase text-sm'>Writing web apps</button>
					</div>
					<div className='px-3 flex flex-col w-1/4 h-full'>
						<Image src='https://www.rust-lang.org/static/images/networking.svg' height={100} width={100} loading='eager'/>
						<h2 className='text-white text-center font-bold text-3xl pt-3'>Networking</h2>
						<p className='text-white text-lg py-5'>Predictable performance. Tiny resource footprint. Rock-solid reliability. Rust is great for network services.</p>
		<button className='text-white bg-pink-700 py-2 font-bold uppercase text-sm'>Working on servers</button>
					</div>
					<div className='px-3 flex flex-col w-1/4 h-full'>
						<Image src='https://www.rust-lang.org/static/images/embedded.svg' height={100} width={100} loading='eager'/>
						<h2 className='text-white text-center font-bold text-3xl pt-3'>Embedded</h2>
						<p className='text-white text-lg py-5'>Targeting low-resource devices? Need low-level control without giving up high-level conveniences? Rust has you covered.</p>
		<button className='text-white bg-pink-700 py-2 font-bold uppercase text-sm inset-x-0 bottom-0'>Starting with <br/> embedded</button>
					</div>
				</div>
			</div>
		</div>
	)
}
