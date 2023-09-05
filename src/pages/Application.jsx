function ApplicationComponent() {
    return(
        <div className="bg-slate-200 min-h-screen min-w-full">
            {/* R3F的畫面 */}
            <div className="flex justify-center py-10">
                <div className=" bg-gray-900 rounded-lg w-2/3 h-96"></div>
            </div>
            <div className="flex">
                <div className="bg-white p-2">
                    Rain -> light, Moderate, Heavy
                </div>
                <div className="bg-white p-2">
                   Temperature -> cold, warm, hot
                </div>
                <div className="bg-white p-2">
                    Smell(Wooden) -> light, Moderate, Heavy
                </div>
            </div>
        </div>
    )
}
export default ApplicationComponent