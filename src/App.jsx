import React from 'react'
import Header from './components/Header'
import SectionComidaOriental from './components/SectionComida'
import SectionSobreNos from './components/SectionSobreNos'
import SectionPopulares from './components/SectionPopulares'
import SectionComentarios from './components/SectionComentarios'


export default function App() {
  return (
    <>
      <Header/>
      <SectionComidaOriental />
      <SectionSobreNos />
      <SectionPopulares />
      <SectionComentarios />
    </>
  )
}
