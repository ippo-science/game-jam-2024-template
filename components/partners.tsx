
import PartnerCard from "@/components/partner-card";
const partners = [
  {
    name: "Indie Go",
    description: "Сообщество независимых разработчиков игр",
    inf: "Наши друзья и технологические партнеры",
    link: "https://indie-go.ru/",
    img: "/images/logo-indie-go.png"
  },
  {
    name: "GMNG",
    description: "Производитель игровой переферии",
    inf: "Обеспечивают топовой переферией победителей",
    link: "https://gmng.ru/",
    img: "/images/logo-gmng.png"
  },
  {
    name: "МИРЭА",
    description: "Российский технологический университет",
    inf: "Кафедра Игровой индустрии РТУ МИРЭА",
    link: "https://www.mirea.ru/",
    img: "/images/logo-mirea.png"
  }
]

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
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-16 items-start md:max-w-2xl lg:max-w-none" >
            {
              partners.map((partner, index) => (
                  <PartnerCard img={partner.img} inf={partner.inf} description={partner.description} name={partner.name} link={partner.link} key={index}/>
                ))
            }
          </div>

        </div>
      </div>
    </section>
  )
}
