'use client';

import { IBoss } from '@/interfaces/interface';
import { getBossData } from '@/utils/data-service';
import React, { useEffect, useState } from 'react';
import BossRowComponent from '../boss-row/BossRowComponent';
import Image from 'next/image';

const BossCalculatorModalComponent = (
    {
        setOpenModal,
        totalMesos,
        setTotalMesos
    }
        :
        {
            setOpenModal: (input: boolean) => void,
            totalMesos: number,
            setTotalMesos: (input: number) => void
        }
) => {

    const [bossData, setBossData] = useState<IBoss[]>();

    const [mesos, setMesos] = useState<number>(0);

    const [isList, setIsList] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            const res = await getBossData();
            setBossData(res);
        }
        getData();
    }, [])

    return (
        <div className='bg-[#333333] rounded-[15px] h-full w-full mx-2 md:mx-12 xl:mx-20 pb-2 pt-5 px-5 sm:px-[20px] xl:px-[50px]'>
            <div className='grid grid-cols-12 font-bold text-[25px] text-white mb-6'>
                <h2 className={`max-sm:text-center col-span-5 sm:col-span-4 lg:col-span-3 ${!isList && 'invisible'}`}>Bosses</h2>
                <h2 className={`max-sm:text-center col-span-6 sm:col-span-7 lg:col-span-8 ${!isList && 'invisible'}`}>Difficulty</h2>
                <h2 className='max-sm:text-center col-span-1 sm:col-span-1 lg:col-span-1'>
                    <div className='grid lg:grid-cols-2 my-auto'>
                        <div>
                            <Image className='h-[37px] w-[37px] cursor-pointer'
                                onClick={() => {
                                    setIsList(false);
                                }}
                                src='/assets/icons/galleryicon.png'
                                alt=''
                                height={0}
                                width={0}
                                unoptimized />
                        </div>
                        <div>
                            <Image className='h-[37px] w-[37px] cursor-pointer'
                                onClick={() => {
                                    setIsList(true);
                                }}
                                src='/assets/icons/listicon.png'
                                alt=''
                                height={0}
                                width={0}
                                unoptimized />
                        </div>
                    </div>
                </h2>
            </div>
            <div className={`${!isList && 'grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                {
                    bossData && bossData.map((e: any, idx: number) => {
                        return (
                            <div key={idx}>
                                <BossRowComponent
                                    name={e.name}
                                    easy={e.difficulty.easy}
                                    normal={e.difficulty.normal}
                                    hard={e.difficulty.hard}
                                    chaos={e.difficulty.chaos}
                                    extreme={e.difficulty.extreme}
                                    image={e.image}
                                    mesos={mesos}
                                    setMesos={setMesos}
                                    isList={isList} />
                            </div>
                        )
                    })
                }

            </div>
            <div className='mt-2 max-sm:grid sm:flex sm:justify-between text-[25px] text-white mb-6'>
                <div className='my-auto'>
                    <strong>{mesos.toLocaleString()}</strong> Mesos
                </div>
                <div className='font-medium'>
                    <button className='max-sm:mt-3.5 bg-red-400 hover:bg-red-300 px-5 py-1 rounded-[15px] border-[2px] border-red-500 me-2'
                        onClick={() => {
                            setOpenModal(false);
                        }}>
                        Cancel
                    </button>
                    <button className='max-sm:mt-3.5 bg-green-400 hover:bg-green-300 px-5 py-1 rounded-[15px] border-[2px] border-green-500'
                        onClick={() => {
                            setTotalMesos(totalMesos + mesos)
                            setOpenModal(false);
                        }}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BossCalculatorModalComponent
