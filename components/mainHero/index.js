export const MainHero = () => {
  return (
		<div className="max-w-6xl w-full flex flex-col md:flex-row lg:flex-row justify-between py-12 md:py-8 px-2 md:px-8 mx-auto mb-10 lg:mb-16">
      <div>
		<h1 className="font-extrabold text-5xl lg:text-7xl">RUST</h1>
		<h3 className="pt-7 pb-5 lg:pb-0 text-xl md:text-2xl lg:text-4xl">
          A language empowering everyone <br />
          to build reliable and efficient software.
        </h3>
      </div>
      <div className="flex flex-col">
        <button className="bg-yellow-400 py-6 px-7 text-2xl mr-0 lg:mr-7 rounded-md">
          <p className="px-10 font-bold">GET STARTED</p>
        </button>
        <a
          href="#"
          className="text-center pt-4 text-xl lg:text-2xl underline text-blue-500">
          Version 1.59.0
        </a>
      </div>
    </div>
  );
};
