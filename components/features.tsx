export default function Features() {
  return (
    <section id={"description"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Что вас ждет на этот раз
              </h2>
            <p className="text-xl text-gray-400">
              В прошлом году мы провели наш первый Геймджем. На нем собралось более
              100 участников, которые создали более 20 игр.
              В этом году мы хотим удвоить эти цифры. Присоединяйтесь!
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32" />
                <path className="stroke-current text-purple-100" d="M30 39.313l-4.18 2.197L27 34.628l-5-4.874 6.91-1.004L32 22.49l3.09 6.26L42 29.754l-3 2.924" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd" />
                <path className="stroke-current text-purple-300" d="M43 42h-9M43 37h-9" strokeLinecap="square" strokeWidth="2" />
              </svg>
              <h4 className="h4 mb-2">Супер-стримы</h4>
              <p className="text-lg text-gray-400 text-center">
                Лидеры инди-индустрии расскажут вам о своем опыте и поделятся советами.
                А посмотреть стримы прошлых лет можно в нашем сообществе.

              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(21 22)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-300"
                        d="M17 2V0M19.121 2.879l1.415-1.415M20 5h2M19.121 7.121l1.415 1.415M17 8v2M14.879 7.121l-1.415 1.415M14 5h-2M14.879 2.879l-1.415-1.415"/>
                  <circle className="stroke-current text-purple-300" cx="17" cy="5" r="3"/>
                  <path className="stroke-current text-purple-100"
                        d="M8.86 1.18C3.8 1.988 0 5.6 0 10c0 5 4.9 9 11 9a10.55 10.55 0 003.1-.4L20 21l-.6-5.2a9.125 9.125 0 001.991-2.948"/>
                </g>
              </svg>
              <h4 className="h4 mb-2">Знакомства</h4>
              <p className="text-lg text-gray-400 text-center">
                На Геймджеме вы познакомитесь с единомышленниками и найдете новых друзей.
                Собирайте команду и создавайте игры вместе.
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                 data-aos-anchor="[data-aos-id-blocks]">
              <svg className="w-16 h-16 mb-4" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <rect className="fill-current text-purple-600" width="64" height="64" rx="32"/>
                <g transform="translate(22 21)" strokeLinecap="square" strokeWidth="2" fill="none" fillRule="evenodd">
                  <path className="stroke-current text-purple-100"
                        d="M17 22v-6.3a8.97 8.97 0 003-6.569A9.1 9.1 0 0011.262 0 9 9 0 002 9v1l-2 5 2 1v4a2 2 0 002 2h4a5 5 0 005-5v-5"/>
                  <circle className="stroke-current text-purple-300" cx="13" cy="9" r="3"/>
                </g>
              </svg>
              <h4 className="h4 mb-2">Погружение</h4>
              <p className="text-lg text-gray-400 text-center">
                96 часов на создание игры. Это время, когда вы забудете о мире вокруг и погрузитесь в GameDEV.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
