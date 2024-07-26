'use client';

import React, { useState } from 'react';
import Header from "@/components/Header";
import ImageDisplay from "@/components/ImageDisplay";
import LyricsDisplay from "@/components/LyricsDisplay";
import SearchBar from "@/components/SearchBar";
import axios from 'axios';

export default function Home() {
  const [lyrics, setLyrics] = useState('');
  const [artistImage, setArtistImage] = useState('');
  const [artistName, setArtistName] = useState('');

  const fetchLyricsAndImage = async (query) => {
    try {
      const [artist, title] = query.split('-').map(s => s.trim());
      setArtistName(artist);

      const lyricsResponse = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`);
      setLyrics(lyricsResponse.data.lyrics);

      const artistResponse = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${bb679eccd0dc91841be0a06eecb10a67}&format=json`);
      const image = artistResponse.data.artist.image.find(img => img.size === 'large')['#text'];
      setArtistImage(image);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLyrics('');
      setArtistImage('');
    }
  };

  return (
    <main className="Home min-h-screen grid grid-cols-1 md:grid-cols-2 border-gray-200 border-2">
      <Header />
      <ImageDisplay artistImage={artistImage} artistName={artistName} />
      <SearchBar onSearch={fetchLyricsAndImage} />
      <LyricsDisplay lyrics={lyrics} />
    </main>
  );
}
