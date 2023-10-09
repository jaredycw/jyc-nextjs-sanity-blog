const { parse } = require('rss-to-json');
export async function GET(){

    try {
 
      var rss = await parse('http://feeds.feedburner.com/OpenCulture');

      const items = rss.items;

      const articles = items.slice(0,10).map((article: any) => ({
          title: article.title,
          author: article.author,
          url: article.link,
          published: article.published,
          categories: article.category,

      }));


      return new Response(JSON.stringify({articles}), {
        status: 200,
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        }
      }
      ); 
  
    }
    catch (error :any) {
        // Handle the error appropriately, log it, and return an error response
        console.error('An error occurred:', error);
        return new Response(JSON.stringify({ error: error.message }), {
          status: 500,
          headers: {
            'content-type': 'application/json'
          }
        });
      }

}