import Image from 'next/image'
import Image01 from '@/public/images/testimonial-01.jpg'
import PeopleCard from "@/components/people-card";

import DescriptionCard from "@/components/description-card";

const description_cards = [
  {
    title: "Регистрация",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat",
      "Amet consectetur adipiscing elit"
    ],
    date_start: "15 мая 2024"
  },
  {
    title: "Стрим 'Название стрима'",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat",
      "Amet consectetur adipiscing elit"
    ],
    date_start: "16 мая 2024"
  },
  {
    title: "Открытие",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat",
      "Amet consectetur adipiscing elit"
    ],
    date_start: "17 мая 2024"
  },
  {
    title: "Питч-сессия",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
      "Duis aute irure dolor in reprehenderit",
      "Excepteur sint occaecat",
      "Amet consectetur adipiscing elit"
    ],
    date_start: "18 мая 2024"
  }
    ,
    {
        title: "Закрытие",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        list: [
        "Duis aute irure dolor in reprehenderit",
        "Excepteur sint occaecat",
        "Amet consectetur adipiscing elit"
        ],
        date_start: "21 мая 2024"
    }
]
export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Roadmap</div>
            <h1 className="h2 mb-4">Как пройдет ГеймДжем?</h1>
            <p className="text-xl text-gray-400">Наше путешествие обещает быть насыщенным и интересным.
              Не пропускай возможность прокачать свои навыки и побороться за главный приз.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width={540} height={405} alt="Features 01" />
                </div>
              {/* Content */}
              <DescriptionCard
                  title={description_cards[0].title}
                    description={description_cards[0].description}
                    list={description_cards[0].list}
                    date_start={description_cards[0].date_start}
                />
              </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <PeopleCard
                    image={Image01}
                    name="Александр Шульгин"
                    position="Руководитель проектов"
                    text="Я занимаюсь разработкой игр уже много лет. Я знаю, что нужно для того, чтобы создать игру, которая понравится игрокам."
                />
              </div>
              {/* Content */}
                <DescriptionCard
                    title={description_cards[1].title}
                    description={description_cards[1].description}
                    list={description_cards[1].list}
                    date_start={description_cards[1].date_start}
                    />
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width={540} height={405} alt="Features 03" />
              </div>
              {/* Content */}
                <DescriptionCard
                    title={description_cards[2].title}
                    description={description_cards[2].description}
                    list={description_cards[2].list}
                    date_start={description_cards[2].date_start}
                    />
              </div>

          {/* 4th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width={540} height={405} alt="Features 04" />
                </div>
                {/* Content */}
                <DescriptionCard
                    title={description_cards[3].title}
                    description={description_cards[3].description}
                    list={description_cards[3].list}
                    date_start={description_cards[3].date_start}
                />

            </div>
            {/* 5th item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                {/* Image */}
                <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                    <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image01} width={54} height={40} alt="Features 04" />
                </div>
                {/* Content */}

                <DescriptionCard
                    title={description_cards[4].title}
                    description={description_cards[4].description}
                    list={description_cards[4].list}
                    date_start={description_cards[4].date_start}
                />


          </div>

        </div>
      </div>
    </section>
  )
}
