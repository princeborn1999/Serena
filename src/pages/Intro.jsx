function IntroComponent() {
  return (
    <div className="flex justify-center">
      <div className="px-40 py-10 w-4/5">
        <section id="intro">
          <h1 className="font-bold text-lg text-center">Introduction</h1>
          <div className="p-2">
            <p>
              Empower your projects by the power of the web to control your
              Arduino. This dynamic integration{" "}
            </p>
            <p>
              breathes life into your creations, it offers a unique and
              transformative experience.
            </p>
          </div>
          {/* Image rounded arduino */}
          <div className="w-full flex justify-center m-2">
            <div className=" bg-gray-200 rounded-lg w-3/4 h-48"></div>
          </div>
        </section>

        <section id="use">
          <h1 className="font-bold text-lg text-center">How to use it?</h1>
          <div className="w-full flex justify-center p-2">
            <div className="bg-codeBg p-5 w-96 rounded-lg">
              <code className="text-white">npm install zono</code>
            </div>
            {/* TODO: 介紹怎麼用?
                            arduino?
                            這個網站為例
                            如果只有用api前置作業要哪裡
                        */}
            {/* Pre environment -> Node? */}
          </div>
        </section>

        <section id="application">
          <h1 className="font-bold text-lg text-center">Application</h1>
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
          </div>
        </section>

        <section id="contributor">
          <h1 className="font-bold text-lg text-center">Contributors</h1>
          {/* TODO github頭貼 */}
          <a href="https://github.com/princeborn1999">AaronPrince</a>
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
