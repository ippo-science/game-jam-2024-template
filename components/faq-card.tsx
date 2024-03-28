'use client'
import React, {useRef} from "react";


interface FaqCardProps {
    answer: string;
    question: string;
}

export default function FaqCard({answer="", question=""}: FaqCardProps) {
    const [open, setOpen] = React.useState<boolean>(false);
    const answerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
            <div className="text-lg text-gray-400 grow flex items-start cursor-pointer"
                 onClick={
                    () => {
                        setOpen(!open);
                    }
                 }
            >

                <svg className="w-6 h-6 mr-2 transition-transform duration-300 ease-in-out"
                     style={open ? {transform: 'rotate(0deg)'} : {transform: 'rotate(-90deg)'}}
                     fill="none" stroke="currentColor" viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                          d="M19 9l-7 7-7-7"/>
                </svg>
                {question}
            </div>
            <div

                ref={answerRef}
                 className={`mt-4 text-gray-400 transition-all duration-300 ease-in-out`}
                 style={open ? {maxHeight: answerRef.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0 }}>
                {answer}
            </div>
        </div>
    )
}