import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import ServoImage from '../../../assets/image/Servo.jpg';
function ServoControl(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Servo module</h1>
                <ConnectLight />
                <div className='w-48 m-1'>
                    <img src={ServoImage} alt="IRreceiver" />
                </div>
                {/* 改成Unit 跟 Template */}
                <a href="https://www.amazon.com/-/zh_TW/dp/B0CHFDJW52/ref=sr_1_41?keywords=mg996r+servo&qid=1695728890&sr=8-41">
                    Click to visit the product page!
                </a>
                {/* TODO: 燈號連接紅色或藍色 */}
                {/* TODO  動畫請連接裝置IR receiver, IR send */}

                {/* 目前支援sendRaw */}
                <div className='w-64 h-32 bg-gray-200'></div>
                {/* reconnection  */}
            </div>
    )
}
export default ServoControl