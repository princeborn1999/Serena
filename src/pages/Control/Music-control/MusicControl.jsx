import useSound from 'use-sound';
import angelical from '../../../assets/music/angelical-pad-143276.mp3'
function MusicControl(){
    const [play] = useSound(angelical);
    return(
            <div>
                <h1 className='font-semibold text-xl'>Music control</h1>
                <div className="flex text-green-500">
                    <div className=' bg-green-400 rounded-full w-3 h-3'></div>
                    <p>Connected</p>
                </div>
                <p>選擇音樂</p>
                <p>以音樂去聽覺 享受</p>
                <p> 室內? 室外 如何與溫度去搭配?</p>
                <div class="m-2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <button onClick={play}>Boop!</button>
                </div>
                <div class="m-2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                </div>
                <div class="m-2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                </div>
                <div class="m-2 flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
                </div>
            </div>
    )
}
export default MusicControl