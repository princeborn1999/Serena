import * as React from "react";
import DegreeControl from "./Degree-control/DegreeControl";
import RainControl from "./Rain-control/RainControl";
import SmellControl from "./Smell-control/SmellControl";
import Uno from '../../assets/image/uno.png';
import Leonardo from '../../assets/image/leonardo.png';
import { ConnectLight } from "../../components/Unitlight";
// import { Board } from 'johnny-five';

function ControlComponent() {
    return(
        //TODO alert"doesn't detect any arduino devices"
        <div className='py-5 px-10 bg-slate-200 min-h-screen'>   
            <h1 className='text-2xl font-semibold'>Devices</h1>
            <div className='flex'>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-1/6 hover:scale-105'>
                <div>
                  <p>Uno</p>
                  <ConnectLight />
                </div>
                <img src={Uno} alt="uno" />
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-1/6 hover:scale-105'>
                <div>
                  <p>Leonardo</p>
                  <ConnectLight />
                </div>
                <img src={Leonardo} alt="leonardo" />
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-1/6 hover:scale-105'>
                <div>
                  <p>Nano</p>
                  <ConnectLight />
                </div>
                <img src={Leonardo} alt="leonardo" />
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-1/6 hover:scale-105'>
                <div>
                  <p>Mega</p>
                  <ConnectLight />
                </div>
                <img src={Leonardo} alt="leonardo" />
              </div>
            </div>
            <div className='flex'>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-2/6'>
                <RainControl />
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-2/6'>
                <SmellControl />
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-2/6'>
                <DegreeControl />
              </div>
            </div>
            <div className='flex'>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-2/6'>
                <RainControl />
                {/*FingerprintControl */}
              </div>
              <div className='bg-white rounded shadow-sm p-2 m-2 w-2/6'>
                <SmellControl />
                {/* TalkControl -> 語音辨識*/}
              </div>
              <div className='rounded p-2 m-2 w-2/6'>
              </div>
            </div>
        </div>
    )
}
export default ControlComponent;
