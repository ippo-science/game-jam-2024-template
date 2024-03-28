import Image from 'next/image'

import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import Expert1 from '@/public/images/expert-1.jpg'
import Expert2 from '@/public/images/expert-2.jpg'
import PeopleCard from "@/components/people-card";
import React from "react";

export default function Testimonials() {
  return (
    <section id={'experts'}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Наши эксперты</h2>
            <p className="text-xl text-gray-400">
                {/*Они расскажут вам о своем опыте и поделятся советами, которые помогут вам стать лучше.*/}
              Именно они оценят ваши проекты и выберут лучшие из них.
            </p>

          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">
          <PeopleCard image={Expert1} name="Соня Жеревчук" position="Куратор проекта Indie Go"
                      text="Я занимаюсь разработкой игр уже много лет. Я знаю, что нужно для того, чтобы создать игру, которая понравится игрокам."/>
            <PeopleCard image={Expert2} name="Михаил Коваленко" position="Наставкник стартап-проектов Science Crew"
                        text="Я занимаюсь разработкой игр уже много лет. Я знаю, что нужно для того, чтобы создать игру, которая понравится игрокам."/>
            <PeopleCard image={TestimonialImage03} name="Александр Шульгин" position="Руководитель проектов"
                        text="Я занимаюсь разработкой игр уже много лет. Я знаю, что нужно для того, чтобы создать игру, которая понравится игрокам."/>







          </div>

        </div>
      </div>
    </section>
  )
}
