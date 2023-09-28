import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import LedImage from '../../../assets/image/Led.jpg';
import socket from "../../../socket";
function LedControl(){
    const [breakTime, setBreakTime] = useState('');
    const [timeKeeping, setTimeKeeping] = useState('');
    const sendLed = () => { 
        //TODO: 紀錄value , socket io傳data  breakTime, timeKeeping
        const data = {
            breakTime: breakTime,
            timeKeeping: timeKeeping
        }
    }
    const stopLed = () => {
        //TODO: 紀錄value , socket io傳data
    }
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Led module</h1>
                <div className='w-48 m-1'>
                    <img src={LedImage} alt="IRreceiver" />
                </div>
                <a className='text-blue-600' target='_blank' href="https://www.amazon.in/REES52-Light-Assorted-Arduino-100pcs/dp/B075VZRWDV">
                    Click to visit the product page!
                </a>
                <div className='min-w-64 min-h-32 p-2 m-2 bg-gray-200 rounded-lg'>
                    <h3>Parameters</h3>
                    <div className='flex p-2'>
                        <p className='pr-2'>Break time</p>
                        <input className='rounded border-2 border-sky-500' type="text" 
                               value={breakTime} onChange={(e) => setBreakTime(e.target.value)}
                        />
                    </div>
                    <div className='flex p-2'>
                        <p className='pr-2'>Timekeeping</p><input className='rounded border-2 border-sky-500'
                           type="text" value={timeKeeping} onChange={(e) => setTimeKeeping(e.target.value)}/>
                    </div>
                </div>
                <div className='pl-5 flex'>
                    <button className='py-2 px-5 text-white text-lg bg-green-500 transition duration-300 active:bg-green-700 rounded-lg focus:outline-none' 
                            onClick = {()=>sendLed() }>Send</button>
                    <button className='ml-5 py-2 px-5 text-white text-lg bg-red-500 transition duration-300 active:bg-red-700 rounded-lg focus:outline-none'
                            onClick={()=>stopLed()}>Stop</button>
                </div>
            </div>
    )
}
export default LedControl