export const GetInvolved = () => {
  return (
    <div className="w-full h-fit bg-rose-700">
      <div className="max-w-6xl mx-auto">
        <div>
          <h1 className="text-white text-3xl lg:text-4xl font-extrabold pt-9 pl-2">
            Get involved
          </h1>
          <div className="h-3 w-2/3 lg:w-1/4 bg-blue-900 mt-1 pr-5" />
        </div>
        <div className="flex flex-col lg:flex-row pt-5 lg:space-x-6">
          <div className="w-full lg:w-1/2 pb-5 lg:pb-0 px-2">
		<h2 className="text-xl lg:text-2xl text-white font-bold">Read Rust</h2>
            <p className="lg:text-lg text-white py-5">
              We love documentation! Take a look at the books available online,
              as well as key blog posts and user guides.
            </p>
            <button className="w-full text-white bg-blue-900 py-2 uppercase font-bold text-sm">
              Read the book
            </button>
          </div>
          <div className="w-full lg:w-1/2 px-2">
            <h2 className="text-xl lg:text-2xl text-white font-bold">Watch Rust</h2>
            <p className="lg:text-lg text-white py-5">
              The Rust community has a dedicated YouTube channel collecting a
              huge range of presentations and tutorials.
            </p>
            <button className="w-full text-white bg-blue-900 py-2 uppercase font-bold text-sm">
              Watch the videos
            </button>
            <button className="w-full"></button>
          </div>
        </div>
        <div className="w-full lg:pt-5 pb-14 px-2">
          <h2 className="text-xl lg:text-2xl text-white font-bold">Contribute Code</h2>
		<p className="lg:text-lg text-white py-5">
            Rust is truly a community effort, and we welcome contribution from
            hobbyists and production users, from newcomers and seasoned
            professionals. Come help us make the Rust experience even better!
          </p>
          <button className="w-full text-white bg-blue-900 py-2 uppercase font-bold text-sm">
            Read contribution guide
          </button>
        </div>
      </div>
    </div>
  );
};
