function ArticlesComponent() {

  const links = [
    { id: 1, href: 'https://www.arduino.cc/en/Tutorial/HomePage', text: 'Arduino tutorial',
      description: 'To acquire knowledge about Arduino circuits and learn how to write C code to control Arduino components.' },
    { id: 2, href: 'https://nodejs.dev/en/learn/', text: 'Node.js tutorial', 
      description: "It's a runtime environment for executing JavaScript on the server-side. It provides the necessary tools and libraries to build server-side applications using JavaScript."
    },
    { id: 3, href: 'https://johnny-five.io/', text: 'Johnny-five tutorial', 
      description: "Johnny-Five is a user-friendly JavaScript framework for controlling hardware devices, including Arduino boards, through a simplified high-level API."
    },
    { id: 4, href: 'https://socket.io/get-started/chat/', text: 'Socket.io tutorial', 
      description: "Socket.IO is a JavaScript library that simplifies communication between client-side and server-side applications"
    },
    { id: 5, href: 'https://legacy.reactjs.org/tutorial/tutorial.html', text: 'React tutorial', 
      description: "React is a frontend JavaScript library that makes it easy to build interactive web interfaces. In this project, it serves as the client-side component responsible for controlling Arduino devices."
    },
  ];

  return (
    <div className="px-40 py-5">
      <div className="">
        <strong className="text-lg font-normal">Make sure you have knowledge beforehand</strong>
        <h1 className="text-2xl font-semibold">Recommend Articles</h1>
        <div>
          {links.map((link) => (
            <div className="p-2" key={link.id}>
              <a className="text-blue-600 text-xl" target="_blank" href={link.href}>{link.text}</a>
              <br />
              <span className="text-gray-600">{link.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default ArticlesComponent;
