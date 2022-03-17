import Image from 'next/image';
import {BuildItInRustInfo} from './buildItInRustInfo';

export const BuildItInRust = () => {
  return (
    <div className="bg-purple-800 w-full h-fit pb-16">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-white pl-2 lg:pl-0 text-3xl lg:text-4xl font-extrabold pt-9">
          Build it in Rust
        </h1>
		<div className="h-3 w-1/2 lg:w-1/4 bg-pink-700 mt-1 pr-6" />
        <p className="text-white lg:text-lg pt-5 px-2">
          In 2018, the Rust community decided to improve the programming
          experience for a few distinct domains (see{' '}
          <a href="#" className="underline">
            the 2018 roadmap
          </a>
          ). For these, you can find many high-quality crates and some awesome
          guides on how to get started.
        </p>
        <div className="flex flex-col lg:flex-row justify-between pt-9 w-full h-fit lg:h-96">
          {BuildItInRustInfo.map(buildItInRustObject => (
            <div
              key={buildItInRustObject.name}
              className="px-3 flex flex-col w-full lg:w-1/3 h-full pb-10 lg:pb-5">
              <Image
                src={buildItInRustObject.imageURL}
                height={100}
                width={100}
                loading="lazy"
              />
              <h2 className="text-white text-center font-bold text-3xl pt-3">
                {buildItInRustObject.name}
              </h2>
						<p className="text-white lg:text-lg py-5 h-1/2">
                {buildItInRustObject.desc}
              </p>
              <button className="text-white bg-pink-700 py-2 bottom-0 font-bold uppercase text-sm">
                {buildItInRustObject.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
