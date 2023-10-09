import { getBook } from "@/sanity/sanity-utils";
import Image from "next/image";
import PortableContent from "@/app/component/portablecontent";
import HobbySection from "@/app/component/hobbysection";
import TagSection from "@/app/component/tagsection";
import MottoSection from "@/app/component/mottosection";
import NotFound from "../../not-found";
import SnsWidget from "@/app/component/snswidget";
import { metadata } from "../../layout";
import BooksApiExample from "@/app/component/books/booksapi";
import AdsPart from "@/app/component/adpart";



export async function generateMetadata({ params }: any){

  const slug = params.book;
  const book = await getBook(slug);

  if (book !== null) {
  return {
      title: book.title + ` — ` + metadata.title ,
      description: book.title,
      generator: book._id,
      openGraph: {
          title: book.title  + ` — ` + metadata.title ,
          description: book.title,
          url: book.slug,
          siteName: metadata.title ,
          images: [{
              url: book.mainImage
          }
          ]
        }
    };
  } else {
      return {
          title: `404 Page not Found` + ` — ` + metadata.title
      };
  }
}


export default async function Book({ params }: any){

  const slug = params.book;
  const book = await getBook(slug);

  if (book !== null) {
    return (

      <div className="container mx-auto hobbies-section">
        <div className="grid lg:grid-cols-7 grid-cols-2 gap-11">
        <div className="col-span-full lg:col-span-2">
            <div className="hobbies-page-wrapper grid lg:justify-items-center p-10">
                <div className="hobbies-list">
                        <Image src={book.cover} alt={book.title} width={150} height={220} className="post-wrapper-img"
                        blurDataURL={book.lqip} placeholder="blur" loading="lazy"
                        />
                    <ul className="hobbies-infor">
                      <li>Page: {book.page}</li>
                      <li>Year: {book.year}</li>
                      <li>Genre: {book.genre}</li>
                      <li>Book List: {book.list}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-span-full lg:col-span-5"> 
            <div className="lg:pl-5 pl-0">
                <div className="hobbies-heading">
                  <div className="title"><h1>{book.title}</h1></div>
                  <div className="creator">{book.bookAuthor}</div>
                </div>
                <div className="hobbies-heading-box">
                  <div className="post-infor-wrapper">
                      <div className="post-author">{book.author}</div>
                      <div className="post-date">{book.publishedOn}</div>
                      <div className="post-reading">{book.estimatedReadingTime} mins read</div>
                  </div>
                </div>

                <SnsWidget />
                <div className="content mt-5">
                  <PortableContent content={book.content} />
                </div>
            </div>

        </div>
        </div>
        <section className="page-featured">
          <AdsPart />
          <BooksApiExample bookname={book.googleBooks} />
          
          <MottoSection />
          
          <TagSection categories={book.categories} />
          <div className="page-hobbies">
            <div id="section-hobby">
              
              <HobbySection />
            </div>
          </div>
        </section>
      </div>
    )
  } else {
    return NotFound();
  }

}