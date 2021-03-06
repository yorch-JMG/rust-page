export const WhyRustInfo = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-2 pt-3 pb-7">
      <div className="w-full md:px-8 lg:w-1/3">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold">
          Performance
        </h1>
        <p className="text-white md:text-2xl lg:text-lg pt-7 pb-7 lg:pb-8">
          Rust is blazingly fast and memory-efficient: with no runtime or
          garbage collector, it can power performance-critical services, run on
          embedded devices, and easily integrate with other languages.
        </p>
      </div>
      <div className="w-full md:px-8 lg:w-1/4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold">
          Reliability
        </h1>
        <p className="text-white md:text-2xl lg:text-lg pt-7 pb-7 lg:pb-8">
          Rust’s rich type system and ownership model guarantee memory-safety
          and thread-safety — enabling you to eliminate many classes of bugs at
          compile-time.
        </p>
      </div>
      <div className="w-full md:px-8 lg:w-1/4">
        <h1 className="text-white text-2xl md:text-4xl lg:text-4xl font-bold">
          Productivity
        </h1>
        <p className="text-white md:text-2xl lg:text-lg pt-7 pb-7 lg:pb-8">
          Rust has great documentation, a friendly compiler with useful error
          messages, and top-notch tooling — an integrated package manager and
          build tool, smart multi-editor support with auto-completion and type
          inspections, an auto-formatter, and more.
        </p>
      </div>
    </div>
  );
};
