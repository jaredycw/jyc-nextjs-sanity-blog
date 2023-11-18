
import Link from "next/link"
import type { Metadata } from 'next'
import { metadata } from "../layout";
import ContactForm from "@/app/component/form/contactform";

export function generateMetadata(): Metadata {
  return {
      title: 'Contact Me - ' + metadata.title
  }
}


  

export default function ContactMe(){

 
    return (
       
        <div className="container mx-auto">
        <h1 className="mb-5">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 contact-section ">

            <div className="self-center">
                <div>
                    <div className="mb-5">
                       <p>Feel free to contact me 🔥</p>
                        <p>chat, copyrights, technical issues, opportunities, freelance services...</p>
                    </div>
                    <div className="mb-10">
                        <span className="icon-email mr-2"></span>
                        <span className="mr-1">Email: </span>
                        <Link href="mailto:jaredycw@gmail.com" target="_blank" className="ugly-blue">
                        jaredycw@gmail.com
                        </Link>
                    </div>   
                    <ul className="sns-widget grid gap-2" aria-labelledby="instagramLabel linkedinLabel githubLabel">
                    <li><Link href="https://instagram.com/jared_ycw" target="_blank" aria-label="Instagram"><i className="icon-ig"></i></Link></li>
                    <li><Link href="https://www.linkedin.com/in/jared-yeung-318714208/" target="_blank" aria-label="Linkedin"><i className="icon-in"></i></Link></li>
                    <li><Link href="https://github.com/jaredycw" target="_blank"><i className="icon-github" aria-label="Github"></i></Link></li>
                    </ul>
                </div>
            </div>
            <ContactForm/>

        </div>
        </div>
      
    )

}
