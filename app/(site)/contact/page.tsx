
import Link from "next/link"
import Image from "next/image";
import { metadata } from "../layout";
import ContactForm from "@/app/component/form/contactform";

export async function generateMetadata({params}:any){
    const host_name = process.env.HOST_NAME;
    const url = host_name + "/contact/";

  return {
      title: 'Contact Me - ' + metadata.title,
      description: 
      'Connect with me hassle-free! Reach out via the form, Instagram, LinkedIn, Github, email, or the convenient contact form below. Lets get in touch!',
      openGraph: {
        url: url,
        images: [{
            url: "https://cdn.sanity.io/images/mrzc8peh/production/51b97fdc02a5b94beb3929c215c3519528078091-4501x4501.jpg"
        }
        ]
      },
        
  }
}


  

export default function ContactMe(){
    const Avator = "https://cdn.sanity.io/images/mrzc8peh/production/0f415fc9433ba73b29425b89a3205b6fc4fbeaa1-10x12.svg"
 
    return (
       
        <div className="container mx-auto">
        <h1 className="mb-5">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 contact-section ">

            <div className="self-center">
                <div>
                    <div className="mb-5">
                        <div className="w-56 my-10 mx-auto">
                        <Image src={Avator} width={1} height={1} alt="contact me avatar icon" />
                        </div>
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
