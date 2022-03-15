import { WhyRustInfo } from './whyRustInfo'
export const WhyRust = () => {
	return(
		<div className='w-full bg-emerald-700 mt-15 pb-5'>
			<div className='max-w-6xl mx-auto'>
				<div>
					<h1 className='text-white text-4xl font-extrabold pt-9'>Why Rust?</h1>
					<div className='h-3 w-1/6 bg-purple-900 mt-1 pr-5'/>
				</div>
				<div>
					<WhyRustInfo />
				</div>
			</div>
		</div>
	)
}
