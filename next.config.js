/** @type {import('next').NextConfig} */
const nextConfig = {
 
    experimental:{
        appDir: true,
    },
    images: {
      domains: [
        'i.scdn.co',
        'storage.googleapis.com',
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
		    SPOTIFY_REFRESH_TOKEN: process.env.SPOTIFY_REFRESH_TOKEN,
        SPOTIFY_CLIENT_SECRET: process.env.SPOTIFY_CLIENT_SECRET,
        SPOTIFY_CLIENT_ID: process.env.SPOTIFY_CLIENT_ID,
		NYT_API_KEY: process.env.NYT_API_KEY,
            
		  }
 
}




module.exports = nextConfig
