const { parse } = require('rss-to-json');
export async function GET(){

    try {
 
      var rss = await parse('http://feeds.bbci.co.uk/news/rss.xml');

      const items = rss.items;

      const articles = items.slice(0,10).map((article: any) => ({
          title: article.title,
          url: article.link,
          published: article.published,

      }));


      return new Response(JSON.stringify({articles}), {
        status: 200,
        headers: {
          'content-type': 'application/json',
 
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