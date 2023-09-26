import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import LedImage from '../../../assets/image/Led.jpg';
function LedControl(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Led module</h1>
                <ConnectLight />
                <div className='w-48 m-1'>
                    <img src={LedImage} alt="IRreceiver" />
                </div>
                <a href="https://www.amazon.in/REES52-Light-Assorted-Arduino-100pcs/dp/B075VZRWDV">
                    Click to visit the product page!
                </a>

                {/* 改成Unit 跟 Template */}
                {/* TODO: 燈號連接紅色或藍色 */}
                {/* TODO  動畫請連接裝置IR receiver, IR send */}
                <div className='flex'>
                    <p>Protocol:</p>
                    <select name="" id="">
                        <option value="http">NEC</option>
                        <option value="https">Raw</option>
                        <option value="ftp">Samsung</option>
                    </select>
                </div>
                
                <div className='w-64 h-32 bg-gray-200'></div>
        
                {/* reconnection  */}
            </div>
    )
}
export default LedControl