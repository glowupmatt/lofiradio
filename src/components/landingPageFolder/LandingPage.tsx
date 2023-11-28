import React from 'react'
import HeroComp from '@/components/landingPageFolder/heroFolder/HeroComp'
import TopSongsComp from '@/components/landingPageFolder/topSongsFolder/TopSongsComp'
import TopSixAlbums from '@/components/landingPageFolder/topSixAblumsFolder/TopSixAlbums'
import landingPage from './LandingPage.module.css'

type Props = {}

const LandingPage = (props: Props) => {
  return (
    <div className={landingPage.componentContainer}>
      <div className={landingPage.slider}>
        <HeroComp />
      </div>
      <div>
        <TopSongsComp />
      </div>
      <div className={landingPage.topSixContainer}>
        <TopSixAlbums />
      </div>
    </div>
  )
}

export default LandingPage