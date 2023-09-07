
import Link from "next/link";
import Image from "next/image";

export default function AuthorSection(props){
    if (props.author !== null) {
        return (
        
                    <div className="author-wrapper">
                        <div className="author-icon">
                            {props.authorImage && (<Image src={props.authorImage} alt={props.author} width={450} height={300}
                            blurDataURL={props.authorLqip} placeholder="blur" loading="lazy"
                            />)}
                        </div>
                        <div className="author-infor">
                            <div className="author-name">{props.author}</div>
                            <div className="author-desc">{props.authorBio}</div>
                        </div>
                    </div>
        

            
        );
    }  else{ 
        return(<>
        
        <div className="author-wrapper">
                        <div className="author-icon">
                            <Image src="/" className="bg-[var(--jy-black)]" width={450} height={450} alt="not found"/>
                        </div>
                        <div className="author-infor">
                            <div className="author-name">Sorry</div>
                            <div className="author-desc">There are no author items</div>
                        </div>
        </div>
        
        
        
        </>);
    }
}