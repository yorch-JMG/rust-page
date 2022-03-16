import Image from 'next/image';

export const Header = () => {
  const headerOptions = [
    {
      name: 'Install',
    },
    {
      name: 'Learn',
    },
    {
      name: 'Playground',
    },
    {
      name: 'Tools',
    },
    {
      name: 'Governance',
    },
    {
      name: 'Community',
    },
    {
      name: 'Blog',
    },
  ];
  return (
    <nav className="bg-white px-3">
      <div className="flex flex-wrap justify-between items-center mx-auto">
        <a href="#">
          <Image
            src="https://www.rust-lang.org/static/images/rust-logo-blk.svg"
            height={80}
            width={80}
          />
        </a>
        <div className="flex space-x-7 pl-3">
          <ul className="flex">
            {headerOptions.map(headerOption => {
              return (
                <li key={headerOption.name}>
                  <a href="#" className="px-7 text-gray-800 underline text-lg">
                    {headerOption.name}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            id="dropdownButton"
            data-dropdown-toggle="dropdown"
            className="text-black bg-white hover:border-slate-300 font-medium flex items-center border rounded-md border-black pl-2 mr-5"
            type="button">
            English (en-US){' '}
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>

          <div
            id="dropdown"
            className="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700">
            <ul className="py-1" aria-labelledby="dropdownButton">
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
