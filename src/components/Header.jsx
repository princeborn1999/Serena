function HeaderComponent() {
    return(
        <div className="relative">
            <div className="fixed top-0 left-0 right-0 p-2 shadow-sm bg-blue-400">
                <header className="flex">
                    <div className="flex justify-starts pl-5 ">
                        <h1 className="text-white font-bold text-3xl drop-shadow-lg shadow-white-400/50">ZONE</h1>
                    </div>
                    <div className="flex justify-end">
                        <button className="text-white" onClick={()}>sign in</button>
                    </div>
                </header>
            </div>
        </div>
    )
}
export default HeaderComponent

