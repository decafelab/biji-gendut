import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/header'

export default function Home() {
  return (
    <div>
        <Head>
            <title>BG Agency 123</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header></Header>

        {/* ======Hero Image====== */}
        {/* <div class="w-full h-[400px] lg:h-[600px] xl:h-[800px] bg-[url('/images/portfolio/carsome.jpg')] bg-cover bg-center"></div> */}

        {/* ======Hero Video====== */}
        <video muted autoPlay loop playsInline class="w-full h-[400px] lg:h-[600px] xl:h-[800px] object-cover"
            poster="./images/portfolio/carsome.jpg"
            src="./images/portfolio/carsome/sindhubharata_20200911_212819_0.mp4">
        </video>
        
        <div class="py-16 px-4 text-center bg-[#f1f2f2] dark:bg-[#1a1a1a]">
            <div class="md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
                <p class="uppercase font-bold text-4xl mb-4">Carsome</p>
                <p class="text-2xl font-light mb-4">How do you appeal to<br></br>the millenial demographics</p>
                <p class="mb-4">Bikin Gemes Agency is a creative service agency
                <br></br>with a disruptive business model.</p>
                <p class="uppercase font-bold text-3xl">42%</p>
                <p class="mb-4">Sales increase</p>
                <p class="uppercase font-bold text-3xl">#1</p>
                <p>Fastest growing platform in South East Asia</p>
            </div>  
        </div>
        
        {/* ======Video====== */}
        <div class="p-4 lg:p-8 xl:p-16 flex flex-col items-center w-full lg:w-5/6 xl:w-4/6 mx-auto">
            <div class="relative h-0 overflow-hidden max-w-full w-full pb-[56.25%]">
                <div>
                    <img src="/images/hero-bg.jpg"/>
                </div>
                <iframe class="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/tIpDk0uB3II" title="YouTube video player"></iframe>
            </div>
        </div>
        
        {/* ======Gallery1====== */}
        <div class="bg-[#f1f2f2] dark:bg-[#1a1a1a]">
            <div class="p-4 lg:p-8 xl:p-16 grid grid-cols-2 gap-3 w-full lg:w-5/6 xl:w-4/6 mx-auto">
                <img src="./images/hero-bg.jpg"/>
                <img src="./images/hero-bg.jpg"/>
                <img src="./images/hero-bg.jpg"/>
                <img src="./images/hero-bg.jpg"/>
            </div>
        </div>

        {/* ======Gallery2====== */}
        <div>
            <div class="p-4 lg:p-8 xl:p-16 grid grid-cols-3 gap-3 w-full lg:w-5/6 xl:w-4/6 mx-auto">
                <img src="./images/portfolio/cafe.jpg"/>
                <img src="./images/portfolio/cafe.jpg"/>
                <img src="./images/portfolio/cafe.jpg"/>
            </div>
        </div>

        {/* ======Gallery3====== */}
        <div class="bg-[#f1f2f2] dark:bg-[#1a1a1a]">
            <div class="p-4 lg:p-8 xl:p-16 grid grid-cols-3 gap-3 w-full lg:w-5/6 xl:w-4/6 mx-auto">
                <img src="./images/portfolio/mana.jpg"/>
                <img src="./images/portfolio/mana.jpg"/>
                <img src="./images/portfolio/mana.jpg"/>
            </div>
        </div>

        <div class="p-4 lg:p-8 xl:p-16 flex flex-col items-center shrink-0">
            <a href="/" class="mb-0 px-10 md:px-14 py-4 text-sm sm:text-xl lg:text-2xl font-bold mb-4 bg-black hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-300 text-white dark:text-black rounded-full">See more of the good stuff</a>
        </div>

        <footer id="Contact" class="flex bg-black mx-auto py-20">
            <div class="mx-auto grid sm:grid-cols-3 gap-8 2xl:gap-10 2xl:max-w-screen-2xl">
            <div class="flex flex-col-reverse px-4"><Image src="/images/footer-logo.png" width={277} height={332} /></div>
            <div class="flex flex-col justify-between text-center">
                <div>
                <p class="text-gray-400 mb-8">Jakarta | Indonesia</p>
                <p class="text-white">New Business</p>
                <p class="text-gray-400 mb-8">Sheilla@bikingemes.com</p>
                <p class="text-white">Jobs</p>
                <p class="text-gray-400 mb-8">Sheilla@bikingemes.com</p>
                </div>
                <h3 class="text-2xl lg:text-5xl text-white font-bold uppercase">BG Agency</h3>
            </div>
            <div class="flex items-end justify-center sm:justify-end px-4">
                <Link class="mr-4" href="#"><Image src="/images/wa.png" width={50} height={50} /></Link>
                <Link href="#"><Image src="/images/ig.png" width={50} height={50} /></Link>
            </div>
            </div>
        </footer>
    </div>
  )
}
