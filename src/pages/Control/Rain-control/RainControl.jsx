import {
  ConnectLight,
  DisconnectLight,
  PendingLight,
} from "../../../components/Unitlight";
import { useState, useEffect } from "react";
// import { socket } from "../../../socket";
import io from "socket.io-client";
const socket = io.connect("http://localhost:3001");

export function RainControl() {
  const turnRain = () => {
    socket.emit("send_message", { message: "hello" });
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      alert(data.message);
    });
  }, [socket]);
  return (
    <div className="m-5">
      <h1 className="font-semibold text-xl">Rain control</h1>
      <DisconnectLight />
      <div>
        <p>component: MG996R</p>
      </div>
      <div className="flex">
        <p className="pr-2">Example link:</p>
        <a href="https://www.amazon.com/MG996R-MG996-Digital-Torque-Helicopter/dp/B0981CFJZ6/ref=sr_1_50?keywords=mg996r+servo&qid=1693462362&sr=8-50">
          https://www.amazon.com/MG996R...
        </a>
      </div>
      <input type="checkbox" id="rain-checkbox" value="check"></input>
      <label for="rain-control" className="pl-2">
        Click to enable Rain
      </label>
      {/*TODO:  請先穿戴好雨衣雨具 */}
      <button onClick={() => turnRain()} className="p-2">
        Connect
      </button>
    </div>
  );
}
export default RainControl;
