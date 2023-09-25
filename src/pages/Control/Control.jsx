import * as React from "react";
import LedControl from "./Led-control/LedControl";
import ServoControl from "./Servo-control/ServoControl";
import Uno from "../../assets/image/uno.png";
import Leonardo from "../../assets/image/leonardo.png";
import Mega from "../../assets/image/mega.png";
import Nano from "../../assets/image/nano.png";
import { ConnectLight, DetectingLight, PendingLight } from "../../components/Unitlight";
import "./Control.css";
function ControlComponent() {
  const selectBoard = (boardname) => {

  }
  return (


    // hover:scale-105
    //TODO alert"doesn't detect any arduino devices"
    // https://johnny-five.io/api/led/
    // https://johnny-five.io/api/servo/
    <div className="py-5 px-10 bg-slate-200 min-h-screen">
      <h1 className="text-2xl font-semibold">Devices</h1>
      <DetectingLight />
      <div className="flex">
        <div className="hover:bg-gray-300 hover:opacity-50 
                        bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer"
                        onClick={selectBoard('uno')}>
          <DetectingLight />
          <div>
            <p>Uno</p>
          </div>
          <img src={Uno} alt="uno" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-50 
                        bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer"
                        onClick={selectBoard('leonardo')}>
          <DetectingLight />
          <div>
            <p>Leonardo</p>
          </div>
          <img src={Leonardo} alt="leonardo" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-50 
                        bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer"
                        onClick={selectBoard('nano')}>
          <DetectingLight />
          <div>
            <p>Nano</p>
          </div>
          <img src={Nano} alt="nano" />
        </div>
        <div className="hover:bg-gray-300 hover:opacity-50 
                        bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer"
                        onClick={selectBoard('mega')}>
          <PendingLight />
          <div>
            <p>Mega</p>
          </div>
          <img src={Mega} alt="mega" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Modules</h1>
      <div className="flex">
        <div className="bg-white rounded shadow-sm p-2 m-2 w-2/6">
          <LedControl />
        </div>
        <div className="bg-white rounded shadow-sm p-2 m-2 w-2/6">
          <ServoControl />
        </div>
      </div>
    </div>
  );
}
export default ControlComponent;
