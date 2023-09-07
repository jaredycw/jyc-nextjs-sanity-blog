
import { currentlyPlayingSong } from '@/app/lib/spotify';

 
export async function GET() {
  const response = await currentlyPlayingSong();

  if (response.status === 204 || response.status > 400) {
    return new Response("Probably working and sleeping!");
  }

  const song = await response.json();

  if (song.item === null) {
    return res.status(200).json({ isPlaying: false });
  }

  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists.map((_artist) => _artist.name).join(", ");
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
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}