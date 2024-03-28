
export const metadata = {
  title: 'Инди Геймджем',
  description: 'Соревнование по созданию игр',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Partners from "@/components/partners";
import FAQ from "@/components/faq";
import Prizes from "@/components/prizes";

export default function Home() {
  return (
    <>
      <Hero /> {/*todo видос */}
      <Features />
        <Partners />
        <Prizes />
      <Zigzag />
      <Testimonials /> {/*todo экспертов добить*/}
        <FAQ />

    </>
  )
}
