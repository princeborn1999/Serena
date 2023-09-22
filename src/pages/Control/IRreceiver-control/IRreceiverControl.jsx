import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';
import IRrecvImage from '../../../assets/image/IRreceiver.jpg'
function IRreceiverControl(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>IR Receiver module</h1>
                <ConnectLight />
                {/* 改成Unit 跟 Template */}
                {/* TODO: 燈號連接紅色或藍色 */}
                {/* TODO  動畫請連接裝置IR receiver, IR send */}
                <p>please 連接冷氣機</p>
                <p>請自備arduino IRremote receiver, IRremote transmit</p>
                <img src={IRrecvImage} alt="IRreceiver" />
                <div className='w-64 h-32 bg-gray-200'></div>
                ex為例 以冷氣的圖為例
                最後要demo影片
                {/* reconnection  */}
            </div>
    )
}
export default IRreceiverControl