import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
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
function DegreeControl(){
    return(
            <div>
                <h1 className='font-bold'>DEGREE</h1>
                <p>please 連接冷氣機</p>
                <p>請自備arduino IRremote receiver, IRremote transmit</p>
                <p>秀圖</p>
                <div className='w-64 h-32 bg-gray-200'></div>
                ex為例 以冷氣的圖為例
                最後要demo影片
                
                <Slider
                    aria-label="Custom marks"
                    defaultValue={20}
                    getAriaValueText={valuetext}
                    step={10}
                    valueLabelDisplay="auto"
                    marks={marks}
                />
            </div>
    )
}
export default DegreeControl