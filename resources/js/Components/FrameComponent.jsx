import { useMemo } from "react";

const FrameComponent = ({
  className = "",
  prop,
  prop1,
  prop2,
  prop3,
  bBackgroundColor,
  propMinWidth,
  propBackgroundColor,
  propMinWidth1,
}) => {
  const rectangleDivStyle = useMemo(() => {
    return {
      backgroundColor: bBackgroundColor,
    };
  }, [bBackgroundColor]);

  const bStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const rectangleDiv1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const b1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[18.6px] text-center text-xl-6 text-gray-100 font-karla ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[17.9px]">
        <div className="flex-1 flex flex-row items-start justify-start pt-[6.4px] pb-[5.4px] pr-[13px] pl-3.5 relative">
          <div
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-[3.81px] bg-lightgreen"
            style={rectangleDivStyle}
          />
          <b
            className="relative font-bold inline-block min-w-[8px] z-[1] mq450:text-base"
            style={bStyle}
          >
            {prop}
          </b>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start pt-[6.4px] pb-[5.4px] pr-2 pl-3.5 relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-[3.81px] bg-white" />
          <b className="relative font-bold inline-block min-w-[13px] z-[1] mq450:text-base">
            {prop1}
          </b>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[17.9px]">
        <div className="flex-1 flex flex-row items-start justify-start pt-[6.4px] pb-[5.4px] pr-2 pl-3.5 relative">
          <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-[3.81px] bg-white" />
          <b className="relative font-bold inline-block min-w-[13px] z-[1] mq450:text-base">
            {prop2}
          </b>
        </div>
        <div className="flex-1 flex flex-row items-start justify-start pt-[6.4px] pb-[5.4px] pr-2 pl-3.5 relative">
          <div
            className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_2px_2px_rgba(0,_0,_0,_0.15)] rounded-[3.81px] bg-white"
            style={rectangleDiv1Style}
          />
          <b
            className="relative font-bold inline-block min-w-[13px] z-[1] mq450:text-base"
            style={b1Style}
          >
            {prop3}
          </b>
        </div>
      </div>
    </div>
  );
};


export default FrameComponent;
