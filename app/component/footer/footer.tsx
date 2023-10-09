import Link from "next/link"

export default function Footer(){
    return(
        <footer id="site-footer" className="site-footer">

          <div className="container mx-auto">
            <Link href="/contact">
                <div className="motto-wrapper">
                  <div className="motto-upper">Contact</div>
                  <div className="motto-capper">Chat</div>
                </div>
            </Link>    
                <div className="footer-wrapper">
                    <div className="footer-msg">Copyright &copy; 2023. All Rights reserved.</div>
                    <div className="footer-msg">Designed and Developed by Jared Yeung with ❤️ </div>
                    <div className="footer-msg">
                        <span>Using </span>
                        <Link href="https://nextjs.org/" target="_blank" className="ugly-blue">
                        NextJS
                        </Link>
                         <span>  |  </span>
                         <Link href="https://www.sanity.io/" target="_blank" className="ugly-blue">
                            Sanity CMS 
                         </Link>
                    </div>
                </div>
 
            </div>

        </footer>
    )
}