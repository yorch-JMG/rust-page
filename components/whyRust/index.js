import {WhyRustInfo} from './whyRustInfo';
export const WhyRust = () => {
  return (
    <div className="w-full bg-emerald-700 mt-15 pb-7">
      <div className="max-w-6xl mx-auto">
        <div>
		<h1 className="text-white pl-2 lg:pl-0 text-3xl md:text-4xl lg:text-4xl font-extrabold pt-9">
            Why Rust?
          </h1>
		<div className="h-3 w-2/5 lg:w-1/6 bg-purple-900 mt-1 pr-5" />
        </div>
        <div className="pt-2">
          <WhyRustInfo />
        </div>
      </div>
    </div>
  );
};
