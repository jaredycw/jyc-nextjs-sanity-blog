import Link from "next/link"

export default function Footer(){
    return(
        <footer id="site-footer" className="site-footer">

          <div className="container mx-auto">
                <Link href="/contact" aria-labelledby="contactLabel chatLabel">
                    <div role="link" className="motto-wrapper">
                        <div className="motto-upper" aria-label="Contact">Contact</div>
                        <div className="motto-capper" aria-label="Chat">Chat</div>
                    </div>
                </Link> 
                <div className="footer-wrapper">
                    <div className="footer-msg">Copyright &copy; 2023. All Rights reserved.</div>
                    <div className="footer-msg">Designed and Developed by Jared Yeung with ❤️ </div>
                    <div className="footer-msg">
                        <span>Using </span>
                        <Link href="https://nextjs.org/" target="_blank" className="ugly-blue" aria-label={`Read more NextJS`}>
                        NextJS
                        </Link>
                         <span>  |  </span>
                         <Link href="https://www.sanity.io/" target="_blank" className="ugly-blue" aria-label={`Read more Sanity CMS`}>
                            Sanity CMS 
                         </Link>
                    </div>
                </div>
 
            </div>

        </footer>
    )
}