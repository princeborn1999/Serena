function QuestionComponent(){
    const questions = [
        { 
          id: 1, 
          question: 'Q: What is the goal behind creating this project?', 
          answer: 'A: The primary objective is to establish a more effective communication bridge between IoT devices and web applications.'
        },
        { 
            id: 2, 
            question: 'Q: Does this project have many features or capabilities?', 
            answer: 'A: Reduino Temporary is a concept that currently offers a limited set of functions, with the potential for further enhancement and expansion in the future.'
        },
        { 
            id: 3, 
            question: 'Q: Why am I unable to use it? It appears to have some errors.', 
            answer: `A: Please ensure that you have the Node.js environment set up and that you've installed the LTS version of React and its related packages.
            If you have any further questions, please don't hesitate to contact me.`
        },
        { 
            id: 4, 
            question: 'Q: What additional applications or advancements can we expect in the future?', 
            answer: `A: In the future, we hope to see easier integration of IoT with web applications, utilizing the skills of React and Arduino users. 
                     We also see potential in connecting IoT with VR, especially in fields like the gaming.`
          },

 
    ]
    return(
        <div className="py-5 px-20">
            <div className="py-5">
                <h1 className="text-2xl font-semibold">Questions</h1>
            </div>
            {
                questions.map((item) => (
                <div className="p-5 m-2 min-w-1/2 rounded-sm
                              bg-gray-200 hover:bg-arduinoReact hover:font-semibold hover:text-white">
                    <h1 className="text-xl">{item.question}</h1>
                    <br />
                    <p className="text-lg">{item.answer}</p>
                </div>
                ))
            }
            
        </div>
    )
}
export default QuestionComponent