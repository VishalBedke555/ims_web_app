import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { Routes, Route } from 'react-router-dom';

import { Suspense, lazy } from 'react'
import { SpinnerComponent } from './components/LoaderComponent'
import {doc, updateDoc,getDoc,collection, increment} from "firebase/firestore"
import { db } from './components/FireBase'

function App() {
  const [count, setCount] = useState(0)

  const HomeComponent = lazy(()=>import('./components/HomeComponent'))
  const AboutUsComponent = lazy(()=>import('./components/AboutUs'))
  const DescriptionComponent = lazy(()=>import('./components/Description'))
  const FAQComponent = lazy(()=>import('./components/FaqComponent'))
  const TermsComponent = lazy(()=>import('./components/TermsComponent'))
  const PrivacyComponent = lazy(()=>import('./components/PrivacyComponent'))
  const ImgCheckOut = lazy(()=>import('./components/ImageCheckComp'))
  const ExpandComponent = lazy(()=>import('./components/ExpandImg'))

  const countCollectionRef = doc(db,'countCollection','countDocument')
  

  return (
    <Suspense fallback={<SpinnerComponent/>}>
      <Routes>
        <Route index path='/' element={<HomeComponent/>}/>
        <Route path='/aboutus' element={<AboutUsComponent/>}/>
        <Route path='/description' element={<DescriptionComponent/>}/>
        <Route path='/faq' element={<FAQComponent/>}></Route>
        <Route path='/termsandconditions' element={<TermsComponent/>}></Route>
        <Route path='/privacy' element={<PrivacyComponent/>}></Route>
        <Route path='/medicalimages' element = {<ImgCheckOut/>}/>
        <Route path='/expandimg' element = {<ExpandComponent/>}/>
      </Routes>
    </Suspense>
  )
}

export default App
