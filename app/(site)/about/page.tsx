import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import logoA from "../../images/svg/logo-a.svg"
import logoB from "../../images/svg/logo-b.svg"
import { BiLogoCss3, BiLogoJavascript, BiLogoReact, BiLogoTypescript, BiLogoPhp, BiLogoTailwindCss } from "react-icons/bi"
import { BsWordpress, BsFonts } from "react-icons/bs"
import { FaHtml5, FaBootstrap, FaFigma, FaWindows, FaApple, FaPython } from "react-icons/fa"
import { SiNextdotjs, SiNodedotjs, SiCanva, SiAdobecreativecloud } from "react-icons/si"
import { metadata } from "../layout"
import AnimationCard from "@/app/component/widgets/animationcard"

export function generateMetadata() {
    const host_name = process.env.HOST_NAME;
    
    const url = host_name + "/about/";
    return {
        
        title: "About Myself - " + metadata.title,
        description: 
        "A web designer and developer driven by a deep passion for design and development.",
        openGraph: {
            title: "About Myself - " + ` — ` + metadata.title ,  
            url: url,
            images: [{
                url: "https://cdn.sanity.io/images/mrzc8peh/production/287d32a0d9160a8e440430f44684c2e5ef330374-1334x890.jpg"
            }
            ]
          },
    }
}

