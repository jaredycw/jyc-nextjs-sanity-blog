
import Image from "next/image"
import Link from "next/link"
import HeroImage from '../../images/hero-img.jpg'
import logoA from '../../images/svg/logo-a.svg'
import logoB from '../../images/svg/logo-b.svg'

export default function AboutMe(){

 
    return (
       
        <div className="container mx-auto mt-5 mb-10 pb-10 ab-me">
        <div className="mb-20">
            <h1 className="uppercase md:text-5xl mb-3">Welcome! Hello! </h1>
            <h1 className="uppercase md:text-8xl">I'm Jared Yeung 👨🏻‍💻💤</h1>
            <span className="float-right">
                (TL;DR <Link href="#resume-part" className="ugly-blue">#Resume</Link>)
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center md:justify-items-stretch gap-20 md:gap-0 my-10">
                <div className="self-center">
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius p-8 mb-10">
                    <p className="text-base md:text-lg leading-7 md:leading-9 mb-6">A self-taught web designer and developer driven by a deep passion for design and development.
                    I am currently employed as a web designer at Mirum in Hong Kong. 
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0"> 
                        🌃 Living City: Hong Kong 🇭🇰
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0">  
                        📀 Elements in my life: Aesthetic, Minimalism, Creativity
                    </p>
                    </div>
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius px-8 py-5 m-0">
                        <span><span className="icon-tag"></span> #Full-Time #Freelance(Commercial/NGO) #Volunteering</span>
                    </div>
                    
                </div>
                <div className="self-center">
                    <div className="hero-image-wrapper ">
                    <div className="hero-image-container"><Image src={HeroImage} width={150} height={150} alt="Weirdo Image" className="hero-image" loading="lazy" /></div>
                    <div className="logo-svg-a"><Image src={logoA} width={25} height={25} alt="Logo SVG A" /></div>
                    <div className="logo-svg-b"><Image src={logoB} width={25} height={25} alt="Logo SVG B"  /></div>
                    </div>
                </div>
        </div>
        <section className="mt-20">
            <h2 className="uppercase md:text-5xl">Story</h2>
            <h3 className="border-b">(TL;DR - Graduate &#8594; Self-Learner &#8594; Web Designer & 2nd degree &#8594; ? )</h3>
            <div className="my-5 leading-9">
                <p>
                    In 2020, I graduated in 🎓 Social Sciences.
                    Then, COVID-19 hit, making jobs hard to find for humanities majors. 
                    So, I turned to the digital world for more chances and progress. Eager to enter the digital world, I started by learning more about IT. 
                    My first practical experience came from handling website admin and design in e-commerce. 
                    This got me hooked on technology, and I wanted to grasp it inside out. I craved to be tech-savvy!
                    <br></br>
                    Eventually, I became a web designer 👨🏻‍💻 in Mirum. 
                    Though I enjoyed the work, I hungered for more challenge 🧗. 
                </p>
                <p>
                    In June 2023, I started creating <Link href="https://jyz.vercel.app/" target="_blank" className="ugly-blue">my portfolio and blog website</Link>. 
                    I was thrilled to display my improving skills and projects. 
                    I used the newest tech(for me) like the concept of Headless CMS, Node.js, React.js, and Next.js to craft a platform that shows my love for being inventive. 
                    Every bit of code I wrote was like taking a step towards not just making a website but also creating my path in the digital world. There are several platforms: <Link href="https://chat.openai.com/" target="_blank" className="ugly-blue">ChatGPT</Link>, <Link href="https://www.freecodecamp.org/" target="_blank" className="ugly-blue">Freecodecamp</Link> , <Link href="https://www.coursera.org/" target="_blank" className="ugly-blue">Coursera</Link> , and <Link href="https://www.codecademy.com/" target="_blank" className="ugly-blue">Codecademy</Link> have been helping me a lot for learning digital world.
                </p>
                <p>
                    Lastly, I enrolled in my second bachelor degree Computer Science. I'm working towards mastering technology. Getting a Master's degree in Computer Science is a big goal I'm aiming for 🎈.
                </p>
            </div>
        </section>

        <section className="my-10">
            <h2 className="uppercase md:text-5xl pb-3 border-b">Offical Resume</h2>
            <div className="my-5">

            </div>
        </section>

        <section className="my-10">
            <h2 className="uppercase md:text-5xl">Skills</h2>
            <h3 className="border-b">(TL;DR - Self-Learner - Generalist &#8594; interest on sth. sth...  )</h3>
            <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-5">
                <div>
                <h5>Coding</h5>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample text-center"> [ICON] HTML5</div>
                        <div className="card-sample text-center"> [ICON] CSS3</div>
                        <div className="card-sample text-center"> [ICON] Javascript </div>
                        <div className="card-sample text-center"> [ICON] Typescript</div>
                        <div className="card-sample text-center"> [ICON] NodeJS / CLI</div>
                        <div className="card-sample text-center"> [ICON] ReactJS / NextJS</div>
                        <div className="card-sample text-center"> [ICON] PHP</div>
                    </div>
                </div>

                <div>
                    <h5>Concept</h5>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample text-center"> [ICON] CMS / Wordpress </div>
                        <div className="card-sample text-center"> [ICON] HeadlessCMS </div>
                        <div className="card-sample text-center"> [ICON] RWD </div>
                        <div className="card-sample text-center"> [ICON] Frontend Development</div>
                        <div className="card-sample text-center"> [ICON] UX User Experience</div>
                        <div className="card-sample text-center"> [ICON] UI User Interface</div>
                        <div className="card-sample text-center"> [ICON] Motion</div>
                        <div className="card-sample text-center"> [ICON] Typeface</div>
                    </div>
                </div>

                <div>
                    <h5>CSS Framework</h5>
                        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 my-5">
                            <div className="card-sample text-center"> [ICON] Bootstrap</div>
                            <div className="card-sample text-center"> [ICON] Tailwind CSS</div>
                        </div>
                </div>


                <div>
                    <h5>Design</h5>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 my-5">
                            <div className="card-sample text-center"> [ICON] Adobe Creative Cloud Suite </div>
                            <div className="card-sample text-center"> [ICON] Canva </div>
                            <div className="card-sample text-center"> [ICON] Figma </div>
                    </div>                    
                </div>
                <div>
                    <h5>OS (Operating System)</h5>
                    <div className="grid grid-cols-2 md:grid-cols-2 gap-5 my-5">
                            <div className="card-sample text-center"> [ICON] Windows</div>
                            <div className="card-sample text-center"> [ICON] MacOS</div>
                    </div>
                </div>
                </div>
                
   
            </div>
        </section>
        <section className="mb-20">
            <h2 className="uppercase md:text-5xl pb-2 border-b my-10">Services</h2>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-5">
                        <div className="card-sample text-center"> [ICON] Web Development</div>
                        <div className="card-sample text-center"> [ICON] Web Design (UI / UX)</div>
                        <div className="card-sample text-center"> [ICON] Motion Design</div>
                        <div className="card-sample text-center"> [ICON] Graphic Design</div>
                        <div className="card-sample text-center"> [ICON] Social Media</div>
                </div>
            </div>
        </section>

        <section>
            <h2 className="uppercase md:text-5xl">If you want to know more about...</h2>
            <div className="my-5">

            </div>
        </section>
    

        <section>
        <h2 className="uppercase md:text-5xl">Github</h2>
            <div className="my-5">

            </div>
        </section>



        </div>
      
    )

}
