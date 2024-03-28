import Image, {StaticImageData} from "next/image";
interface PeopleCardProps {
    // position: string,
    money: string,
    img: StaticImageData
}

export default function PrizeCard({ money, img }: PeopleCardProps) {

    return (
        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col items-center">
                <div className="relative inline-flex flex-col mb-4 items-center text-align-center">
                    <Image src={img} width={158} height={158}
                           alt="Testimonial 02"/>
                </div>

            </div>

            <div className="text-purple-600 hover:text-gray-200
             transition duration-150 ease-in-out  font-medium mt-6 pt-5 border-t border-gray-700">
                {money}₽
            </div>
        </div>
    )
}