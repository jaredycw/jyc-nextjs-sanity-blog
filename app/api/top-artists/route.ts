import { topArtists } from '@/app/lib/spotify';

export async function GET(request: Request) {
  try {
    const response = await topArtists();
    
    const data = await response.json();

    const artists = data.items.slice(0, 10).map((artist: any) => ({
      name: artist.name,
      url: artist.external_urls.spotify,
      coverImage: artist.images[1],
      popularity: artist.popularity,
      genre: artist.genres[0],
    }));

    return new Response(JSON.stringify({ artists }), {
      status: 200,
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
