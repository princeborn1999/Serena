export function ConnectLight(){
    return(
      <div className="flex text-green-500">
        <div>
          <div className=' bg-green-400 rounded-full w-2 h-2 inline-block align-middle mx-2'></div>
        </div>
        <div>
          <p className='inline-block align-middle'>Connected</p>
        </div>
    </div>
    )
  }
export function DisconnectLight(){
  return(
    <div className="flex text-red-500">
      <div>
        <div className=' bg-red-400 rounded-full w-2 h-2 inline-block align-middle mx-2'></div>
      </div>
      <div>
        <p className='inline-block align-middle'>Disconnected</p>
      </div>
  </div>
  )
}
export function PendingLight(){
  return(
    <div className="flex text-orange-500">
      <div>
        <div className=' bg-orange-400 rounded-full w-2 h-2 inline-block align-middle mx-2'></div>
      </div>
      <div>
        <p className='inline-block align-middle'>Pending</p>
      </div>
  </div>
  )
}