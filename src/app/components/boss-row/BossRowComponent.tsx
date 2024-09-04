import React from 'react';
import ButtonComponent from '../button/ButtonComponent';
import Image from 'next/image';

const BossRowComponent = (
    {
        name,
        easy,
        normal,
        hard,
        chaos,
        extreme,
        image,
        mesos,
        setMesos,
        isList
    }:
        {
            name: string,
            easy?: number | null,
            normal?: number | null,
            hard?: number | null,
            chaos?: number | null,
            extreme?: number | null,
            image: string,
            mesos: number,
            setMesos: (input:number) => void,
            isList: boolean
        }
) => {
    return (
        <div className={`grid ${isList ? 'grid-cols-12' : ''} max-sm:border-[#555252] max-sm:border-t-2 py-3`}>
            <div className='col-span-5 sm:col-span-4 lg:col-span-3 my-auto'>
                <div className='max-sm:grid sm:flex max-sm:justify-center'>
                    <Image className='h-[45px] w-[45px] sm:me-[20px] rounded-[5px] max-sm:mx-auto'
                        src={`/assets/images/${image}`}
                        alt='Maplestory Boss Icon'
                        height={0}
                        width={0}
                        unoptimized
                        priority />
                    <div className='my-auto truncate font-bold text-white text-[20px] max-sm:mt-3'>{name}</div>
                </div>
            </div>
            <div className={`max-sm:grid max-sm:justify-center col-span-7 sm:col-span-8 lg:col-span-9 ${isList ? 'sm:inline-block' : 'grid'} my-auto`}>
                {
                    easy &&
                    <ButtonComponent
                        text={'EASY'}
                        difficulty={'easy'}
                        mesos={mesos}
                        setMesos={setMesos}
                        bossCrystal={easy} />
                }
                {
                    normal &&
                    <ButtonComponent
                        text={'NORMAL'}
                        difficulty={'normal'}
                        mesos={mesos}
                        setMesos={setMesos}
                        bossCrystal={normal} />
                }
                {
                    hard &&
                    <ButtonComponent
                        text={'HARD'}
                        difficulty={'hard'}
                        mesos={mesos}
                        setMesos={setMesos}
                        bossCrystal={hard} />
                }
                {
                    chaos &&
                    <ButtonComponent
                        text={'CHAOS'}
                        difficulty={'chaos'}
                        mesos={mesos}
                        setMesos={setMesos}
                        bossCrystal={chaos} />
                }
                {
                    extreme &&
                    <ButtonComponent
                        text={'EXTREME'}
                        difficulty={'extreme'}
                        mesos={mesos}
                        setMesos={setMesos}
                        bossCrystal={extreme} />
                }
            </div>
        </div>
    )
}

export default BossRowComponent
