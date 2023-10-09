import { topStories } from "@/app/lib/hackernews";

export async function GET() {
  try {

    const response = await topStories();
    const data = await response.json();

    const storyIds = data.slice(0,10).map((story: any) => ({
      id: story,
    }));

    const stories = await Promise.all(
      storyIds.map((id:any) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id.id}.json?print=pretty`)
          .then((response) => response.json())
      )
    );

    return new Response(JSON.stringify({ stories }), {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
      }
    });
  } catch (error :any) {
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
