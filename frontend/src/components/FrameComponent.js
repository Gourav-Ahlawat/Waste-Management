import React from "react";
import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[414px] flex flex-col items-start justify-start pt-10 px-[68px] pb-[150px] box-border relative gap-[97px] max-w-full text-left text-11xl text-black font-inter mq450:gap-[48px] mq450:pt-5 mq450:px-5 mq450:pb-[63px] mq450:box-border mq1050:pt-[26px] mq1050:pb-[97px] mq1050:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start py-0 px-px">
        <img
          className="h-[49px] w-[262px] relative object-cover z-[3]"
          loading="lazy"
          alt=""
          src="/croppedlogopng11-1@2x.png"
        />
      </div>
      <div className="w-full h-full !m-[0] absolute top-[0px] right-[0px] bottom-[0px] left-[0px] flex flex-row items-start justify-start max-w-full z-[4]">
        <div className="self-stretch flex-1 relative shadow-[1px_4px_14.4px_rgba(0,_0,_0,_0.11)] bg-mintcream max-w-full" />
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[11px]">
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-[57px] pb-[13px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex-1 flex flex-row items-start justify-start">
            <div className="h-[164px] flex-1 relative">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-honeydew w-full h-full z-[5]" />
              <img
                className="absolute top-[45px] left-[44px] w-[75px] h-[75px] z-[6]"
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-[15px]">
          <h3 className="m-0 relative text-inherit font-light font-inherit z-[5] mq450:text-lg mq750:text-5xl">
            Royal Academy
          </h3>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center pt-0 pb-[37px] pr-[22px] pl-5 text-5xl">
          <div className="relative font-light inline-block min-w-[86px] z-[5] mq450:text-lgi">
            Manger
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[222px]">
          <div className="h-px flex-1 relative box-border z-[5] border-t-[1px] border-solid border-lightgray" />
        </div>
        <div className="flex flex-row items-start justify-start pt-0 pb-[29px] pr-12 pl-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[24px]">
            <img
              className="h-[38px] w-[38px] relative overflow-hidden shrink-0 min-h-[38px] z-[5]"
              loading="lazy"
              alt=""
              src="/fi-1660165.svg"
            />
            <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[115px] z-[5] mq450:text-lg mq750:text-5xl">
              Support
            </h3>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start pt-0 pb-[28.9px] pr-[60px] pl-[53px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[23.9px]">
            <img
              className="h-[38.1px] w-[38.1px] relative min-h-[38px] shrink-0 z-[5]"
              loading="lazy"
              alt=""
              src="/ikon.svg"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[103px] shrink-0 z-[5] mq450:text-lg mq750:text-5xl">
                History
              </h3>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start py-0 px-[51px] mq450:pl-5 mq450:pr-5 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[22px]">
            <img
              className="h-[42px] w-[42px] relative min-h-[42px] z-[5]"
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <h3 className="m-0 relative text-inherit font-normal font-inherit inline-block min-w-[102px] z-[5] mq450:text-lg mq750:text-5xl">
                Setting
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
