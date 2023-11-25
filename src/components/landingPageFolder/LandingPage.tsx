import React from 'react'
import HeroComp from '@/components/landingPageFolder/heroFolder/HeroComp'
import TopSongsComp from '@/components/landingPageFolder/topSongsFolder/TopSongsComp'
import TopSixAlbums from '@/components/landingPageFolder/topSixAblumsFolder/TopSixAlbums'
import homePageDisplay from '@/app/HomePageStyles.module.css'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className={homePageDisplay.componentContainer}>
      <HeroComp />
      <TopSongsComp />
      <TopSixAlbums />
    </div>
  )
}

export default LandingPage