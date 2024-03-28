"use client"
import React from "react";
import Ticket from "./Ticket";
import Wrapper from "./Wrapper";


const TicketSection = () => {  
  return (
    <Wrapper>
      <div className="flex flex-col bg-gradient-to-b from-[#F9F8FF] dark:from-[#18282A] to-[#F3F9FF] dark:to-[#221A2C] py-6">
        <div className="justify-center text-center align-middle m-5">
          <h1 className="font-semibold text-[36px] md:text-[50px] text-[#000000] dark:text-[#ffffff] font-poppins">
            Collection Spotlight
          </h1>
          <p className="font-normal text-[12px] md:text-[14px] text-[#000000] dark:text-[#ffffff]">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>
        <div className="flex flex-row justify-between align-middle items-center gap-2 md:gap-0 mx-2 md:m-10">
          <div className="cursor-pointer">
            <img src="images/left.png" alt="ILeft" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-[80%] align-middle justify-center">
          <Ticket image="images/Ticket.png" title={"Las Vegas Aviators"} alt={undefined} />
          <Ticket image="images/Ticket.png" title={"Las Vegas Aviators"} alt={undefined} />
          <Ticket image="images/Ticket.png" title={"Las Vegas Aviators"} alt={undefined} />
          </div>
          <div className="cursor-pointer">
            <img src="images/right.png" alt="IRight" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TicketSection;
