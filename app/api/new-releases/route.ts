
import { newReleases } from "@/app/lib/spotify";

 
export async function GET() {
  try {
  const response = await newReleases();


  const {albums} = await response.json();
  
  const tracks = albums.items.slice(0,10).map((track:any) => ({
      title: track.name,
      artist: track.artists.map((_artist: any) => _artist.name).join(', '),
      coverImage: track.images[1],
      songUrl: track.external_urls.spotify,
      releasedDate: track.release_date
  }));


  return new Response(JSON.stringify({tracks}), {
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
