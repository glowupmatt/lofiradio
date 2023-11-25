'use client'

import React, { useContext } from 'react'
import HeroStyles from './HeroStyles.module.css'
import EmblaCarousel from './EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel-react'
import Link from 'next/link'
import { DataContext } from '@/context/AppContext'

type Props = {}
const OPTIONS: EmblaOptionsType = {
  align: 'start',
  direction: 'rtl',
  loop: true
}
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const HeroComp = (props: Props) => {
  const {
    selectedPage,
    setSelectedPage,
  } = useContext(DataContext);
  return (
    <div onClick={() => setSelectedPage("albumPage")} className={HeroStyles.heroImageContainer}>
      <div className={HeroStyles.heroTextContainer}>
        <h2 className={HeroStyles.headerText}>Top Albums</h2>
        <p className={HeroStyles.bodyText}>Discover your favorite Lofi album with out all new 
        lofi radio web app! We have all the new music perfectly  curated 
        for your study sessions!</p>
      </div>
      <section className={HeroStyles.heroImage}>
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </section>
    </div>
  )
}

export default HeroComp