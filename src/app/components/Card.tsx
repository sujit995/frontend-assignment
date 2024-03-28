import React from 'react';

interface CardProps {
  image: string;
  title: string;
  alt: any;
  events: string;
  match: string;
}

// Define Card component
const Card: React.FC<CardProps> = ({image, title, alt, events, match}) => {
  return (
    <div className="w-full box-border">
      <div className="bg-white dark:bg-gray-800 m-4 p-2 justify-center align-middle">
        <div>
            <img src={image} alt={alt} className='h-full w-full' />
        </div>
        <h3 className='font-medium text-[17px] text-[#000000] dark:text-[#ffffff] py-4'>{title}</h3>
        <div className='flex flex-row justify-between align-middle dark:bg-[#292B32] bg-[#f7f7f8] box-border p-2'>
            <div className='flex flex-col'>
                <h4 className='font-medium text-[12px] text-[#525965] dark:text-[#DFDFDF]'>Total Events</h4>
                <p className='font-medium text-[14px] text-[#000000] dark:text-[#ffffff]'>{events}</p>
            </div>
            <div className='flex flex-col'>
                <h4 className='font-medium text-[12px] text-[#525965] dark:text-[#DFDFDF]'>Sports</h4>
                <p className='font-medium text-[14px] text-[#000000] dark:text-[#ffffff]'>{match}</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
