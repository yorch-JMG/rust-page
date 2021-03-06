import {RustInProductionInfo} from './rustInProductionInfo';
import {RustInProductionQuoteSection} from './rustInProductionQuoteSection';

export const RustInProduction = () => {
  return (
		<div className="bg-white w-full h-fit pb-16 md:pb-5">
      <div className="max-w-6xl mx-auto">
        <div>
		<h1 className="text-black text-3xl md:text-4xl lg:text-4xl font-extrabold pt-9 pl-2 lg:pl-0">
            Rust in production
          </h1>
		<div className="h-3 w-2/3 lg:w-2/6 bg-yellow-400 mt-1 pr-5" />
        </div>
        <div className="pt-5 pb-14">
		<p className="text-xl md:text-2xl lg:text-2xl px-2 md:px-8 leading-10 md:leading-10">
            Hundreds of companies around the world are using Rust in production
            today for fast, low-resource, cross-platform solutions. Software you
            know and love, like{' '}
            <a href="#" className="underline">
              Firefox
            </a>
            ,{' '}
            <a href="#" className="underline">
              Dropbox{' '}
            </a>
            , and{' '}
            <a href="#" className="underline">
              Cloudflare
            </a>
            , uses Rust.{' '}
            <b className="font-extrabold">
              From startups to large corporations, from embedded devices to
              scalable web services, Rust is a great fit.
            </b>
          </p>
        </div>
        <RustInProductionQuoteSection
          RustInProductionInfo={RustInProductionInfo}
        />
        <button className="w-full bg-yellow-400 rounded-sm">
          <p className='py-2 font-semibold uppercase text-sm md:text-lg'>Learn more</p>
        </button>
      </div>
    </div>
  );
};