export default function AboutMe(){

    const HeroVideo1 = "https://cdn.sanity.io/files/mrzc8peh/production/befdaa3d8c566017413f4ced88d3191c4213445a.mp4"
    const HeroVideo2 = "https://cdn.sanity.io/files/mrzc8peh/production/551590d737c555c18b770df2071f2943cbd6c633.mp4"
    const jaredBaby = "https://cdn.sanity.io/images/mrzc8peh/production/96442a97152fb4b4ee156e00ef31e74462be77e0-532x701.jpg"
    const jaredNerd = "https://cdn.sanity.io/images/mrzc8peh/production/b6d02f6c0f2566d34cc8c1aa2445f645157ae53f-533x701.jpg"

    const jaredBoxing = "https://cdn.sanity.io/files/mrzc8peh/production/6089ab3eacd3ad4bc9847dbaa2245f3d93c7e8e1.mp4"
    const jaredFiring = "https://cdn.sanity.io/files/mrzc8peh/production/cf2f3785d30c3fc796cb3051cfebd2d7cd647267.mp4"
    
    return (
       
        <div className="container mx-auto mt-5 mb-10 pb-10 ab-me">
            
        <div className="mb-20">
  
                    <h1 className="uppercase md:text-5xl mb-3 tracking-wide">Whats"up!</h1>
                    <h1 className="uppercase md:text-8xl ">I&rsquo;m Jared Yeung 👨🏻‍💻💤</h1>
 
            <span className="float-right">
                (TL;DR)
            </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 my-10">
                <div className="self-center">
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius p-8 mb-10">
                    <p className="text-base md:text-lg leading-7 md:leading-9 mb-6">
                        A digital enthusiast with a passion for web design and development with:
                        can-do attitude, eager to learn new technologies, and a strong desire to create meaningful digital experiences.
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0"> 
                        🌃 Living City: Hong Kong 🇭🇰
                    </p>
                    <p className="text-base md:text-lg leading-7 md:leading-9 m-0">  
                        📀 Elements in my life: Aesthetic, Minimalism, Creativity
                    </p>
                    </div>
                    <div className="bg-[var(--jy-cloudy)] text-[var(--jy-black)] jy-border-radius px-8 py-5 m-0 tracking-wider">
                        <span>#Full-Time #Freelance(Commercial/NGO) #Volunteering  #Website #Design <br></br>#Web Design & Developing
                        #Cyber Security #Machine Learning #Artificial Intelligence
                        </span>
                    </div>
                    
                </div>
                <div className="self-center">
                    <div className="hero-image-wrapper float-right">
                        <AnimationCard media1={HeroVideo1} media2={HeroVideo2} height="335px" />
                    </div>
                </div>
        </div>
        <section className="mt-20">
            <h2 className="uppercase md:text-5xl">Story</h2>
            <h3 className="border-b">(TL;DR - Graduate &#8594; Digital Enthusiast)</h3>
 
            <div className="story-background-container py-10">
                <div 
                className="story-background"
                style={{backgroundImage: "url(https://cdn.sanity.io/images/mrzc8peh/production/287d32a0d9160a8e440430f44684c2e5ef330374-1334x890.jpg)"}} 
                >
                </div>

            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                <div className="self-center my-10 md:my-5">
                    <div className="hero-image-wrapper">
                        <AnimationCard media1={jaredBaby} media2={jaredNerd} height="300px" />
                    </div>
                </div>
                <div className="my-5 leading-9 self-center col-span-2">
                    <p>
                        In June 2023, I started creating <Link href="https://jaredyeung.com/" target="_blank" className="ugly-blue">my portfolio and blog website</Link>. <br></br>
                        I don"t just build websites; I craft digital experiences that connect and convert. With a can-do attitude and a passion for clean code and compelling design, I turn complex problems into elegant, user-friendly solutions.
                    </p>
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 mb-5">
                <div className="my-5 leading-9 self-center col-span-2">
                    <p>
                        
                        It starts with a spark of an idea. For me, that spark is a passion for creating in the digital space. As a web designer and developer, I get my energy from bringing those ideas to life—merging aesthetic design with solid code to build digital experiences that aren"t just functional, but meaningful. I approach every challenge with a "yes, we can" attitude and an eagerness to learn the tools that will make it happen.
                    </p>
                </div>
                <div className="self-center mt-10 mb-10 md:mt-0">
                    <div className="hero-image-wrapper float-right">
                        <AnimationCard media1={jaredBoxing} media2={jaredFiring} height="335px" />
                    </div>
                </div>
            </div>


        </section>

        <section className="my-10">
            <h2 className="uppercase md:text-5xl">Skills</h2>
            <h3 className="border-b">Equip.</h3>
            <div className="my-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 gap-y-5">
                <div>
                <h4>Coding</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaHtml5 size={25}/></div> 
                                <div className="card-grid-title">HTML5</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoCss3 size={25}/></div> 
                                <div className="card-grid-title">CSS3</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoJavascript size={25}/></div> 
                                <div className="card-grid-title">Javascript</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoTypescript size={25}/></div> 
                                <div className="card-grid-title">Typescript</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiNodedotjs size={25}/></div> 
                                <div className="card-grid-title">Nodejs</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoReact size={25}/></div> 
                                <div className="card-grid-title">React.js</div>
                            </div>
                        </div>  
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiNextdotjs size={25}/></div> 
                                <div className="card-grid-title">Next.js</div>
                            </div>
                        </div>                                              
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoPhp size={25}/></div> 
                                <div className="card-grid-title">PHP</div>
                            </div>
                        </div> 
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaPython size={25}/></div> 
                                <div className="card-grid-title">Python</div>
                            </div>
                        </div> 
                        
                    </div>
                </div>

                <div>
                    <h4>Concept</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BsWordpress size={25}/></div> 
                                <div className="card-grid-title">Wordpress</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">CMS/HeadlessCMS</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">RWD</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">Frontend Development</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">UX User Experience</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">UI User Interface</div>
                            </div>
                        </div>                                                                        
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"></div> 
                                <div className="card-grid-title">Motion</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BsFonts size={25}/></div> 
                                <div className="card-grid-title">Typeface</div>
                            </div>
                        </div>                         

                    </div>
                </div>

                <div>
                    <h4>CSS Framework</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaBootstrap size={25}/></div> 
                                <div className="card-grid-title">Bootstrap</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><BiLogoTailwindCss size={25}/></div> 
                                <div className="card-grid-title">Tailwind CSS</div>
                            </div>
                        </div>
                        </div>
                </div>


                <div>
                    <h5>Design</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                        <div className="card-sample"> 
                                <div className="card-sample-grid gap-2">
                                    <div className="card-grid-icon"><SiAdobecreativecloud size={25}/></div> 
                                    <div className="card-grid-title">Adobe Creative Cloud</div>
                                </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><SiCanva size={25}/></div> 
                                <div className="card-grid-title">Canva</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaFigma size={25}/></div> 
                                <div className="card-grid-title">Figma</div>
                            </div>
                        </div>
                    </div>                    
                </div>
                <div>
                    <h5>OS (Operating System)</h5>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
                    <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaWindows size={25}/></div> 
                                <div className="card-grid-title">Window</div>
                            </div>
                        </div>
                        <div className="card-sample"> 
                            <div className="card-sample-grid gap-2">
                                <div className="card-grid-icon"><FaApple size={25}/></div> 
                                <div className="card-grid-title">MacOS</div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                
   
            </div>
        </section>

        <section className="my-10">
            <h2 className="uppercase md:text-5xl">Life</h2>
            <h3 className="border-b">If you want to know more about myself</h3>
            <div className="my-5 grid grid-cols-1 md:grid-cols-3">
                <div>
                    <ul>
                        <li>🖤  Computer</li>
                        <li>🤍  Black / White Color</li>
                        <li>🖤  Black Coffee / Americano / Flate White </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>🤍  Art (Contemporary Art / Artificial Intelligence Art)</li>
                        <li>🖤  Tattoo (Black & White & No Text) </li>
                        <li>🤍  Music - <Link href="/fetching/" className="ugly-blue">daily</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>🖤 Movie ( Horror / Crime ) - <Link href="/#section-hobby" className="ugly-blue">this year</Link></li>
                        <li>🤍 Beer Day n Night & Travelling & Visiting Gallery</li>
                        <li>🖤 Exploring...</li>
 
                    </ul>
                </div>
            </div>
        </section>

        <div className="story-background-container py-10">
                <div 
                className="story-background"
                style={{backgroundImage: "url(https://cdn.sanity.io/images/mrzc8peh/production/35e47756cd4f20c3650346128daf307c89c7e11e-1024x768.jpg)"}} 
                >
                </div>
        </div>
        
        <div className="story-background-container py-10">
                <div 
                className="story-background"
                style={{backgroundImage: "url(https://cdn.sanity.io/images/mrzc8peh/production/644cbd127277831caffb7d3b1e8156cf32d52f44-1454x1057.jpg)"}} 
                >
                </div>
                
        </div>
        
            
        </div>
      
    )

}
