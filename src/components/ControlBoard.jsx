function ControlBoard(){
    return(
        <div className="flex">
            <div className="p-5">
               <h1 className="font-semibold text-xl">Led status</h1>
               <div className="bg-green-800 p-5 m-5 rounded text-white">OFF</div>
            </div>
            <div className="p-5">
               <h1 className="font-semibold text-xl">Servo status</h1>
               <div className="bg-green-800 p-5 m-5 rounded text-white">OFF</div>
            </div>
        </div>
    )
}
export default ControlBoard