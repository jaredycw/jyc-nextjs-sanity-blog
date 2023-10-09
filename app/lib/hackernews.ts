export const topStories = async () => {  

    return fetch(`https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

};