
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
      <Hero /> {/*todo видос и основная мнафа*/}
      <Features /> {/*todo описание геймджема*/}
        <Partners /> {/*todo партнеры*/}

        <Prizes />
      <Zigzag /> {/*todo расписание и награды*/}
      <Testimonials /> {/*todo эксперты*/}
        <FAQ /> {/*todo вопросы и ответы*/}

    </>
  )
}
