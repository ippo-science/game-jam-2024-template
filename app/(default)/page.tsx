import Blocks from "@/components/blocks";

export const metadata = {
  title: 'Инди-Геймджем',
  description: 'Соревнование по созданию игр',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Partners from "@/components/partners";

export default function Home() {
  return (
    <>
      <Hero /> {/*todo видос и основная мнафа*/}
      <Features /> {/*todo описание геймджема*/}
        <Partners /> {/*todo партнеры*/}
      {/*призовой фонд*/}
      <Zigzag /> {/*todo расписание и награды*/}
      <Testimonials /> {/*todo эксперты*/}
    {/*    FAQ*/}

    </>
  )
}
