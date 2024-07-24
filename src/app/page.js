import Header from "@/components/Header";
import ImageDisplay from "@/components/ImageDisplay";
import LyricsDisplay from "@/components/LyricsDisplay";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="Home min-h-screen grid grid-cols-1 md:grid-cols-2 border-gray-200 border-2">
      <Header />
      <ImageDisplay />
      <SearchBar />
      <LyricsDisplay />
     
    </main>
  );
}
