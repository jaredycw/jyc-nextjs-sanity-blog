import Link
 from "next/link"
export default function ContactMe(){

 
    return (
       
        <div className="container mx-auto">
        <h1 className="mb-5">Contact Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 contact-section ">

            <div className="self-center">
                <div>
                    <div className="mb-5">
                       <p>Feel free to contact me 🔥<br></br>
                        chat, copyrights, technical issues, opportunities, freelance services...</p>
                    </div>
                    <div className="mb-10">
                        <span className="icon-email mr-2"></span>
                        <span className="mr-1">Email: </span>
                        <Link href="mailto:jaredycw@gmail.com" target="_blank" className="ugly-blue">
                        jaredycw@gmail.com
                        </Link>
                    </div>   
                    <ul className="sns-widget grid gap-2">
                        <Link href="https://instagram.com/jared_ycw" target="_blank"><li><i className="icon-ig"></i></li></Link>
                        <Link href="https://www.linkedin.com/in/jared-yeung-318714208/" target="_blank"><li><i className="icon-in"></i></li></Link>
                        <Link href="https://github.com/jaredycw" target="_blank"><li><i className="icon-github"></i></li></Link>
                    </ul>
                </div>
            </div>

            <div className="self-center">
            <form className="flex flex-col">
                <h1>Message Me (Coming Soon)🖖</h1>

                <label className="text-black mt-4">Username<span className="text-red-500 dark:text-gray-50"> *</span></label>
                <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]" />

                <label className="text-black mt-4">E-mail<span className="text-red-500"> *</span></label>
                <input type="email" name="email" className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]" />

                <label  className="text-black mt-4">Message<span className="text-red-500"> *</span></label>
                <textarea name="message" className="bg-transparent border-b py-2 pl-3 focus:outline-none focus:rounded-md focus:ring-1 ring-[var(--jy-black)] text-[var(--jy-black)]"></textarea>
                <div className="flex flex-row items-center justify-center md:justify-start  mt-10">
                    <button className="form-button">
                        Send 
                    </button>
                </div>
            </form>

            </div>

        </div>
        </div>
      
    )

}
