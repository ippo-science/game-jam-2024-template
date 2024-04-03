import Expert1 from '@/public/images/expert-1.jpg'
import Expert2 from '@/public/images/expert-2.jpg'
import Expert3 from '@/public/images/expert-3.jpg'
import Expert4 from '@/public/images/expert-4.jpg'
import Expert5 from '@/public/images/expert-5.jpg'
import PeopleCard from "@/components/people-card";
import React from "react";
import {StaticImageData} from "next/image";

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
          <PeopleCard image={Expert1 as StaticImageData} name="Соня Жеревчук" position="Куратор проекта Indie Go"
                      text="Расскажу как эффективно презентовать проект на питчингах и как правильно к ним подготовиться."/>
            <PeopleCard image={Expert2 as StaticImageData} name="Михаил Коваленко" position="Наставник стартап-проектов ИППО Science"
                        text="Ментор хакатонов, координатор ВКРСт и стартап-проектов для ФСИ, основной организатор Инди Геймджема."/>
            <PeopleCard image={Expert3 as StaticImageData} name="Владимир Вареник" position="Гендиректор Mensa VR"
                        text="Ценность игр как искусства возникает только тогда, когда большое количество людей это признает."/>
            <PeopleCard image={Expert4 as StaticImageData} name="Варвара Кожинова" position="Indie Varvar's"
                        text="Расскажу как правильно участвовать в джемах и что поможет реализовать все задумки в такой короткий срок."/>
            <PeopleCard image={Expert5 as StaticImageData} name="Евгений Медведев" position="Специалист QA"
                        text="Поделюсь секретами налаживания процессов тестирования за свои 15 лет работы в индустрии."/>
          </div>
        </div>
      </div>
    </section>
  )
}
