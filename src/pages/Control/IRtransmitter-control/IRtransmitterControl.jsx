import React, { useState, useEffect } from 'react';
import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';

function IRtransmitterontrol(){
    return(
            <div className='m-5'>
                <h1 className='font-semibold text-xl'>IR Transmitter module</h1>
                <ConnectLight />
                {/* 改成Unit 跟 Template */}
                https://www.amazon.ca/Infrared-Transmitter-Module-Digital-Receiver/dp/B09LVFT3HT?th=1
                {/* TODO: 燈號連接紅色或藍色 */}
                {/* TODO  動畫請連接裝置IR receiver, IR send */}

                {/* 目前支援sendRaw */}


                <p>please 連接冷氣機</p>
                <p>請自備arduino IRremote receiver, IRremote transmit</p>
                <p>秀圖</p>
                <div className='w-64 h-32 bg-gray-200'></div>
                ex為例 以冷氣的圖為例
                最後要demo影片
                {/* reconnection  */}
            </div>
    )
}
export default IRtransmitterontrol