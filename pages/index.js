import Head from "next/head"
import Image from "next/image"

import { wlist } from "../data/wishlist";
import { eq } from "../data/equiptment";
import { members } from "../data/gang";
import { orders } from "../data/commands";


export default function Home() {
  const wishlist = wlist;
  const equiptment = eq;
  const gang = members;
  const commands = orders;

  const today = new Date();
  const year = today.getFullYear();

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
            {gang.map((member, index) => (
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
            <p className={"text-lg font-light"}>These are the commands of Mark's Gang channel and discord</p>
          </div>
          <div className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"}>
            {commands.map((command, index) => (
              <div key={index} className={"bg-[#282828] rounded-lg shadow-lg p-4"}>
                <div className={"flex flex-col items-center"}>
                  <h3 className={"text-xl font-semibold mt-4"}>{command.command}</h3>
                  <p className={"bg-gray-700 p-[5px] text-white rounded text-sm my-2"}>{command.response}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={"grid grid-cols-1 lg:grid-cols-2 gap-24 py-24"}>
          <aside>
            <h3 className={"text-2xl font-semibold mb-4"}>Mark's Wishlist</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishlist.map((wish, index) => (
                <a href={wish.amazon_url}>
                  <div key={index} className={"bg-[#282828] hover:bg-[#313131] rounded-lg shadow-lg p-4 mb-4 text-center"}>
                    <img className={"mx-auto rounded-full"} src={wish.img} width={100} height={100} />
                    <h3 className={"text-xl font-semibold mt-4"}>{wish.item}</h3>
                    <p className={"p-[5px] text-white text-sm my-2 font-semibold italic"}>{wish.price}</p>
                  </div>
                </a>
              ))}
            </div>
          </aside>
          <aside>
            <h3 className={"text-2xl font-semibold mb-4"}>Stream Equiptment</h3>
            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
              {equiptment.map((eq, index) => (
                <a href={eq.url}>
                  <div key={index} className={"min-h-[220px] bg-[#282828] hover:bg-[#313131] rounded-lg shadow-lg p-6 mb-4 text-center"}>
                    <img className={"mx-auto rounded-full"} src={eq.img} width={100} height={100} />
                    <h3 className={"text-xl font-semibold mt-4"}>{eq.item}</h3>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </section>
      </main>
      <footer className={"flex justify-between items-center bg-[#212121] text-white p-6 rounded"}>
        <div>
          <p>&copy; {year} <span className={"text-red-600"}>Mark Tellez</span>. All rights reserved. </p>
        </div>

        <div>
          <p>Developed by <span className={"text-red-600"}><a href="https://github.com/clogginsdev">Chris Loggins</a></span>.</p>
        </div>

      </footer>
    </div>
  )
}