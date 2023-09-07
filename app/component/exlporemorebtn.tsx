import Link from "next/link"
export default function ExploreMoreBtn(props) {
    return (
        
        <div className="explore-wrapper">
            <Link href={props.target}>
                <button>Explore More </button>
            </Link>
        </div>        
    )
  }