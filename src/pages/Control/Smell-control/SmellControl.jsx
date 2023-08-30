export function SmellControl(){
    return(
        <div>
            <h1 className='font-semibold text-xl'>Smell control</h1>
            <div className="flex text-green-500">
                <div className=' bg-green-400 rounded-full w-3 h-3'></div>
                <p>Connected</p>
            </div>
            <p>
                請自備arduino 霧化器
            </p>
        </div>
    )
}
export default SmellControl