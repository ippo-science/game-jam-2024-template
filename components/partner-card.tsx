import Image from "next/image";

interface PartnerCardProps{
    img: string,
    name: string,
    description: string,
    link: string
}

export default function PartnerCard({img, name, description, link}: PartnerCardProps) {
    return(
    <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
        <div>
            <div className="flex flex-col items-center">
                <div className="relative inline-flex flex-col mb-4 items-center text-align-center">
                    <Image src={img} width={128} height={128}
                           alt="Testimonial 02"/>
                </div>

            </div>

        </div>
        <blockquote className="text-lg text-gray-400 grow">{description}
        </blockquote>
        <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
            <cite className="text-gray-200 not-italic">{name}</cite> - <a
            className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href={link}>Подробнее</a>
        </div>
    </div>)

}