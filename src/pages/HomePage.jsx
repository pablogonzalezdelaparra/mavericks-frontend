import React from 'react';
import HomePageStyle from '../styles/HomePageStyle.css';
import NavbarC from '../components/NavbarC';
import Landing from './Landing';
import Comentarios from '../components/Comentarios';
import DashboardsC from '../components/DashboardsC';
import FormCotizacion from '../components/FormCotizacion';
import Footer from '../components/Footer';
import LineGraph from '../components/GraficaLinea';

function HomePage() {
  return (
    <div className='home-page-container'>
        <NavbarC />
        <Landing />
        <FormCotizacion />
        <DashboardsC />
        <LineGraph />
        <Comentarios />
        <Footer />
    </div>
  )
}

export default HomePage