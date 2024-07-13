import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <header
      className={`w-full !m-[0] absolute top-[0px] right-[0px] left-[0px] flex flex-row items-start justify-center pt-[47px] pb-[37px] pr-5 pl-[490px] box-border gap-[771px] max-w-full text-center text-17xl text-black font-inter lg:gap-[385px] lg:pl-[245px] lg:box-border mq450:gap-[96px] mq450:pl-5 mq450:box-border mq750:gap-[193px] mq750:pl-[122px] mq750:box-border ${className}`}
    >
      <h2 className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap z-[1]">
        Manger Operations
      </h2>
      <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[1px_4px_14.4px_rgba(0,_0,_0,_0.11)] bg-mintcream z-[2]" />
      <div className="w-52 flex flex-row items-start justify-start gap-[14px]">
        <div className="h-[42px] w-[42px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-honeydew w-full h-full z-[3]" />
          <img
            className="absolute top-[10px] left-[11px] w-[21px] h-[21px] z-[4]"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
          <Form className="self-stretch h-6 font-inter font-light text-xl text-black" />
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
