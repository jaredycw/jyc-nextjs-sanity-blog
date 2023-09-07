

export default function metadataInfor(){

 
    return {
        title: post.title + ` — ` + metadata.title ,
        description: post.title,
        generator: post._id,
        openGraph: {
            title: post.title + `- JYZ`,
            description: post.title,
            url: post.slug,
            siteName: "JYZ",
            images: [{
                url: post.mainImage
            }
            ]
          }
      };
    
}