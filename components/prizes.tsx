import Image from 'next/image'

import Golden from '@/public/images/golden-medal-1.svg'
import Silver from '@/public/images/silver-medal-2.svg'
import Bronze from '@/public/images/bronze-medal-3.svg'
import PeopleCard from "@/components/people-card";
import React from "react";
import PrizeCard from "@/components/prize-card";
import {Silkscreen} from "next/dist/compiled/@next/font/dist/google";

export default function Prizes() {
  return (
    <section id="prizes">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Награды</h2>
            <p className="text-xl text-gray-400">
                Общий призовой фонд 300 000 рублей!
            </p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none h4 mb-2 text-center">
            <PrizeCard money={'75 000'} img={Golden}/>
            <PrizeCard money={'50 000'} img={Silver}/>
            <PrizeCard money={'25 000'} img={Bronze}/>
          </div>

        </div>
      </div>
    </section>
  )
}
