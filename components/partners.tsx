import Image from "next/image";

export default function Partners() {
  return (
    <section id="partners" >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">
              Наши партнеры
              </h2>
            <p className="text-xl text-gray-400">
              Благодаря нашим партнерам мы можем провести этот геймджем.
            </p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

            {/* 1st item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
              <Image src={'/images/logo-indie-go.png'} width={64} height={64} alt="" />
              <h4 className="h4 mb-2">Indie Go</h4>
              {/*<p className="text-lg text-gray-400 text-center">*/}
              {/*  Лидеры индустрии расскажут вам о своем опыте и поделятся советами.*/}
              {/*  Посмотрите стримы прошлых лет в ?нашем сообществе?.*/}
              {/*</p>*/}
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="100"
                 data-aos-anchor="[data-aos-id-blocks]">
              <Image src={'/images/logo-gmng.png'} width={64} height={64} alt="" />
              <h4 className="h4 mb-2">GMNG</h4>
              {/*<p className="text-lg text-gray-400 text-center">*/}
              {/*  На ГеймДжеме вы познакомитесь с единомышленниками и найдете новых друзей.*/}
              {/*  Собирайте команду и создавайте игры вместе.*/}
              {/*</p>*/}
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-delay="200"
                 data-aos-anchor="[data-aos-id-blocks]">
                <Image src={'/images/logo-mirea.png'}  width={64} height={64} alt=""
                style={{height: 'auto', width: '64px'}}
                />
              <h4 className="h4 mb-2">РТУ МИРЭА</h4>
              {/*<p className="text-lg text-gray-400 text-center">*/}
              {/*  72 часа на создание игры. Это время, когда вы забудете о мире вокруг и погрузитесь в GameDEV.*/}
              {/*</p>*/}
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
