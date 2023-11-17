import Link from "next/link"
export default function ExploreMoreBtn(props:any) {
    return (
        
        <div className="explore-wrapper">
            <Link href={props.target} aria-label={`Explore more ${props.target}`}>
                <button>Explore More </button>
            </Link>
        </div>        
    )
  }