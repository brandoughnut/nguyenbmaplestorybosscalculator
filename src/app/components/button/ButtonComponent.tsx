'use client';

import Image from 'next/image';
import React, { ReactNode, useState } from 'react';

const ButtonComponent = (
    {
        text,
        difficulty,
        mesos,
        setMesos,
        bossCrystal
    }: {
        text: string | ReactNode,
        difficulty: 'easy' | 'normal' | 'hard' | 'chaos' | 'extreme',
        mesos: number,
        setMesos: (input:number) => void,
        bossCrystal: number
    }) => {

    const [isTrue, setIsTrue] = useState<boolean>(false);

    const classes = {
        easy: 'bg-[#B2B2B2] border-[#D5D4D4]',
        normal: 'bg-[#36AAEB] border-[#70C8FA]',
        hard: 'bg-[#E61378] border-[#BD025C]',
        chaos: 'bg-[#44363C] border-[#EFC736]',
        extreme: 'bg-[#44363C] border-[#B21515]',
        default: 'rounded-[15px] border-[3px] w-[144px] h-[42px] text-[20px] text-white font-bold'
    }

    const difficultyClasses = {
        easy: classes.easy,
        normal: classes.normal,
        hard: classes.hard,
        chaos: classes.chaos,
        extreme: classes.extreme
    }

    return (
        <div className='relative inline-block h-[60px] sm:me-[10px] lg:me-[20px] xl:me-[30px]'>
            {
                isTrue &&
                <Image src='/assets/icons/Vector.png'
                    className='h-[60px] w-[77px] absolute inset-0 z-10 mx-auto cursor-pointer'
                    onClick={() => {
                        setIsTrue(false);
                        setMesos(mesos - bossCrystal)
                    }}
                    height={0}
                    width={0}
                    priority
                    unoptimized
                    alt='Green check icon' />
            }
            <button
                onClick={() => {
                    setIsTrue(true);
                    setMesos(mesos + bossCrystal);
                }}
                className={`${classes.default} ${difficultyClasses[difficulty]} mt-2`}>
                {text}
            </button>
            {
                isTrue &&
                <div
                    onClick={() => {
                        setIsTrue(false);
                        setMesos(mesos - bossCrystal)
                    }}
                    className='bg-black bg-opacity-70 rounded-[15px] absolute inset-0 h-[42px] top-2 cursor-pointer'></div>
            }
        </div>
    )
}

export default ButtonComponent
