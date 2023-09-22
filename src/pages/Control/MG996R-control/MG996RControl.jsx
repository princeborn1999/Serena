import {
  ConnectLight,
  DisconnectLight,
  PendingLight,
} from "../../../components/Unitlight";
import { useState, useEffect } from "react";
import { socket } from "../../../socket";

export function MG996RControl() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected to the server");
    });
    socket.on("eventName", (data) => {
      console.log("Received event from server:", data);
    });
    return () => {
      socket.disconnect();
    };
  }, []);
  function enableRain() {
    console.log("enableRain ...");
    socket.emit("asd", { text: "Some data from the client", count: 1 });
  }
  return (
    <div className="m-5">
      <h1 className="font-semibold text-xl">MG996R module</h1>
      <DisconnectLight />
      {/* https://www.amazon.com/Gikfun-Digital-Receiver-Transmitter-Arduino/dp/B0816P2545 */}
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
      <button onClick={() => enableRain()} className="p-2">
        Connect
      </button>
    </div>
  );
}
export default MG996RControl;
