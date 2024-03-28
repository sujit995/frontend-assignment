import React from "react";

interface CardProps {
  image: string;
  title: string;
  alt: any;
}

// Define Card component
const Ticket: React.FC<CardProps> = ({ image, title, alt }) => {
  return (
    <div className="w-full md:w-[25%] box-border bg-white dark:bg-[#3B3E47] p-3 relative shadow-md">
       <div>
        <img src={image} alt={alt} />
      </div>
      <div
        className={`border-t-[.5px] border-dashed border-[#666a74] dark:border-[#dfdfdf] mt-5 relative`}
      >
        <div className="absolute top-[-10px] left-[-20px] flex items-center">
          <div className="w-4 h-4 rounded-full dark:bg-[#221A2C] bg-[#F3F9FF] mr-2 shadow-inner offset-x-4 offset-y-0 blur-2 spread-1"></div>
        </div>
        <div className="absolute top-[-10px] right-[-20px] flex items-center">
          <div className="w-4 h-4 rounded-full dark:bg-[#221A2C] bg-[#F3F9FF] ml-2 shadow-inner offset-x-0 offset-y-4 blur-2 spread-1"></div>
        </div>

        <h3 className="text-center font-medium text-[17px] text-[#000000] dark:text-[#ffffff] py-4">
          {title}
        </h3>
        <div className="flex flex-row justify-center align-middle text-center divide-x">
          <p className="px-2 text-[12px] md:text-[14px] font-poppins font-normal text-black dark:text-white">
            OCT 15
          </p>
          <p className="px-2 text-[12px] md:text-[14px] font-poppins font-normal text-black dark:text-white">
            SUN
          </p>
          <p className="pl-2 text-[12px] md:text-[14px] font-poppins font-normal text-black dark:text-white">
            4:30 PM
          </p>
        </div>
        <div className="text-center mt-2">
          <h5 className="text-[14px] font-inter font-normal text-[#525965] dark:text-[#dfdfdf] ">
            Las Vegas Ballpark, Las Vegas, Nevada
          </h5>
        </div>
        <button className="w-full text-[12px] font-semibold text-white bg-[#000] align-middle py-3 mt-2">
          Take Flight Collection
        </button>
      </div>
    </div>
  );
};

export default Ticket;
