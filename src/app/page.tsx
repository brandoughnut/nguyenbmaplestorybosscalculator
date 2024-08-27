'use client';

import { useState } from "react";
import BossCalculatorModalComponent from "./components/boss-calculator-modal/BossCalculatorModalComponent";
import Image from "next/image";

export default function Home() {

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [totalMesos, setTotalMesos] = useState<number>(0);

  return (
    <main className={`background min-h-screen overflow-hidden ${openModal && 'flex items-center justify-center py-3'}`}>
      {
        openModal &&
        <BossCalculatorModalComponent
          setOpenModal={setOpenModal}
          totalMesos={totalMesos}
          setTotalMesos={setTotalMesos} />
      }
      {
        !openModal &&
        <div className='lg:grid max-lg:px-2 max-lg:pt-2 h-full'>
          <div>
            <div className='lg:grid lg:grid-cols-3'>
              <div className='max-lg:hidden lg:col-span-1 ps-14 pt-12 font-bold text-white text-[30px]'>
                <h1>Maplestory</h1>
                <h1>Boss Tracker</h1>
              </div>
              <div className='flex justify-between lg:mt-12 lg:col-span-2 xl:me-12 rounded-xl bg-white w-auto h-[60px] px-4'>
                <div className='my-auto text-[20px] font-medium flex'>
                  <div className="border-2 border-[#7B14FF] me-3"></div>
                  <p>Total Income</p>
                </div>
                <p className='my-auto break-words ms-8 truncate'><strong className='font-bold'>{totalMesos.toLocaleString()}</strong> Mesos</p>
              </div>
            </div>
            <div className='grid lg:grid-cols-3 h-full'>
              <div className='w-full max-lg:mt-auto lg:col-span-1 max-lg:order-2 items-center flex justify-center'>
                <div className='max-lg:mt-2 bg-white w-full lg:w-[350px] h-[auto] lg:h-[500px] max-lg:rounded-xl lg:rounded-t-[40px] max-lg: p-4'>
                  <div className='font-medium text-[20px]'>
                    <p className='text-center font-extrabold lg:mt-10 leading-none'>Add Boss Entry</p>
                    <div className='plus-sign mx-auto cursor-pointer my-4 lg:my-10'
                      onClick={() => {
                        setOpenModal(true);
                      }}></div>
                    <div className='flex justify-center mx-4'>
                      <button className='mx-auto font-extralight bg-gradient-to-r from-[#7B14FF] to-[#C25EFF] text-white w-full py-2 rounded-xl'
                        onClick={() => {
                          setTotalMesos(0);
                        }}>
                        Clear
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='lg:col-span-2 max-lg:order-1'>
                <div>

                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </main>
  );
}
