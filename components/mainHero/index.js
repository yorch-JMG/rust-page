export const MainHero = () => {
	return (
		<div className='max-w-6xl w-full flex justify-between py-12 px-2 mx-auto mb-16'>
			<div>
				<h1 className='font-extrabold text-7xl'>
					RUST
				</h1>
				<h3 className='pt-7 text-4xl'>
					A language empowering everyone <br/>
					to build reliable and efficient software.
				</h3>
			</div>
			<div className='flex flex-col'>
				<button className='bg-yellow-400 py-6 px-7 text-3xl mr-7 rounded-md'>
					<p className='px-10 font-bold'>
						GET STARTED
					</p>
				</button>
				<a href="#" className='text-center pt-4 text-3xl underline text-blue-500'>Version 1.59.0</a>
			</div>
		</div>
	)
}
