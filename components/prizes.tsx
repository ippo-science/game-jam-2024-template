import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import PeopleCard from "@/components/people-card";
import React from "react";
import PrizeCard from "@/components/prize-card";

export default function Prizes() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Награды</h2>
            <p className="text-xl text-gray-400">
                Участники смогут выиграть призы от наших партнеров
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
          <PrizeCard money={'75000'} img={TestimonialImage01}/>
            <PrizeCard money={'50000'} img={TestimonialImage02}/>
            <PrizeCard money={'25000'} img={TestimonialImage03}/>

          </div>

        </div>
      </div>
    </section>
  )
}
