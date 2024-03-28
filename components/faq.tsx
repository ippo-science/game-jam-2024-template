import Image from 'next/image'

import TestimonialImage01 from '@/public/images/testimonial-01.jpg'
import TestimonialImage02 from '@/public/images/testimonial-02.jpg'
import TestimonialImage03 from '@/public/images/testimonial-03.jpg'
import PeopleCard from "@/components/people-card";
import React from "react";
import FaqCard from "@/components/faq-card";
const faqs = [
  {
    question: "Сколько человек должно быть в команде?",
    answer: "Команда от 1 до 6 человек."
  },
  {
    question: "Какие требования к команде?",
    answer: "Команда от 1 до 6 человек, в возрасте от 18 до 25 лет вчключительно. Название команды должно быть читаемым и легко произносимым в публичном поле."

  },
  {
    question: "Какие требования к проекту?",
    answer: "Проект должен быть разработан с нуля, не использовать готовые движки и быть оригинальным."

  },
  {
    question: "Где и как найти команду?",
    answer: "Можно оставить сообщение с поиском команды в нашем Телеграм-чате или сообществе в ВК."

  },
  {
    question: "Как понять, что нужно выступать на очном питче?",
    answer: "На очный питч в финале будут допущены только финалисты, набравшие макимальное количество баллов. Кто это — сообщим в сообществе ВК после оценки работ экспертами и подсчёта баллов."

  },
  {
    question: "Я из другого города, надо присутствовать очно на финальном питче?",
    answer: "Не обзятельно, будет трансляция финала."
  },
  {
    question: "Где проходит финал и отчным питч?",
    answer: "Очный питч финалистов проходит в РТУ МИРЭА на пр-е Вернасдкого, 78, в коворгинг-зоне."
    },
    {
    question: "Моя команда победила, но мы из другого города, как забрать приз?",
    answer: "Мы свяжемся со всеми победителями и выберем удобную доставку."
    },
    {
    question: "Куда загружать проекты?",
    answer: "На платформу Rusitch на страницу Инди Геймджема 2024"

    }

]

export default function FAQ() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Частые вопросы</h2>


            <p className="text-xl text-gray-400">
                {/*Они расскажут вам о своем опыте и поделятся советами, которые помогут вам стать лучше.*/}
              Узнать подробные условия проведения можно в <a className={"text-purple-600"}
                                                             style={{textDecoration: "underline"}}
                                                             href={"/rules"}>Положении о геймджеме</a>.
            </p>

          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-1 lg:gap-6 items-start lg:max-w-none">
            {faqs.map((faq, index) =>
                    (<FaqCard key={index} question={faq.question} answer={faq.answer} />
                ))}

          </div>

        </div>
      </div>
    </section>
  )
}
