import Image, {StaticImageData} from "next/image";
interface PeopleCardProps {
    // position: string,
    money: string,
    img: StaticImageData
}

export default function PrizeCard({ money, img }: PeopleCardProps) {

    return (
        <div className="relative flex flex-col items-center" data-aos="fade-up" data-aos-anchor="[data-aos-id-blocks]">
            <Image src={img} width={150} height={150} alt="" />
            <h4 className="h4 mb-2 transition duration-150 ease-in-out py-3
            ">{money}</h4>
        </div>
        //
    )
}