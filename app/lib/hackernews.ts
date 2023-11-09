export const topStories = async () => {  

    return fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`, {
        headers: {
          'content-type': 'application/json',
          'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
        },
      })

};