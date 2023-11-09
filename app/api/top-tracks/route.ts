
import { topTracks } from '@/app/lib/spotify';

 
export async function GET(request: Request) {
  try {
  const response = await topTracks();
   
  if (!response.ok) {
    throw new Error('Failed to fetch data'); // Handle this error appropriately
  }
   
  const { items } = await response.json();

  const tracks = items.slice(0, 10).map((track: any) => ({
    artist: track.artists.map((_artist: any) => _artist.name).join(', '),
    songUrl: track.external_urls.spotify,
    coverImage: track.album.images[1],
    title: track.name
  }));

  return new Response(JSON.stringify({ tracks }), {
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
