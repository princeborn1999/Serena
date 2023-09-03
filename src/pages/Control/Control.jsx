import * as React from "react";
import DegreeControl from "./Degree-control/DegreeControl";
import RainControl from "./Rain-control/RainControl";
import SmellControl from "./Smell-control/SmellControl";
const marks = [
  {
    value: 0,
    label: "0°C",
  },
  {
    value: 20,
    label: "20°C",
  },
  {
    value: 37,
    label: "37°C",
  },
  {
    value: 100,
    label: "100°C",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function ControlComponent() {
  return (
    //TODO alert"doesn't detect any arduino devices"
    <div className="py-5 px-10">
      <div className="">
        <DegreeControl />
      </div>
      <div className="">
        <RainControl />
      </div>
      <div className="">
        <SmellControl />
      </div>
    </div>
  );
}
export default ControlComponent;
