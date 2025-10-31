import Image from "next/image";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const CustomContent = ({ title }: { title: string }) => {
  return title === "About" && <About />;
  return title === "Links" && <div></div>;
  return title === "Work" && <div></div>;
  return title === "FAQ" && <div></div>;
  return title === "CONTACT" && <div></div>;
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

export default CustomContent;
