import React from 'react'
import Nav from '../components/nav/Nav'
import Banner from '../components/banner/Banner'
import AboutUs from '../components/aboutUs/AboutUs'
import News from '../components/news/News'
import Films from '../components/films/Films'
import Guest from '../components/guest/Guest'
import NewFilms from '../components/newFilms/NewFilms'
import Delegatsi from '../components/delegatsi/Delegatsi'
import History from '../components/history/History'
import Referes from "../components/refreres/Referes"
import Footer from '../components/footer/Footer'
import Programmer from '../components/programmer/Programmer'
import Master from '../components/master/Master'
import Media from "../components/media/Media"

const Home = () => {
  return (
    <div>
        <Nav/>
        <Banner/>
        <AboutUs/>
        <News/>
        <Films/>
        <Guest/>
        <Programmer/>
        <Media/>
        <NewFilms/>
        <Delegatsi/>
        <History/>
        <Master/>
        <Referes/>
        <Footer/>
    </div>
  )
}

export default Home