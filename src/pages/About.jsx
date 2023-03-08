function About() {
  return (
    <div className="about w-full md:h-screen flex gap-10 justify-around items-center flex-wrap p-7" id="about">
        <div className="flex flex-col gap-7 items-center text-center max-w-2xl">
            <h1 className="font-bold text-6xl">About Me</h1>
            <p className="text-xl font-semibold">Being raised around computers and the Internet, my passion for all things tech developed from a young age. From installing basic programs to building home servers, I have experimented with all kinds of tech over the years.</p>
            <p className="text-xl font-semibold">I have been a self-taught web developer for the past two years, focusing primarily on front-end technologies, although I am familiar with back-end technologies as well. I can make use of my knowledge to build the perfect website to suit your needs using the appropriate tools for the job.</p>
        </div>
        <div className="px-4 flex flex-wrap gap-2 justify-center items-center max-w-6xl">
            <div className="flex flex-col gap-3 border-4 border-primary items-center justify-start px-10 rounded-xl rounded-tr-none rounded-br-none w-60 h-60 pt-5">
                <h2 className="font-bold text-2xl text-[#35012C]">Frontend</h2>
                <span className="h-[3px] bg-secondary w-full"></span>
                <ol className="list-disc font-bold text-xl">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React JS</li>
                    <li>Tailwind CSS</li>
                </ol>
            </div>
            <div className="flex flex-col gap-3 border-4 border-primary items-center justify-start px-10 w-60 h-60 pt-5">
                <h2 className="font-bold text-2xl">Backend</h2>
                <span className="h-[3px] bg-secondary w-full"></span>
                <ol className="list-disc font-bold text-xl">
                    <li>NodeJS</li>
                    <li>Express JS</li>
                    <li>MongoDB</li>
                    <li>GraphQL</li>
                </ol>
            </div>
            <div className="flex flex-col gap-3 border-4 border-primary items-center justify-start px-10 rounded-xl rounded-tl-none rounded-bl-none w-60 h-60 pt-5">
                <h2 className="font-bold text-2xl">Tools</h2>
                <span className="h-[3px] bg-secondary w-full"></span>
                <ol className="list-disc font-bold text-xl">
                    <li>Figma</li>
                    <li>Adobe XD</li>
                    <li>Canva</li>
                    <li>Adobe Photoshop</li>
                </ol>
            </div>
        </div>
    </div>
  )
}

export default About