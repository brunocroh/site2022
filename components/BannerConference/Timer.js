import React from 'react'
import useCountdown from './useCountdown';

function Timer({  }) {
  const [day, hour, minute, second] = useCountdown('Aug 28, 2022, 14:00:00')
  return (
    <div className='flex w-full h-24 bg-gradient-to-r from-[#1339c8] to-[#ef6f94]'>
      <div className='flex w-full justify-between mx-24'>
        <div className='flex flex-col justify-center'>
          <span className='text-center text-xl text-white'>{day}</span>
          <span className='text-white'>Dias</span>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-center text-xl text-white'>{hour}</span>
          <span className='text-white'>Horas</span>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-center text-xl text-white'>{minute}</span>
          <span className='text-white'>Minutos</span>
        </div>
        <div className='flex flex-col justify-center'>
          <span className='text-center text-xl text-white'>{second}</span>
          <span className='text-white'>Segundos</span>
        </div>
      </div>
    </div>
  );
}

export default Timer