import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";
import { FaExternalLinkAlt } from "react-icons/fa";

// "About"| "Links"|"Work"| "FAQ"| "Contact"

const CustomContent = ({ title }: { title: string }) => {
  return (
    <>
      {title === "About" && <About />}
      {title === "Links" && <Links />}
      {title === "Work" && <Work />}
      {title === "FAQ" && <div></div>}
      {title === "Contact" && <Contact />}
    </>
  );
};

function About() {
  return (
    <>
      <div className="w-full h-full relative flex flex-col">
        <div className="flex items-center h-[40%] w-full p-[3%] gap-10 border-b border-gray-200">
          <div className="relative w-[100px] h-[100px]">
            <Image
              alt="Profile Icon"
              src="/profile.jpg"
              fill
              className="rounded-full object-cover"
              style={{ filter: "drop-shadow(3px 3px 0px gray)" }}
            />
          </div>
          <div className="flex flex-col">
            <h1 className="lg:text-5xl md:text-3xl text-2xl text-[#fe9a00] font-bold">
              Nishant Kumar
            </h1>
            <h2 className="lg:text-xl text-xs text-gray-600">
              FullStack Developer
            </h2>
          </div>
        </div>

        {/* Bottom section  */}
        <div className="pt-5 pb-10 md:pb-20 px-5 md:px-12 w-full h-full rounded-b-md overflow-y-auto text-base md:text-xl/9">
          <div className="max-w-3xl text-center space-y-6">
            <p className="text-lg leading-relaxed">
              I’m , a full-stack developer who enjoys building, learning bring
              My Ideas to meaningful software. My focus is on creating products
              that feel fast, intuitive, and a Useful.
            </p>

            <div className="space-y-3">
              <h1>GitHub stats:</h1>
              <GitHubCalendar
                username="mrnishant1"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                colorScheme="light"
                year={2025}
                blockRadius={4}
                weekStart={6}
                totalCount={97}
              />
              <div className="flex flex-col items-center justify-center">
                <img
                  content="center"
                  src="https://github-readme-stats.vercel.app/api/top-langs?username=mrnishant1&show_icons=true&locale=en&layout=compact"
                  alt="mrnishant1"
                />
              </div>
              <h3 content="left" className="font-bold">
                Languages and Tools:
              </h3>
              <p content="left" className="flex justify-between">
                {" "}
                <a
                  href="https://www.mongodb.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="mongodb"
                    width={40}
                    height={40}
                  />{" "}
                </a>{" "}
                <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="nodejs"
                    width={40}
                    height={40}
                  />{" "}
                </a>{" "}
                <a
                  href="https://www.postgresql.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="postgresql"
                    width={40}
                    height={40}
                  />{" "}
                </a>{" "}
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width={40}
                    height={40}
                  />{" "}
                </a>{" "}
                <a
                  href="https://www.nextjs.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg"
                    alt="typescript"
                    width={40}
                    height={40}
                  />{" "}
                </a>{" "}
                <div>
                  <b>Websocket</b>
                </div>
              </p>
              <p content="left" className="flex justify-between">
                <a
                  href="https://www.electronjs.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg"
                    alt="electron js- Desktop application "
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">ElectronJs</h6>
                </a>{" "}
                <a
                  href="https://www.electronjs.org"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg"
                    alt="express js"
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">expressJs</h6>
                </a>{" "}
                <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                  {" "}
                  <Image
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="git"
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">Git</h6>
                </a>{" "}
                <a
                  href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">Javascript</h6>
                </a>{" "}
                <a
                  href="https://www.typescriptlang.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"
                    alt="typescript"
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">Typescript</h6>
                </a>{" "}
                <a
                  href="https://www.prisma.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <Image
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prisma/prisma-original.svg"
                    alt="typescript"
                    width={40}
                    height={40}
                  />{" "}
                  <h6 className="text-xs">Prisma</h6>
                </a>{" "}
                <div className="flex items-center font-bold">Gen AI</div>
              </p>
            </div>

            <div className="space-y-3 text-start">
              <h2 className="text-2xl font-semibold text-gray-900">
                Interests
              </h2>
              <p>
                <ol>Building Cool thing </ol>
                <ol>AI/ML and automation tools</ol>
                <ol>Building Hardware product</ol>
                <ol>Game Development.</ol>
                <ol>Sometimes Animation, </ol>
              </p>
            </div>

            <div className="space-y-3 text-start">
              <h2 className="text-2xl font-semibold text-gray-900">Hobbies</h2>
              <p>
                Music, late-night debugging sessions, exploring indie tech
                projects, and occasionally sketching UI ideas that never see
                production.
              </p>
            </div>
            <div className="space-y-3 text-start">
              <h2 className="text-2xl font-semibold text-gray-900">
                Education
              </h2>
              <p>
                <ol>College: APJ Abdul Kalam technical university(AKTU)</ol>
                <ol>Pursuing: Bachelor of technology in Computer Science</ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Links() {
  return (
    <>
      <div>
        <div className="w-full h-full relative justify-center flex gap-[20%]">
          <Link
            href={"http://github.com/mrnishant1/"}
            target="_blank"
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={"/github.svg"}
                alt="http://github.com/mrnishant1/"
                fill
                className="object-cover  w-[100px] h-[100px]"
              />
            </div>
            <b>GitHub</b>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/nishant-kumar-692477226/"}
            target="_blank"
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={"/ln.svg"}
                alt="https://www.linkedin.com/in/nishant-kumar-692477226/"
                fill
                className="object-cover  w-[100px] h-[100px]"
              />
            </div>
            <b>LinkedIn</b>
          </Link>
          <Link
            href={"https://www.instagram.com/mr.nishant010/"}
            target="_blank"
            className="flex flex-col items-center justify-center"
          >
            <div className="relative w-[50px] h-[50px]">
              <Image
                src={"/icon_ig.webp"}
                alt="https://www.instagram.com/mr.nishant010/"
                fill
                className="object-cover  w-[100px] h-[100px]"
              />
            </div>
            <b>Instagram</b>
          </Link>
        </div>
      </div>
    </>
  );
}

function Work() {
  return (
    <>
      <div className="w-full h-full relative flex flex-col p-[3%] gap-4">
        <div className=" h-[100px]  bg-[#fef8e0] flex flex-col pl-4 justify-center text-gray-500 rounded-2xl">
          <b>
            Accepting work offers via my{" "}
            <a
              className="text-amber-500"
              href="mailto:nishantkumaragra@gmail.com"
            >
              @email!
            </a>
          </b>{" "}
          I do web design, and web/app development Freelancing work.
        </div>

        {/* Projects */}
        <h1 className="font-extrabold">Projects</h1>
        <div className="flex flex-col overflow-y-auto  relative w-full h-full ">
          {/* project1 */}
          <div className="w-full flex items-center justify-between p-10 bg-[#f9f9f9] rounded-2xl shadow-md">
            {/* Left: Website Preview */}
            <div className="relative w-[400px] h-[200px] overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-[1.17] transition-transform duration-150">
              <iframe
                src="https://leadzup.site/"
                className="absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left scale-[0.223]"
                // style={{ pointerEvents: "none" }}
              ></iframe>
            </div>

            {/* Right: Description */}
            <div className="ml-10 flex flex-col justify-center max-w-[50%]">
              <Link
                href={"https://leadzup.site"}
                className="text-4xl font-bold text-[#fe9804] mb-3 flex items-end"
              >
                LeadZup{" "}
                <span className="text-xs text-gray-500">
                  <FaExternalLinkAlt />
                </span>
              </Link>

              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Organic Marketing
              </h2>
              <div className="flex w-full overflow-x-auto gap-3.5">
                <p className="text-gray-600 leading-relaxed mb-4 w-full shrink-0">
                  LeadZup is a Marketing platform designed to automate track
                  customers, communication, and follow-ups. Built with{" "}
                  <b>Next.js</b> for the frontend and
                  <b> Node.js</b> for the backend, it delivers performance and
                  scalability for real-world business use.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 w-full shrink-0">
                  <b>Backend Monitoring System:</b> <br />
                  Monotoring, Filtration, Notification and Database storage of
                  Reddit Posts 24/7 for marketing, Data and{" "}
                  <b>automates Engagement</b>.
                </p>
              </div>
              <div className="flex gap-3 pt-2.5">
                <Link
                  href={"https://github.com/mrnishant1/digitalmarketing"}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          {/* project 2 */}
          <div className="w-full flex items-center justify-between p-10 bg-[#f9f9f9] rounded-2xl shadow-md">
            {/* Left: Website Preview */}
            <div className="relative w-[400px] h-[200px] overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-[1.17] transition-transform duration-150">
              <iframe
                src="https://doodlesdraw.vercel.app/draw"
                className="absolute top-0 left-0 w-[1280px] h-[800px] origin-top-left scale-[0.223]"
                // style={{ pointerEvents: "none" }}
              ></iframe>
            </div>

            {/* Right: Description */}
            <div className="ml-10 flex flex-col justify-center max-w-[50%]">
              <Link
                href={"https://doodlesdraw.vercel.app/"}
                className="text-4xl font-bold text-[#fe9804] mb-3 flex items-end"
              >
                DoodlesDraw{" "}
                <span className="text-xs text-gray-500">
                  <FaExternalLinkAlt />
                </span>
              </Link>

              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Drawing Webapp
              </h2>
              <div className="flex w-full overflow-x-auto gap-3.5">
                <p className="text-gray-600 leading-relaxed mb-4 w-full shrink-0">
                  Doodlesdraw is collaborative drawing webApp designed purely{" "}
                  <b>Typescript</b> and html's <b>Canvas</b>
                  No library has been used.
                  <li className="font-bold">Next-js</li>
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 w-full shrink-0">
                  <b>Backend Monitoring System:</b> <br />
                  <ol>Websocket</ol>
                  <ol>Typescript</ol>
                </p>
              </div>
              <div className="flex gap-3 pt-2.5">
                <Link
                  href={"https://github.com/mrnishant1/excelDraw"}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div className="w-full flex items-center justify-between p-10 bg-[#f9f9f9] rounded-2xl shadow-md">
            {/* Left: Website Preview */}
            <div className="relative w-[300px] h-[200px] overflow-hidden rounded-xl shadow-lg border border-gray-300 hover:scale-[1.17] transition-transform duration-150">
              <Image
                src={"/focus.png"}
                alt="FocusMate"
                fill
                className="object-fill"
              />
            </div>

            {/* Right: Description */}
            <div className="ml-10 flex flex-col justify-center max-w-[50%]">
              <div className="text-4xl font-bold text-[#fe9804] mb-3 flex items-end">
                FocusMate{" "}
              </div>

              <h2 className="text-lg font-semibold text-gray-700 mb-2">
                Desktop App
              </h2>
              <div className="flex overflow-x-auto w-full">
                <p className="text-gray-600 leading-relaxed mb-4 w-full shrink-0">
                  It's a Desktop app, I made to fucus, uses <b>AI</b> to achieve
                  it.
                  <b>
                    <ol>RealTime Monitor running Programs. </ol>
                  </b>
                  <b>
                    <ol>Ai classification of Productive programs. </ol>
                  </b>
                  <b>
                    <ol>Closure of distractive program.</ol>
                  </b>
                </p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={"https://github.com/mrnishant1/FocusMate"}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Contact() {
  return (
    <div className="w-full h-full flex flex-col items-center p-6 md:p-7 bg-lighter rounded-b-lg">
      <h2 className="font-mono font-semibold text-xl md:text-2xl mb-3">
        Contact Me!
      </h2>

      <p className="text-center text-base">
        I am available on social my handles in Links section or <br />
        I'm waiting for the mail!
      </p>

      <Image
        alt="email graphic"
        draggable="false"
        loading="lazy"
        width={215}
        height={215}
        decoding="async"
        style={{ color: "transparent" }}
        src="/profile.jpg"
        className="rounded-full"
      />

      <p className="text-center text-base pb-4">
        Email me at:{" "}
        <span
          data-tooltip-id="clipboard"
          data-tooltip-content="copy to clipboard"
        >
          <a
            href="mailto:nishantkumaragra@gmail.com"
            className="cursor-pointer text-blue-500 underline"
          >
            nishantkumaragra@gmail.com
          </a>
        </span>
        <br />
        Or press the button below to open your mail app.
      </p>

      <a
        href="mailto:nishantkumaragra@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="cursor-pointer bg-primary text-amber-500 font-semibold rounded-md pt-2 pb-3 px-5
          hover:opacity-85 hover:drop-shadow-sm active:brightness-97 text-base"
        >
          Send me an email!
        </button>
      </a>
    </div>
  );
}

export default CustomContent;
