import { useCallback } from "react";
import PropTypes from "prop-types";

const TableHeader = ({ className = "" }) => {
  const onApproveDataClick = useCallback(() => {
    // Please sync "Swaaha 4" to the project
  }, []);

  return (
    <div
      className={`w-[1256px] shadow-[1px_4px_14.4px_rgba(0,_0,_0,_0.11)] bg-mintcream flex flex-col items-end justify-start pt-[61px] px-0 pb-[82.2px] box-border gap-[12.2px] max-w-full z-[1] text-left text-5xl-5 text-black font-inter mq750:pt-[851px] mq750:pb-[53px] mq750:box-border ${className}`}
    >
      <div className="self-stretch h-[637px] relative shadow-[1px_4px_14.4px_rgba(0,_0,_0,_0.11)] bg-mintcream hidden" />
      <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[58px] pb-[18.2px] box-border max-w-full text-darkgreen lg:pl-[29px] lg:pr-[29px] lg:box-border">
        <div className="w-[1125.3px] flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="relative shrink-0 z-[2] mq450:text-xl">
            Client Details
          </div>
          <div className="flex flex-row items-start justify-start gap-[130.2px] max-w-full mq450:gap-[33px] mq750:gap-[65px] mq1050:flex-wrap">
            <div className="w-[173.8px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border">
              <div className="relative inline-block min-w-[129px] z-[2] mq450:text-xl">
                Timestamp
              </div>
            </div>
            <div className="relative inline-block min-w-[81px] z-[2] mq450:text-xl">
              Weight
            </div>
            <div className="relative z-[2] mq450:text-xl">Reject / Approve</div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3.4px] flex flex-row items-start justify-start pt-0 px-0 pb-[2.6px] box-border max-w-full">
        <div className="self-stretch flex-1 relative box-border max-w-full z-[2] border-t-[0.8px] border-solid border-lightgray" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[2.8px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[5px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px] text-lg-8 text-white">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-[0.6831] shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <div className="h-[38.6px] flex-1 relative">
              <div
                className="absolute top-[0px] left-[0px] shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green w-full h-full cursor-pointer z-[2]"
                onClick={onApproveDataClick}
              />
              <div className="absolute top-[8.5px] left-[10.4px] uppercase inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3.4px] relative">
        <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[2] border-t-[0.8px] border-solid border-lightgray" />
        <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[3] border-t-[0.8px] border-solid border-lightgray" />
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[2.4px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[5px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-[10.4px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px]">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-1 shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] pb-[7.1px] pr-[9px] pl-2.5 bg-green shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start z-[2] hover:bg-limegreen">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1.2px] relative">
        <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[2] border-t-[0.8px] border-solid border-lightgray" />
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[3] border-t-[0.8px] border-solid border-lightgray" />
          <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[4] border-t-[0.8px] border-solid border-lightgray" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[2.4px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[7.6px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start pt-[2.6px] pb-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px]">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-1 shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] pb-[7.1px] pr-[9px] pl-2.5 bg-green shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start z-[2] hover:bg-limegreen">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[3.8px] relative">
        <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[2] border-t-[0.8px] border-solid border-lightgray" />
        <div className="absolute top-[0px] left-[0px] w-[1256px] h-[1.2px]">
          <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[3] border-t-[0.8px] border-solid border-lightgray" />
          <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[4] border-t-[0.8px] border-solid border-lightgray" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[5.8px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[5px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-[5.4px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start py-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px]">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-1 shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] pb-[7.1px] pr-[9px] pl-2.5 bg-green shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start z-[2] hover:bg-limegreen">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1.2px] relative">
        <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[2] border-t-[0.8px] border-solid border-lightgray" />
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[3] border-t-[0.8px] border-solid border-lightgray" />
          <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[4] border-t-[0.8px] border-solid border-lightgray" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[2.4px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[7.6px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start pt-[2.6px] pb-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px]">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-1 shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] pb-[7.1px] pr-[9px] pl-2.5 bg-green shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start z-[2] hover:bg-limegreen">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[1.2px] relative">
        <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[2] border-t-[0.8px] border-solid border-lightgray" />
        <div className="absolute top-[0px] left-[0px] w-full h-full">
          <div className="absolute top-[0px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[3] border-t-[0.8px] border-solid border-lightgray" />
          <div className="absolute top-[0.4px] left-[0px] box-border w-[1256.8px] h-[0.8px] z-[4] border-t-[0.8px] border-solid border-lightgray" />
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[2.8px] pr-[59px] pl-[63px] box-border max-w-full lg:pl-[31px] lg:pr-[29px] lg:box-border">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] lg:flex-wrap">
          <div className="w-[260px] flex flex-col items-start justify-start pt-[7.6px] pb-0 pr-3.5 pl-0 box-border text-xl">
            <div className="self-stretch relative font-light z-[2] mq450:text-base">
              Ryan Gosling
            </div>
          </div>
          <div className="w-[270px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <div className="self-stretch relative font-light whitespace-nowrap z-[2] mq450:text-xl">
              13-06-2024 10:49 AM
            </div>
          </div>
          <div className="w-[95px] flex flex-col items-start justify-start pt-[2.6px] pb-0 pr-[11px] pl-0 box-border">
            <div className="self-stretch relative font-light z-[2] mq450:text-xl">
              100 kg
            </div>
          </div>
          <div className="w-56 flex flex-row items-start justify-start gap-[9.4px]">
            <button className="cursor-pointer [border:none] pt-[8.5px] px-[17px] pb-[7.1px] bg-tomato-200 flex-1 shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] flex flex-row items-start justify-start z-[2] hover:bg-tomato-100">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.13)] bg-tomato-200 hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[71px] z-[3]">
                Reject
              </div>
            </button>
            <button className="cursor-pointer [border:none] pt-[8.5px] pb-[7.1px] pr-[9px] pl-2.5 bg-green shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] flex flex-row items-start justify-start z-[2] hover:bg-limegreen">
              <div className="h-[38.6px] w-[107.3px] relative shadow-[2px_4px_4px_rgba(0,_0,_0,_0.12)] bg-green hidden" />
              <div className="relative text-lg-8 uppercase font-inter text-white text-left inline-block min-w-[87px] z-[3]">
                Approve
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="self-stretch h-[0.8px] relative box-border z-[2] border-t-[0.8px] border-solid border-lightgray" />
    </div>
  );
};

TableHeader.propTypes = {
  className: PropTypes.string,
};

export default TableHeader;
