import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-7 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row lg:flex-row justify-between">
        <div className="text-left w-full md:1/3 lg:w-1/3 pl-2 md:pl-0 lg:pl-0 pb-5 lg:pb-0">
          <h2 className="text-white text-xl md:text-2xl lg:text-2xl font-bold pb-5">
            Get help!
          </h2>
          <ul className="text-yellow-400 lg:text-lg space-y-3">
            <li>Documentation</li>
            <li>Rust Forge (Contributor Documentation)</li>
            <li className="lg:pb-5">Ask a Question on the User Forum</li>
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
          </ul>
        </div>
        <div className="text-left w-full md:1/3 lg:w-1/3 pl-2 lg:pl-0 pb-5 lg:pb-0">
          <h2 className="text-white text-xl md:text-2xl lg:text-2xl font-bold pb-5">
            Terms and policies
          </h2>
          <ul className="text-yellow-400 lg:text-lg space-y-3">
            <li>Code of Conduct</li>
            <li>Licenses</li>
            <li>Logo Policy and Media Guide</li>
            <li>Security Disclosure</li>
            <li>Privacy Policy</li>
            <li>All Policies</li>
          </ul>
        </div>
        <div className="text-left w-full md:1/3 lg:w-1/3 pl-2 lg:pl-0 pb-5 lg:pb-0">
          <h2 className="text-white text-xl md:text-2xl lg:text-2xl font-bold pb-5">
            Social
          </h2>
          <div className="flex w-2/3 md:w-4/5 lg:w-3/5 justify-between px-3">
            <Image
              src="https://www.rust-lang.org/static/images/twitter.svg"
              height={40}
              width={40}
              loading="lazy"
            />
            <Image
              src="https://www.rust-lang.org/static/images/youtube.svg"
              height={40}
              width={40}
              loading="lazy"
            />
            <Image
              src="https://www.rust-lang.org/static/images/discord.svg"
              height={40}
              width={40}
              loading="lazy"
            />
            <Image
              src="https://www.rust-lang.org/static/images/github.svg"
              height={40}
              width={40}
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="text-center pt-12 pb-5 lg:pb-0">
        <p className="text-white lg:text-lg">
          Maintained by the Rust Team. See a bug?{' '}
          <a className="text-yellow-400">File an issue!</a>
        </p>
        <p className="text-white lg:text-lg">
          Looking for the <a className="text-yellow-400">previous website</a>?
        </p>
      </div>
    </footer>
  );
};
