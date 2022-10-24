import React from 'react'
import { getHerosByPublisher } from "../helpers/getHerosByPublisher"
import {HerosList} from "../components/HerosList"

export const MarvelPage = () => {
  const newHeros = getHerosByPublisher('Marvel Comics');

  return (
    <>
      <h1>Marvel Page</h1>
      <hr />

      <HerosList heros={newHeros} />
    </>
  )
}
