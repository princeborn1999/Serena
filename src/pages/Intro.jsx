function IntroComponent() {
    return(
        <div className="flex justify-center p-5 text-center">
            <div>
                {/* Image rounded arduino */}
                <div className="w-full flex justify-center">
                    <div className=' bg-gray-200 rounded-lg w-3/4 h-48'></div>
                </div>

                <h1 className="font-bold text-lg">Introduction</h1>
                <div className="p-2">
                    <p>Empower your projects by the power of the web to control your Arduino. </p>
                    <p>This dynamic integration breathes life into your creations, </p>
                    <p>it offers a unique and transformative experience.</p>
                </div>
  
                <h1 className="font-bold text-lg">How to use it?</h1>
                <div className="w-full flex justify-center p-2">
                    <div className="bg-codeBg p-5 w-96 rounded-lg">
                        <code className="text-white">npm install rd-zone</code>
                    </div>
                </div>

                <h1 className="font-bold text-lg">Application</h1>
                <div className="p-2">
                    <p>Enhancing the realism of video games like 'Zombie' 'Racing' or 'Adventure'</p>
                    <p>titles through Virtual Reality (VR) is an exciting concept.</p>
                    <p>VR indeed offers a heightened sense of immersion</p>
                    <p>However, the current VR experience primarily focuses on visual engagement,</p>
                    <p>and there's an opportunity to enhance it further by engaging</p>
                    <p>more senses and environmental cues.</p>
                </div>

                <h1 className="font-bold text-lg">Contributor</h1>
                {/* TODO github頭貼 */}
            </div>
            <div>
                {/* TODO 旁邊要做指引 */}
            </div>
        </div>
    )
}
export default IntroComponent