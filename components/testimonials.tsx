import Expert1 from '@/public/images/expert-1.jpg'
import Expert2 from '@/public/images/expert-2.jpg'
import Expert3 from '@/public/images/expert-3.jpg'
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
                      text="Инди Геймджем - это не только конкурс, но и возможность для личного и профессионального роста."/>
            <PeopleCard image={Expert2} name="Михаил Коваленко" position="Наставник стартап-проектов IPPO Science"
                        text="Ментор хакатонов, координатор ВКРСт и стартап-проектов для конкурсов Фонда содействия инновациям."/>
            <PeopleCard image={Expert3} name="Владимир Вареник" position="Гендиректор Mensa VR"
                        text="Ценность игр как искусства возникает только тогда, когда большое количество людей это признает."/>
          </div>
        </div>
      </div>
    </section>
  )
}
