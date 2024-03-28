import Card from "./components/Card";
import Switcher from "./components/Switcher";
import Wrapper from "./components/Wrapper";
import TicketSection from "./components/TicketSection";

const carddata = [
  {
    image: "images/demo2.png",
    title: "Las Vegas Aviators",
    alt: "iCard",
    events: "48 Events",
    match: "Baseball"
  },
  {
    image: "images/demo1.png",
    title: "Las Vegas Aviators",
    alt: "iCard",
    events: "28 Events",
    match: "Baseball"
  },
  {
    image: "images/demo3.png",
    title: "Las Vegas Aviators",
    alt: "iCard",
    events: "15 Events",
    match: "Ice Hockey"
  },
  {
    image: "images/demo1.png",
    title: "Las Vegas Aviators",
    alt: "iCard",
    events: "28 Events",
    match: "Baseball"
  },
];

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center transition duration-200 bg-[#f7f7f8] dark:bg-[#292B32] p-10">
      <Wrapper>
        <div className="flex flex-row justify-between px-5">
          <div>
            <h1 className="font-bold text-[24px] text-[#000000] dark:text-[#ffffff] font-poppins">
              Sports
            </h1>
            <div className="w-20 h-0.5 bg-blue-500 mt-1"></div>
          </div>
          <Switcher />
        </div>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {carddata.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              title={item.title}
              alt={item.alt}
              events={item.events}
              match={item.match}
            />
          ))}
          <div className="w-full box-border">
            <div className="bg-white dark:bg-gray-800 m-4 p-2 align-middle justify-center">
              <div className="relative">
                <img src="images/unnamed.png" alt="unnamedimage" className="h-full w-full" />
                <h4 className="absolute bg-black px-4 py-1 top-0 right-0 text-white text-[12.8px] font-inter font-extrabold">Ad</h4>
              </div>
              <h3 className="font-semibold text-[20px] text-[#000000] dark:text-[#ffffff] py-4 text-center">
                Advertisement title
              </h3>
              <p className="text-[#525965] dark:text-[#dfdfdf] font-normal text-[12.8px] px-3 pb-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
      <button className="px-[30px] py-[10px] text-[#ffffff] bg-[#2c9cf0] rounded-[3px] shadow-sm mt-10 mb-10">See More</button>
      <TicketSection />
    </div>
  );
};

export default Home;
