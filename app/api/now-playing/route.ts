
import { currentlyPlayingSong } from '@/app/lib/spotify';
import { NextResponse } from 'next/server'
export const fetchCache = 'force-no-store'
export const revalidate = 0

export async function GET() {
 try {
  const response = await currentlyPlayingSong();
  
  if (!response.ok) {
      throw new Error('Failed to fetch data'); // Handle this error appropriately
  }
  
  if (response.status === 204 || response.status > 400) {
    return new Response("Probably working and sleeping!");
  }

  const song = await response.json();
  
  if (song.item === null) {
    return NextResponse.json({ isPlaying: false },{ status: 200 } );
  }


  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist :any) => _artist.name).join(", ");
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return new Response(JSON.stringify({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
    }
    
  });
 }catch (error :any) {
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