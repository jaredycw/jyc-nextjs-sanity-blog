import { getPosts } from '@/sanity/sanity-utils' ;
import Link from 'next/link';
import Image from 'next/image';
import { getFormattedDate } from '../lib/date'; 


export default async function PostSection() {
    const posts = await getPosts();

  return (
            <div className="grid grid-cols-1 gap-0 md:gap-5 xl:grid-cols-3">
                {posts.map((post) =>(
                            <Link href={`/posts/${post.slug}`} key={post._id} aria-label={`Read more ${post.title}`}>
                                <div className="post-wrapper" key={post._id}>
                                  <div className="thumbnail">{post.mainImage !== null ? (
                        <Image src={post.mainImage} alt={post.title} width={1080} height={1080} className="post-wrapper-img"
                        blurDataURL={post.lqip} placeholder="blur" loading="lazy"
                        />
                        ) : (
                            <Image
                              src="https://cdn.sanity.io/images/mrzc8peh/production/926db6f7d5b119da2e8fa0572415c94880ddf40e-3334x2084.jpg"
                              alt="Default photo"
                              width={1080}
                              height={1080}
                              loading="lazy"
                              className="post-wrapper-img"
                              blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAANABQDASIAAhEBAxEB/8QAGQAAAQUAAAAAAAAAAAAAAAAAAAECBAUH/8QAHhAAAgICAwEBAAAAAAAAAAAAAQIAAwURBBJRITH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AMLweMfLZBeLXYlZIJ7P+DUkZHBX8Him+22pl7EAKdn5Kmt3rbtWzK3oOorWO2+zsd+mUMhCED//2Q=="
                              placeholder="blur"
                            />
                          )}</div>
                                      <div className="post-meta">
                                          <div className="post-title">{post.title}</div>

                                          <div className="post-date">{getFormattedDate(new Date(post.publishedOn))}</div>
                                      </div>
                                </div>
                            </Link>
                    ))}
            </div>
  );
}