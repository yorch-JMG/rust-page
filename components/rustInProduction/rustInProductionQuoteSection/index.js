import {RustInProductionQuote} from '../rustInProductionQuote';
export const RustInProductionQuoteSection = ({RustInProductionInfo}) => {
  return (
    <div className="divide-y divide-gray-500 pb-8">
      {RustInProductionInfo.map((rustInProductionObj, index) => {
        return (
          <RustInProductionQuote
            index={index}
            rustInProductionObj={rustInProductionObj}
          />
        );
      })}
    </div>
  );
};
