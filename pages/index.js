import Head from "next/head"
import Image from "next/image"
import gang from "../data/gang"
import commands from "../data/commands"

export default function Home() {
  return (
    <div className={"container mx-auto px-4"}>
      <Head>
        <title>Mark's Gang - The Programmers Tribe</title>
        <meta name="description" content="A place where we all hang out, code, and smoke weed. Chill vibes only." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={"py-6 grid grid-cols-1 md:grid-cols-2 items-center"}>
        <div className={"flex gap-4 items-center"}>
          <div className={"logo text-3xl"}>
            <span className={"font-bold text-white"}>Mark's</span><span className={"text-red-600 font-bold"}>Gang</span>
          </div>
          <p className={"text-white font-light italic"}>a new web developer tribe!</p>
        </div>
        <div className={"flex justify-center mt-6 md:mt-0 md:justify-end"}>
          <button className={"bg-red-700 text-white p-3 rounded text-sm hover:bg-red-600"}><a href="https://www.youtube.com/channel/UCnPaa-GMpyrmgU7TWX9AuEQ">Visit Our Tribe</a></button>
        </div>
      </header>
      <main>
        <section className={"hero flex-col justify-center py-24"}>
          <div className={"text-center"}>
            <h1 className={"text-3xl md:text-5xl font-semibold mb-4"}>Welcome to the Tribe!!!</h1>
            <p className={"text-md md:text-xl font-light"}>Here at Mark's Gang everyone is welcome to come chill, problem-solve, and smoke weed with us.<br></br> As long as you are a coder of some kind!</p>
          </div>
          <div className="mt-12">
            <iframe className={"w-full h-[375px] md:w-[70%] md:h-[600px] mx-auto"} src="https://www.youtube.com/embed/YxGug-swl8s" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>
        <section className={"gang py-24"}>
          <div className={"text-center"}>
            <h2 className={"text-4xl font-semibold mb-4"}>Meet The Gang</h2>
            <p className={"text-lg font-light"}>These are the official members of Mark's Gang, they are some execellent coders who you should speak to.</p>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"}>
            {gang.members.map((member, index) => (
              <div key={index} className={"bg-[#282828] rounded-lg shadow-lg p-4"}>
                <div className={"flex flex-col items-center"}>
                  <div className={"w-24 h-24 rounded-full overflow-hidden"}>
                    <div className="rounded-full bg-red-800 w-[100px] h-[100px]"></div>
                  </div>
                  <h3 className={"text-xl font-semibold mt-4"}>{member.name}</h3>
                  <p className={"bg-red-700 p-[5px] text-white rounded text-sm my-2"}>{member.role}</p>
                  <p className={"text-sm"}>{member.age} years old</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={"commands py-24"}>
          <div className={"text-center"}>
            <h2 className={"text-4xl font-semibold mb-4"}>Commands</h2>
            <p className={"text-lg font-light"}>These are the commands of Mark"s Gang channel and discord</p>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"}>
            {commands.nightbot.map((command, index) => (
              <div key={index} className={"bg-[#282828] rounded-lg shadow-lg p-4"}>
                <div className={"flex flex-col items-center"}>
                  <h3 className={"text-xl font-semibold mt-4"}>{command.command}</h3>
                  <p className={"bg-gray-700 p-[5px] text-white rounded text-sm my-2"}>{command.response}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </div>
  )
}
