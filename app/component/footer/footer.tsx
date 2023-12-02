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

                <div className="footer-nav-wrapper py-5">
                    <nav className="footer-nav">
                        <ul>
                            <li><Link href="/about" aria-label={`Read more about me`}>About</Link></li>
                            <li><Link href="/posts" aria-label={`Read more posts`}>Blog</Link></li>
                            <li><Link href="/categories"  aria-label={`Read more categories`}>Categories</Link></li>
                            <li><Link href="/works" aria-label={`Read more works and design`}>Design</Link></li>
                            <li><Link href="/experiments" aria-label={`Read more experiments/stuffs/`}>Experiment</Link></li>
                            <li><Link href="/fetching" aria-label={`Read more about API`}>Fetching</Link></li>
                            <li><Link href="/growth" aria-label={`Read more about courses, certificates, and growth`}>Growth</Link></li>
                            <li><Link href="/industries" aria-label={`Read more about industries`}>Industries</Link></li>
                            <li><Link href="/skills" aria-label={`Read more about skills`}>Skills</Link></li>
                        </ul>
                    </nav>
                </div>

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