import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
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
                <div className='p-5'>
                  <DegreeControl />
                </div>
                <div className='p-5'>
                  <MusicControl />
                </div>
            </div>
            { false &&
                <div>
                    <div label="rain-control m-5">
                        <h1>Rainy?</h1>
                        {/* TODO: light rain, small rain, heavy rain */}
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={10}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </Box>
                    </div>
                    <div label="smell-control m-5">
                        <h1>What's it smells like?</h1>
                        {/* TODO: single-select wood, flower */}
                        <Box sx={{ width: 300 }}>
                            <Slider
                                aria-label="Custom marks"
                                defaultValue={20}
                                getAriaValueText={valuetext}
                                step={10}
                                valueLabelDisplay="auto"
                                marks={marks}
                            />
                        </Box>
                    </div>
                </div>
            }
        </div>
    )
}
export default ControlComponent