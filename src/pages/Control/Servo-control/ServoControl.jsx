import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import ServoImage from '../../../assets/image/Servo.jpg';
function ServoControl(){
    const [breakTime, setBreakTime] = useState('');
    const [timeKeeping, setTimeKeeping] = useState('');
    const [angle, setAngle] = useState('180');
    const sendServo = () =>{
        
    }
    const stopServo = () =>{

    }
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Servo module</h1>
                <ConnectLight />
                <div className='w-56 m-1'>
                    <img src={ServoImage} alt="IRreceiver" />
                </div>
                {/* 改成Unit 跟 Template */}
                <a className='text-blue-600' target='_blank' href="https://www.amazon.com/-/zh_TW/dp/B0CHFDJW52/ref=sr_1_41?keywords=mg996r+servo&qid=1695728890&sr=8-41">
                    Click to visit the product page!
                </a>
                <div className='min-w-64 min-h-32 p-2 m-2 bg-gray-200 rounded-lg'>
                    <h3>Parameters</h3>
                    <div className='flex p-2'>
                        <p className='pr-2'>Break time</p>
                        <input className='rounded border-2 border-sky-500' 
                        value={breakTime}
                        onChange={(e) => setBreakTime(e.target.value)}
                        type="text" />
                    </div>
                    <div className='flex p-2'>
                        <p className='pr-2'>Timekeeping</p>
                        <input className='rounded border-2 border-sky-500'
                        value={timeKeeping}
                        onChange={(e) => setTimeKeeping(e.target.value)}
                         type="text" />
                    </div>
                    <div className='flex p-2'>
                        <p className='pr-2'>Angle</p>
                        <select className='rounded border-2 border-sky-500' name="angle"
                        value={angle}
                        onChange={(e) => setAngle(e.target.value)}
                        >
                            <option value="180">180°</option>
                            <option value="90">90°</option>
                        </select>
                    </div>
                </div>
                <div className='pl-5 flex'>
                    <button className='py-2 px-5 text-white text-lg bg-green-500 focus:bg-green-700 rounded-lg'
                            onClick={()=>sendServo()}>Send</button>
                    <button className='ml-5 py-2 px-5 text-white text-lg bg-red-500 focus:bg-red-700 rounded-lg'
                            onClick={()=>stopServo()}>Stop</button>
                </div>
            </div>
    )
}
export default ServoControl