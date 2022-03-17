import Image from 'next/image';

export const RustInProductionQuote = ({index, rustInProductionObj}) => {
  if (index % 2) {
    return (
      <div
        key={index + 1}
        className="w-full flex flex-col lg:flex-row-reverse items-center pt-7">
        <div className="text-2xl px-10 flex space-x-3">
          <div>
            <b>''</b>
          </div>
          <div>
            <div className="divide-y divide-dotted divide-black">
              <div className="pb-2">
                <p>{rustInProductionObj.quote}</p>
              </div>
              <div className="pt-6 text-right">
                <p>- {rustInProductionObj.author}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/3 h-36 relative">
          <Image
            src={rustInProductionObj.imageURL}
            layout="fill"
            loading="lazy"
          />
        </div>
      </div>
    );
  }
  return (
    <div key={index + 1} className="w-full flex flex-col lg:flex-row items-center pb-7">
      <div className="text-2xl px-10 flex space-x-3">
        <div>
          <b>''</b>
        </div>
        <div className="divide-y divide-dotted divide-black">
          <div className="pb-2">
            <p>{rustInProductionObj.quote}</p>
          </div>
          <div className="pt-6 text-right">
            <p>- {rustInProductionObj.author}</p>
          </div>
        </div>
      </div>
      <div className="mx-auto py-8 lg:mx-0 w-1/3 h-16 relative">
        <Image
          src={rustInProductionObj.imageURL}
          layout="fill"
          loading="lazy"
        />
      </div>
    </div>
  );
};
