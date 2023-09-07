import Link from "next/link"

export default function Footer(){
    return(
        <footer id="site-footer" className="site-footer">

          <div className="container mx-auto">
            <Link href="#" target="_blank">
                <div className="motto-wrapper">
                  <div className="motto-upper">Contact</div>
                  <div className="motto-capper">Chat</div>
                </div>
            </Link>    
                <div className="footer-wrapper">
                    <div className="footer-msg">Copyright &copy; 2023. All Rights reserved.</div>
                    <div className="footer-msg">Designed and Developed with ❤️ by Jared Yeung</div>
                    <div className="footer-msg">Powered by NextJS | Sanity CMS </div>
                </div>
 
            </div>

        </footer>
    )
}