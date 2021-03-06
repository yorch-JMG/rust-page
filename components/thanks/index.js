export const Thanks = () => {
  return (
    <div className="bg-white w-full h-fit pb-16">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-black text-4xl font-extrabold pt-9 pl-2 lg:pl-0">
            Thanks
          </h1>
          <div className="h-3 w-1/3 lg:w-1/6 bg-yellow-400 mt-1 pr-5" />
        </div>
        <div className="pt-5 pb-4">
          <p className="text-xl md:text-2xl lg:text-2xl px-2 leading-10">
            Rust would not exist without the generous contributions of time,
            work, and resources from individuals and companies. We are very
            grateful for the support!
          </p>
        </div>
        <div className="flex flex-col lg:flex-row pt-6 lg:space-x-6 px-2">
          <div className="w-full lg:w-1/2 pb-5 lg:pb-0">
            <h2 className="text-xl md:text-3xl lg:text-2xl text-black font-extrabold">
              Individuals
            </h2>
            <p className="md:text-2xl lg:text-lg text-black py-5">
              Rust is a community project and is very thankful for the many
              community contributions it receives.
            </p>
		<button className="w-full text-black bg-yellow-400 py-3 uppercase font-bold text-sm md:text-lg rounded-sm">
              See individual contributors
            </button>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-xl md:text-3xl lg:text-2xl text-black font-extrabold">
              Corporate sponsors
            </h2>
            <p className="md:text-2xl lg:text-lg text-black py-5">
              The Rust project receives support from companies through the
              donation of infrastructure.
            </p>
            <button className="w-full text-black bg-yellow-400 py-3 uppercase font-bold text-sm md:text-lg rounded-sm">
              See sponsors
            </button>
            <button className="w-full"></button>
          </div>
        </div>
      </div>
    </div>
  );
};
