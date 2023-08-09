import * as React from 'react';
import DegreeControl  from './Degree-control/DegreeControl';
import MusicControl from './Music-control/MusicControl';
const marks = [
    {
      value: 0,
      label: '0°C',
    },
    {
      value: 20,
      label: '20°C',
    },
    {
      value: 37,
      label: '37°C',
    },
    {
      value: 100,
      label: '100°C',
    },
  ];

  function valuetext(value) {
    return `${value}°C`;
  }
  
function ControlComponent() {
    return(
        //TODO alert"doesn't detect any arduino devices"
        <div className="p-5">   
            <div className='flex'>
                <div className='p-5 w-1/4'>
                  <DegreeControl />
                </div>
                <div className='p-5 w-1/4'>
                  <MusicControl />
                </div>
                <div className='p-5 w-1/4'>
                    RainControl
                </div>
                <div className='p-5 w-1/4'>
                    SmellControl
                </div>
            </div>
        </div>
    )
}
export default ControlComponent