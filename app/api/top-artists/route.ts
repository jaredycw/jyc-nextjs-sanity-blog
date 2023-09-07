
import { topArtists } from '@/app/lib/spotify';

 
export async function GET() {
  const response = await topArtists();
  const { items } = await response.json();

  const artists = items.slice(0, 10).map((artist) => ({
    name: artist.name,
    url: artist.external_urls.spotify,
    coverImage: artist.images[1],
    popularity: artist.popularity,
    genre: artist.genres[0],
  }));

  return new Response(JSON.stringify({ artists }), {
    status: 200,
    headers: {
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    }
  });
}