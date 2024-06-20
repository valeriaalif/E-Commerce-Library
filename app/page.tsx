import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar';
import CTA from './components/CTA';
import ProductCard from './components/ProductCard';
import Banner from './components/Banner';
import Header from './containers/Header/Header';
import BookContainer from './containers/BookContainer/BookContainer';
import Feature from './components/Feature';
import Blog from './containers/Blog';
import Footer from './components/Footer';
import Carousel from './components/Carousel/Carousel'
import Hero from './components/Hero';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15">
       <Navbar></Navbar>
  
      <Header></Header>
      <BookContainer></BookContainer>
      <Hero></Hero>
      <Blog></Blog>
      <Feature></Feature>
      <Footer></Footer>
    </main>
  )
}
