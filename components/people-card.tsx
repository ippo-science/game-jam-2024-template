import Image, {StaticImageData} from "next/image";
interface PeopleCardProps {
    image: StaticImageData,
    name: string,
    position: string,
    text: string
}

export default function PeopleCard({ image, name, position, text }: PeopleCardProps) {

    return (
        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div>
                <div className="relative inline-flex flex-col mb-4">
                    <Image className="rounded-full" src={image} width={158} height={158}
                           alt="Testimonial 02"/>
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-purple-600"
                         viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z"/>
                    </svg>
                </div>
            </div>
            <blockquote className="text-lg text-gray-400 grow">— {text}
            </blockquote>
            <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">{name}</cite> - <a
                className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out ">{position}</a>
            </div>
        </div>
    )
}