import * as React from "react";
import IRreceiverControl from "./IRreceiver-control/IRreceiverControl";
import IRtransmitterControl from "./IRtransmitter-control/IRtransmitterControl";
import MG996RControl from "./MG996R-control/MG996RControl";
import Uno from "../../assets/image/uno.png";
import Leonardo from "../../assets/image/leonardo.png";
import Mega from "../../assets/image/mega.png";
import Nano from "../../assets/image/nano.png";
import { ConnectLight, DetectingLight } from "../../components/Unitlight";
function ControlComponent() {

  return (
    // hover:scale-105
    //TODO alert"doesn't detect any arduino devices"
    <div className="py-5 px-10 bg-slate-200 min-h-screen">
      <h1 className="text-2xl font-semibold">Devices</h1>
      <DetectingLight />
      <div className="flex">
        <div className="bg-white rounded shadow-sm p-2 m-2 w-1/6 ">
          <div>
            <p>Uno</p>
          </div>
          <img src={Uno} alt="uno" />
        </div>
        <div className="bg-white rounded shadow-sm p-2 m-2 w-1/6 ">
          <div>
            <p>Leonardo</p>
          </div>
          <img src={Leonardo} alt="leonardo" />
        </div>
        <div className="bg-white rounded shadow-sm p-2 m-2 w-1/6 ">
          <div>
            <p>Nano</p>
          </div>
          <img src={Nano} alt="nano" />
        </div>
        <div className="bg-white rounded shadow-sm p-2 m-2 w-1/6 ">
          <div>
            <p>Mega</p>
          </div>
          <img src={Mega} alt="mega" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Modules</h1>
      <div className="flex">
        <div className="bg-white rounded shadow-sm p-2 m-2 w-2/6">
          <IRreceiverControl />
        </div>
        <div className="bg-white rounded shadow-sm p-2 m-2 w-2/6">
          <IRtransmitterControl />
        </div>
        {/* <div className="bg-white rounded shadow-sm p-2 m-2 w-2/6">
          <MG996RControl />
        </div> */}
      </div>
    </div>
  );
}
export default ControlComponent;
