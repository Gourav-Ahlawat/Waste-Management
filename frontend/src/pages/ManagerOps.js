import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import TableHeader from "../components/TableHeader";

const ManagerOps = () => {
  return (
    <div className="w-full relative  bg-floralwhite overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <img
        className="w-full h-[1289px] absolute !m-[0] right-[0px] bottom-[-105px] left-[0px] max-w-full overflow-hidden shrink-0 object-cover opacity-15"
        alt=""
        src="/17-1@2x.png"
      />
      <FrameComponent1 />
      <FrameComponent />
      <section className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[440px] box-border max-w-full mt-[-831px] lg:pl-[220px] lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[110px] mq750:box-border">
        <TableHeader />
      </section>
    </div>
  );
};

export default ManagerOps;
