import { useState, useEffect } from 'react';
import LedControl from "./Led-control/LedControl";
import ServoControl from "./Servo-control/ServoControl";
import Uno from "../../assets/image/uno.png";
import Leonardo from "../../assets/image/leonardo.png";
import Mega from "../../assets/image/mega.png";
import Nano from "../../assets/image/nano.png";
import { ConnectLight, DetectingLight, PendingLight } from "../../components/Unitlight";
import "./Control.css";
import { FcAdvance } from "react-icons/fc";
function ControlComponent() {
  const [selected,setSelected] = useState(false)
  const [selectBoard , setSelectBoard ] = useState('')
  const [socketBoard , setSocketBoard ] = useState('')
  const [enableModule, setEnableModule] = useState(false)
  const clickToSelectBoard = (boardname) => {
    setSelectBoard(boardname)
    setSelected(true)
  }
  const selectClass = 'shadow-lg bg-white opacity-100 bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer'
  const unSelectClass ='shadow-lg hover:bg-white bg-gray-300 hover:opacity-100 opacity-80 bg-white rounded shadow-sm p-2 m-2 w-1/6 hover-pointer'
  useEffect(()=>{
    // if socket回傳給我 connected params: 該板子)
    setSocketBoard('uno')
    setEnableModule(true)
    // if disconnect
    setSelectBoard('')
    setSocketBoard('')
    setSelected(false)
  })
  return (
    <div className="py-5 px-10 bg-slate-200 min-h-screen">
      <h1 className="text-2xl font-semibold">Devices</h1>
      {!selected && <DetectingLight />}
      <div className='flex text-lg'>
        <div className='p-1'>
          <FcAdvance />
        </div>
        <p>Click to detecting board</p>
      </div>
      <div className="flex">
        <div className={selectBoard === 'uno' ? selectClass : unSelectClass}
                        onClick={() => clickToSelectBoard('uno')}>
          {
           selectBoard === 'uno' && <PendingLight /> ||
           socketBoard === 'uno' && <ConnectLight />
          }
          <div>
            <p>Uno</p>
          </div>
          <img src={Uno} alt="uno" />
        </div>
        <div className={selectBoard === 'leonardo' ? selectClass : unSelectClass}
                        onClick={() => clickToSelectBoard('leonardo')}>
          {
           selectBoard === 'leonardo' && <PendingLight /> ||
           socketBoard === 'leonardo' && <ConnectLight />
          }
          <div>
            <p>Leonardo</p>
          </div>
          <img src={Leonardo} alt="leonardo" />
        </div>
        <div className={selectBoard === 'nano' ? selectClass : unSelectClass}
                        onClick={() => clickToSelectBoard('nano')}>
          {
           selectBoard === 'nano' && <PendingLight /> ||
           socketBoard === 'nano' && <ConnectLight />
          }
          <div>
            <p>Nano</p>
          </div>
          <img src={Nano} alt="nano" />
        </div>
        <div className={selectBoard === 'mega' ? selectClass : unSelectClass}
                        onClick={() => clickToSelectBoard('mega')}>
          {
           selectBoard === 'mega' && <PendingLight /> ||
           socketBoard === 'mega' && <ConnectLight />
          }
          <div>
            <p>Mega</p>
          </div>
          <img src={Mega} alt="mega" />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Modules</h1>
      <div className={enableModule?'flex opacity-100':'flex opacity-20'}>
        <div className="bg-white rounded shadow-lg p-2 m-2 w-2/6">
          <LedControl />
        </div>
        <div className="bg-white rounded shadow-lg p-2 m-2 w-2/6">
          <ServoControl />
        </div>
      </div>
      <h1 className="text-2xl font-semibold">Diagram Graph</h1>
      <div>

      </div>
    </div>
  );
}
export default ControlComponent;
