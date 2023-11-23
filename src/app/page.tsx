import HeroComp from '@/components/heroFolder/HeroComp'
import HomePageBody from '@/components/homePageBody/HomePageBody'
import React from 'react'
import TopSongsComp from '@/components/topSongsFolder/TopSongsComp'
import TopSixAlbums from '@/components/topSixAblumsFolder/TopSixAlbums'


export default function Home() {
  return (
   <main>
    <HomePageBody>
      <HeroComp />
      <TopSongsComp />
      <TopSixAlbums />
    </HomePageBody>
   </main>
  )
}
