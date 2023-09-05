import * as React from 'react';
import DegreeControl  from './Degree-control/DegreeControl';
import MusicControl from './Music-control/MusicControl';
import RainControl from './Rain-control/RainControl';
import SmellControl from './Smell-control/SmellControl';
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
        <div className='py-5 px-10 bg-slate-100'>   
            <h1 className='text-2xl font-semibold'>Devices</h1>
            <div className='flex'>
              <div className='bg-white shadow-sm p-5 w-2/6'>
                <DegreeControl />
              </div>
              <div className='bg-white shadow-sm p-5 w-2/6'>
                <RainControl />
              </div>
              <div className='bg-white shadow-sm p-5 w-2/6'>
                <MusicControl />
              </div>
            </div>
        </div>
    )
}
export default ControlComponent