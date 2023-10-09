
import React from "react";

/* Spotify Track  */
export type SpotifyTrack = {
  id: number;
  title: string;
  songUrl: string;
  coverImage: {
    url: string;
  };
  artist: string;
  releasedDate:string;
};

/* Spotify Artist  */
export type SpotifyArtist = {
  id: number;
  name: string;
  url: string;
  coverImage: {
    url: string;
  };
  popularity: number;
  genre:string;
};
