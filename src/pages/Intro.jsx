import Contributors from "./Contributors";
import Reduino from "../../src/assets/image/reduino.jpg";
import Zombie1 from "../../src/assets/image/zombie_01.jpg";
import Zombie2 from "../../src/assets/image/zombie_02.jpg";
function IntroComponent() {
  return (
    <div className="flex justify-center">
      <div className="px-40 py-10 w-4/5">
        <section id="intro">
          <div className="h-48 pl-12 flex justify-center">
            <img src={Reduino} alt="reduinoBanner" />
          </div>
          <h1 className="font-bold text-lg">Introduction</h1>
          <div className="p-2">
            <p>
              Empowering your projects by the power of the web to control your
              Arduino. This dynamic integration{" "}
            </p>
            <p>
              breathes life into your creations, it offers a unique and
              transformative experience.
            </p>
          </div>
          {/* Image rounded arduino */}
          {/* <div className="w-full flex m-2">
            <div className=" bg-gray-200 rounded-lg w-3/4 h-48"></div>
          </div> */}
        </section>

        <section id="use">
          <h1 className="font-bold text-lg">How to use it?</h1>
          <div className="bg-codeBg p-5 w-96 rounded-lg">
            <code className="text-white">npm install reduino</code>
          </div>
          <br />
          <p>Don't use wrong way before check johnny-five support.</p>
          <div className="border p-3 w-2/3">
            <code>
              <p>import {"{ useIRrecv }"} from 'zono'</p>
              <p>const irRecv = useIRrecv('protocol',sendData)</p>
              <p>ir.send() //send the sendData❌</p>
            </code>
          </div>
          <br />
          <div className="border p-3 w-2/3">
            <code>
              <p>import {"{ useIRtrans }"} from 'zono'</p>
              <p>const irTrans = useIRtrans('protocol',sendData)</p>
              <p>ir.send() //send the sendData✅</p>
            </code>
          </div>
          <br />
        </section>

        <section id="application">
          <h1 className="font-bold text-lg">Application(Iot & WebVR)</h1>
          <div className="p-2">
            <p>
              Enhancing the realism of video games like 'Zombie' 'Racing' or
              'Adventure'titles through Virtual Reality (VR) is an exciting
              concept.
            </p>
            <p>
              VR indeed offers a heightened sense of immersion However, the
              current VR experience primarily focuses on visual engagement, and
              there's an opportunity to enhance it further by engaging more
              senses and environmental cues.
            </p>
            <div className="w-1/2 flex justify-center">
              <img src={Zombie1} alt="zombie1" />
            </div>
            <div className="w-1/2 flex justify-center">
              <img src={Zombie2} alt="zombie2" />
            </div>
            <span className="text-gray-500">
              gamescene
              src:https://store.steampowered.com/app/676840/Contagion_VR_Outbreak/
            </span>
          </div>
        </section>

        <section id="contributor">
          <h1 className="font-bold text-lg">Contributors</h1>
          <Contributors />
        </section>
      </div>
      <div className="justify-center w-1/6 flex py-10">
        <div>
          <h1 className="p-2 font-semibold text-lg">On this page</h1>
          <div className="p-2">
            <a href="#intro">Introduction</a>
          </div>
          <div className="p-2">
            <a href="#use">How to use it?</a>
          </div>
          <div className="p-2">
            <a href="#application">Application</a>
          </div>
          <div className="p-2">
            <a href="#contributor">Contributors</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default IntroComponent;
