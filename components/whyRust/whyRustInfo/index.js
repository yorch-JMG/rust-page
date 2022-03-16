export const WhyRustInfo = () => {
  return (
    <div className="flex justify-between px-2 pt-3 pb-7">
      <div className="w-1/3">
        <h1 className="text-white text-4xl font-bold">Performance</h1>
        <p className="text-white text-lg pt-7">
          Rust is blazingly fast and memory-efficient: with no runtime or
          garbage collector, it can power performance-critical services, run on
          embedded devices, and easily integrate with other languages.
        </p>
      </div>
      <div className="w-1/4">
        <h1 className="text-white text-4xl font-bold">Reliability</h1>
        <p className="text-white text-lg pt-7">
          Rust’s rich type system and ownership model guarantee memory-safety
          and thread-safety — enabling you to eliminate many classes of bugs at
          compile-time.
        </p>
      </div>
      <div className="w-1/4">
        <h1 className="text-white text-4xl font-bold">Productivity</h1>
        <p className="text-white text-lg pt-7">
          Rust has great documentation, a friendly compiler with useful error
          messages, and top-notch tooling — an integrated package manager and
          build tool, smart multi-editor support with auto-completion and type
          inspections, an auto-formatter, and more.
        </p>
      </div>
    </div>
  );
};
