import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import IRrecvImage from '../../../assets/image/IRreceiver.jpg'
function LedControl(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>Led module</h1>
                <ConnectLight />
                <div className='w-48'>
                    <img src={IRrecvImage} alt="IRreceiver" />
                </div>
                https://www.amazon.ca/Infrared-Transmitter-Module-Digital-Receiver/dp/B09LVFT3HT?th=1

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