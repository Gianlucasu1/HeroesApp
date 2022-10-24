import React from 'react'
import { getHerosByPublisher } from "../helpers/getHerosByPublisher"
import {HerosList} from "../components/HerosList"

export const DcPage = () => {

  const newHeros = getHerosByPublisher('DC Comics');

  return (
    <>
      <h1>DCPage</h1>
      <hr />

      <HerosList heros={newHeros} />
    </>
  )
}
