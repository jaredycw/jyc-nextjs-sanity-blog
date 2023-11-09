/** @type {import('next').NextConfig} */
const nextConfig = {
 
    images: {
      domains: [
        'i.scdn.co',
        'storage.googleapis.com',
        'books.google.com',
        'static01.nyt.com',
        'nytimes.com',
        'www.hko.gov.hk'
      ],
      remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: "",
          },
        ],
      },
      reactStrictMode: true,
	    env: {
        HOST_NAME:process.env.HOST_NAME,
		    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		NYT_API_KEY: process.env.NYT_API_KEY,
            
		  }
 
}




module.exports = nextConfig
