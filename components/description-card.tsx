interface DescriptionCardProps {
    title: string;
    description: string;
    list: string[];
    date_start: string;
    withButt?: boolean;

}

export default function DescriptionCard({ title, description, list, date_start, withButt=false }: DescriptionCardProps) {
    return (
        <div className={`max-w-xl md:max-w-none md:w-full mx-auto `} data-aos="fade-right">
            <div className="md:pr-4 lg:pr-12 xl:pr-16 flex flex-col">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">{date_start}</div>
                <h3 className="h3 mb-3">{title}</h3>
                <p className="text-xl text-gray-400 mb-4">{description}</p>
                <ul className="text-lg text-gray-400 -mb-2">
                    {list.map((item, index) => (
                        <li key={index} className="flex items-center mb-2 ">
                            <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                            </svg>
                            <span>{item}</span>
                        </li>
                    ))}

                </ul>{
                /*todo login*/}
                {withButt ?
                    <a href="http://rusitch.ru/jams/indi-geymdzhem-2024" className="btn-sm text-black bg-cyan-500 hover:bg-cyan-600 ml-3 items-center mt-4 max-w-max">
                        Регистрация
                    </a> : null}
            </div>
        </div>


)
}