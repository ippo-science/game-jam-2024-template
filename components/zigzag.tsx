import Image, {StaticImageData} from 'next/image'

import PeopleCard from "@/components/people-card";
import Image01 from '@/public/images/start-line.svg'
import Image02 from '@/public/images/open.svg'
import Image03 from '@/public/images/finish.svg'
import Image04 from '@/public/images/pitch.svg'
import Image05 from '@/public/images/win.svg'

import DescriptionCard from "@/components/description-card";

const description_cards = [
  {
    title: "Регистрация",
      description: "Регистрация на ГеймДжем откроется 6 апреля 2024 года. " +
          "Все желающие могут принять участие в мероприятии. " +
          "Для участия в ГеймДжеме каждому участнику необходимо:",
    // description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    list: [
        "Сформировать команду из 2-6 человек",
        "Пройти регистрацию до 23:00 10 апреля 2024 года",
    ],
    date_start: "с 29 марта 2024 до 10 апреля 2024"
  },
  // {
  //   title: "Стрим 'Название стрима'",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   list: [
  //     "Duis aute irure dolor in reprehenderit",
  //     "Excepteur sint occaecat",
  //     "Amet consectetur adipiscing elit"
  //   ],
  //   date_start: "16 мая 2024"
  // },
  {
    title: "Открытие",
    description: "После завершения регистрации, 10 апреля, " +
        "с 23:00 до 23:59 организаторы опубликуют тему Геймджема. ",
    list: [
        "Публикация кейса",
      "Работа над проектом"
    ],
    date_start: "10 апреля 2024"
  },
  {
    title: "Стоп-кодинг",
    description: "После 96 часового марафона 14 апреля " +
        "до 23:55 участники должны загрузить свой проект на платформу. " +
        "Итоговое решение предполагает: ",
    list: [
      "Итоговый проект, загруженный на платформу Rusitch",
        "Презентацию проекта в формате PDF",
        "Короткое видео до 6 минут с геймплеем проекта"
    ],
    date_start: "14 апреля 2024 до 23:55"
  },
    {
        title: "Финальный питч",
        description: "По итогам этапа оценки проектов, которая пройдет 16 апреля 2024" +
            " в группе в ВК будут опубликованы списки команд, прошедших в финал. " +
            "Финал могут посетить все желающие. " +
            "Командам-финалистам для участия в финале необходимо:",
        list: [
            "Подготовить презентацию проекта",
            "Явиться на финал в 12:00 17 апреля в коворкинг РТУ МИРЭА",
            "В случае отсутсвия возможности очного участия в финале подключиться к онлайн-трансляции",
        ],
        date_start: "12:00 17 апреля 2024"
    },
    {
        title: "Подведение итогов",
        list: [],
        description: "По итогам финала жюри определит победителей Геймджема. ",
        date_start: "до 15:00 17 апреля 2024"
    }
]
export default function Zigzag() {
  return (
    <section id={"roadmap"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Roadmap</div>
            <h1 className="h2 mb-4">Как пройдет Геймджем?</h1>
            <p className="text-xl text-gray-400">Наше путешествие обещает быть насыщенным и интересным.
              Не пропускай возможность прокачать свои навыки и побороться за главный приз.</p>
          </div>

          {/* Items */}
            <div className="grid gap-20">

                {/* 1st item */}
                <div className="flex gap-6 items-center  flex-col md:flex-row">
                    {/* Image */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto mb-8 md:mb-0 "
                        data-aos="fade-up">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image01 as StaticImageData} width={340}
                               height={405} alt="Features 01"/>
                    </div>
                    {/* Content */}
                    <DescriptionCard
                        title={description_cards[0].title}
                        description={description_cards[0].description}
                        list={description_cards[0].list}
                        date_start={description_cards[0].date_start}
                        withButt={true}

                    />
                </div>

                <div className="flex md:flex-row-reverse gap-6 items-center  flex-col">
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 mb-8 md:mb-0 "
                        data-aos="fade-up">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image02 as StaticImageData} width={340}
                               height={405} alt="Features 04"/>
                    </div>
                    <DescriptionCard

                        title={description_cards[1].title}
                        description={description_cards[1].description}
                        list={description_cards[1].list}
                        date_start={description_cards[1].date_start}

                    />

                    {/* Image */}

                    {/* Content */}

                </div>

                {/* 4th item */}

                <div className="flex gap-6 items-center md:flex-row  flex-col">
                    {/* Image */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 "
                        data-aos="fade-up">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image03 as StaticImageData} width={340}
                               height={405} alt=""/>
                    </div>
                    {/* Content */}
                    <DescriptionCard
                        title={description_cards[2].title}
                        description={description_cards[2].description}
                        list={description_cards[2].list}
                        date_start={description_cards[2].date_start}

                    />
                </div>

                {/* 5th item */}
                <div className="flex md:flex-row-reverse gap-6 items-center flex-col">

                    {/* Image */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 "
                        data-aos="fade-up">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image04 as StaticImageData} width={340}
                               height={405} alt="Features 04"/>
                    </div>
                    <DescriptionCard
                        title={description_cards[3].title}
                        description={description_cards[3].description}
                        list={description_cards[3].list}
                        date_start={description_cards[3].date_start}

                    />
                    {/* Content */}


                </div>

                <div className="flex gap-6 items-center md:flex-row  flex-col">
                    {/* Image */}
                    <div
                        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0"
                        data-aos="fade-up">
                        <Image className="max-w-full mx-auto md:max-w-none h-auto" src={Image05 as StaticImageData} width={340}
                               height={405} alt="Features 01"/>
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
      </div>
    </section>
  )
}
