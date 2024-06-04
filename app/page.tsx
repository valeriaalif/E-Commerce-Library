import Image from 'next/image'
import Link from 'next/link'
import Button from './components/Button';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Header from './containers/Header/Header';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15">
      <div className="z-10 max-w-5xl w-full items-center justify-between  text-sm ">
      <Header></Header>
      <Carousel></Carousel>
      </div>
    </main>
  )
}
