import Image from 'next/image'

export const Header = () => {
	return (
		<nav className='bg-white px-3'>
			<div className='flex flex-wrap justify-between items-center mx-auto'>
				<a href="#">
					<Image src="https://www.rust-lang.org/static/images/rust-logo-blk.svg" height={80} width={80} />
		</a>
		<div className='flex space-x-7 pl-3'>
					<ul className='flex'>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Install</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Learn</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Playground</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Tools</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Governance</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Community</a>
						</li>
						<li>
							<a href="#" className='px-7 text-gray-800 underline text-lg'>Blog</a>
						</li>
					</ul>
		<button id="dropdownButton" data-dropdown-toggle="dropdown" class="text-black bg-white hover:border-slate-300 font-medium flex items-center border rounded-md border-black pl-2 mr-5" type="button">English (en-US) <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
    <ul class="py-1" aria-labelledby="dropdownButton">
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
		</div>
			</div>
		</nav>

	)
}
