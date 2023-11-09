
 
export const getApiKey = async() => {
    const api_key = process.env.NYT_API_KEY;
    return api_key;

};
  
export const bestSeller = async () => {
    const api = await getApiKey();
   
    return fetch(`https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=${api}`, {
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        },
      })

  };

  export const popularArticle = async () => {
    const api = await getApiKey();
   
    return fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${api}`, {
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        },
      })

  };


  export const movieReviews = async () => {
    const api = await getApiKey();
   
    return fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:%22Movies%22%20AND%20type_of_material:%22Review%22&sort=newest&page=0&api-key=${api}`, {
        headers: {
          'Content-Type': 'application/json',
          'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        },
      })

  };
  
