import React from 'react'
import HeroComp from '@/components/heroFolder/HeroComp'
import HomePageBody from '@/components/homePageBody/HomePageBody'
import TopSongsComp from '@/components/topSongsFolder/TopSongsComp'
import TopSixAlbums from '@/components/topSixAblumsFolder/TopSixAlbums'
import homePageDisplay from '@/app/HomePageStyles.module.css'


export default function Home() {
  return (
   <main>
    <HomePageBody>
      <div className={homePageDisplay.componentContainer}>
      <HeroComp />
      <TopSongsComp />
      <TopSixAlbums />
      </div>
    </HomePageBody>
   </main>
  )
}
