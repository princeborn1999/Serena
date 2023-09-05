import { ConnectLight, DisconnectLight, PendingLight } from '../../../components/Unitlight';

export function SmellControl(){
    return(
        <div className='m-5'>
            <h1 className='font-semibold text-xl'>Smell control</h1>
            <DisconnectLight />
            <div className='flex'>
                <p className='pr-2'>Example link:</p>
                <a href="https://www.amazon.com/MG996R-MG996-Digital-Torque-Helicopter/dp/B0981CFJZ6/ref=sr_1_50?keywords=mg996r+servo&qid=1693462362&sr=8-50">
                    https://www.amazon.com/MG996R...
                </a>
            </div>
            <input type="checkbox" id="rain-checkbox" value="check"></input>
            <label for="rain-control" className='pl-2'>Click to enable Atomizer</label>
            <p>Please make sure already set your atomizer before clicking the checkbox.</p>
        </div>
    )
}
export default SmellControl