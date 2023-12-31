
 

export const getAccessToken = async () => {
  const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token : refresh_token ?? "",
    }),
  });

  return response.json();
};

export const topTracks = async () => {
  const { access_token } = await getAccessToken();
 

  return fetch("https://api.spotify.com/v1/me/top/tracks?time_range=short_term", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
    },
  });

};

export const topArtists = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/top/artists?time_range=short_term", {
    headers: {
      Authorization: `Bearer ${access_token}`,
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=86400, stale-while-revalidate=43200'
      
    },
  });

  
};

export const newReleases = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/browse/new-releases?country=HK&limit=10", {
    headers: {
      Authorization: `Bearer ${access_token}`,  
      'content-type': 'application/json',
      'cache-control': 'public, s-maxage=604800, stale-while-revalidate=302400'
      
    },
  });
};



export const currentlyPlayingSong = async () => {
  const { access_token } = await getAccessToken();

  return fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

