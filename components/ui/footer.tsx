import React from 'react'
import Link from 'next/link'
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-8 lg:col-span-7">
              <div className="mb-2 flex items-center gap-4">
                {/* Logo */}
                <Link href="/" className="inline-block" aria-label="Cruip">
                  <Image src={'/images/logo.svg'} alt="logo" height={50} width={50} />
                </Link>

                <a href="https://vk.com/ippo_science" className="inline-block" aria-label="Cruip">
                    <Image src={'/images/sience_crew_dark.png'} alt="logo" height={50} width={50} />
                </a>

              </div>
              <div className="text-gray-400">
                Инди Геймджем - это мероприятие, нацеленное на развитие индустрии разработки компьютерных игр в России.
                <br/>
                Следите за новостями в нашем <a href="https://vk.com/indiegamejam"
                   className="text-purple-600 hover:text-purple-400 transition duration-150 ease-in-out">сообществе в ВКонтакте</a>.
                <br/>
                По всем вопросам пишите на почту <a href="mailto:ippo_science@mirea.ru"
                                                    className="text-purple-600 hover:text-purple-400 transition duration-150 ease-in-out"
              >ippo_science@mirea.ru</a>

              </div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="flex gap-8 md:col-span-4 lg:col-span-5">

              {/* 2nd block */}

                {/* 4th block */}
                <div className="text-sm">
                  <h6 className="text-gray-200 font-medium mb-1">Участие</h6>
                  <ul>
                    <li className="mb-1">
                      <a href="https://forms.yandex.ru/u/660a71c3068ff00533a98b35/"
                         className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                        Зарегистрироваться</a>
                    </li>
                    <li className="mb-1">
                      <a href="http://rusitch.ru/jams/indi-geymdzhem-2024/"
                         className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                        Отправить проект</a>
                    </li>
                    <li className="mb-1">
                      <a href="https://cloud.mirea.ru/index.php/s/txxPrPyqqBmDJT8"
                         className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                        Положение о проведении</a>
                    </li>
                    <li className="mb-1">
                      <a href="#faq"
                         className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">
                        Часто задаваемые вопросы</a>
                    </li>
                  </ul>
                </div>
            </div>
          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li className="ml-4">
                <Link href="https://vk.com/indiegamejam"
                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="VK">
                  <svg className="w-8 h-8 fill-current" viewBox="-1 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.575 15.75c-0.5 -0.2 -0.5 -0.9 -0.525 -1.4 -0.125 -1.775 0.5 -4.5 -0.25 -5.65C15.275 8 12.7 8.075 11.15 8.175 10.7 8.25 10.175 8.325 9.8 8.525s-0.75 0.5 -0.75 0.775c0 0.4 0.95 0.35 1.275 0.875 0.375 0.575 0.375 1.775 0.375 2.775 0 1.15 -0.2 2.7 -0.65 2.75 -0.725 0.025 -1.125 -0.7 -1.5 -1.225A25 25 0 0 1 6.475 10.9C6.2 10.25 6.025 9.525 5.625 9.25 5 8.8 3.875 8.775 2.775 8.8 1.775 8.825 0.325 8.7 0.05 9.3c-0.225 0.65 0.25 1.275 0.5 1.825 1.275 2.775 2.65 5.225 4.35 7.525 1.575 2.15 3.025 3.875 5.9 4.775 0.825 0.25 4.375 0.975 5.1 0 0.25 -0.375 0.2 -1.225 0.325 -1.85s0.275 -1.25 0.875 -1.275c0.5 -0.025 0.775 0.4 1.1 0.725l0.875 0.95c0.6 0.6 1.225 1.4 1.975 1.725 1.025 0.45 2.625 0.325 4.125 0.25 1.225 -0.025 2.1 -0.275 2.2 -1 0.075 -0.575 -0.575 -1.375 -0.95 -1.85 -0.95 -1.15 -1.375 -1.5 -2.45 -2.575 -0.475 -0.475 -1.075 -0.975 -1.075 -1.525 -0.025 -0.35 0.25 -0.65 0.5 -1 1.1 -1.625 2.2 -2.775 3.2 -4.475 0.275 -0.5 0.95 -1.65 0.7 -2.225 -0.275 -0.625 -1.85 -0.45 -2.825 -0.45 -1.25 0 -2.875 -0.1 -3.2 0.15 -0.6 0.4 -0.85 1.075 -1.125 1.7a17.5 17.5 0 0 1 -2.35 4c-0.325 0.375 -0.9 1.15 -1.25 1.025z"/>
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="https://t.me/indiegamejam"
                      className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out"
                      aria-label="Telegram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 -3 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M23.299 4.111s2.185 -0.852 2.002 1.217c-0.06 0.852 -0.606 3.835 -1.032 7.061l-1.457 9.557s-0.121 1.4 -1.214 1.644c-1.092 0.243 -2.732 -0.852 -3.035 -1.096 -0.243 -0.183 -4.553 -2.922 -6.071 -4.261 -0.425 -0.366 -0.911 -1.096 0.061 -1.948L18.928 10.198c0.728 -0.731 1.457 -2.436 -1.578 -0.366l-8.499 5.782s-0.971 0.609 -2.792 0.061l-3.946 -1.218s-1.457 -0.913 1.032 -1.826c6.071 -2.861 13.538 -5.782 20.155 -8.522"/>
                  </svg>
                </Link>
              </li>
            </ul>
            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; Все права защищены. 2024</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
