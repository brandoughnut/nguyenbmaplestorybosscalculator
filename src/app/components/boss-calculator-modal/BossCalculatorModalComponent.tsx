'use client';

import { IBoss } from '@/interfaces/interface';
import { getBossData } from '@/utils/data-service';
import React, { useEffect, useState } from 'react';
import BossRowComponent from '../boss-row/BossRowComponent';

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
                <h2 className='max-sm:text-center col-span-5 sm:col-span-4 lg:col-span-3'>Bosses</h2>
                <h2 className='max-sm:text-center col-span-7 sm:col-span-8 lg:col-span-9'>Difficulty</h2>
            </div>
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
                                setMesos={setMesos} />
                        </div>
                    )
                })
            }
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
