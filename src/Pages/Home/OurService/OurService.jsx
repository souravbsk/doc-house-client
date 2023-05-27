import React from "react";
import serviceLeftImg from "../../../assets/Home/OurService/left-doc.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import cavityImg from "../../../assets/Home/OurService/cavity.png";
import Cosmetic from "../../../assets/Home/OurService/Cosmetic.png";
import surgary from "../../../assets/Home/OurService/surgary.jpg";
const OurService = () => {
  return (
    <section className="st">
      <div className="container flex flex-col md:flex-row items-center gap-6 justify-between">
        <div className="shrink-0">
          <img
            className="max-w-full object-fill w-full h-[633px] md:h-[1053px]"
            src={serviceLeftImg}
            alt=""
          />
        </div>
        <div className="space-y-3 md:space-y-6">
          <h2 className="text-2xl md:text-4xl md:text-start text-center font-semibold">
            Our Services
          </h2>
          <p className="pr-0 md:pr-24 md:text-start text-sm md:text-base text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
              <TabList className="border-2 text-center mb-12 md:py-3 md:px-3 rounded-lg">
                <Tab>Cavity Protection</Tab>
                <Tab>Cosmetic Dentisty</Tab>
                <Tab>Oral Surgery</Tab>
              </TabList>
              <TabPanel>
                <img
                  className="max-w-full w-full h-52 md:h-[350px] rounded-xl "
                  src={cavityImg}
                  alt=""
                />
              </TabPanel>
              <TabPanel>
                <img
                  className="max-w-full w-full h-52 md:h-[350px] rounded-xl  "
                  src={Cosmetic}
                  alt=""
                />
              </TabPanel>
              <TabPanel>
                <img
                  className="max-w-full w-full h-52 md:h-[350px] rounded-xl  "
                  src={surgary}
                  alt=""
                />
              </TabPanel>
            </Tabs>
          </div>
          <h2 className="text-2xl md:text-4xl md:text-start text-center font-semibold">
            Electro Gastrology Therapy
          </h2>
          <p className="pr-0 md:pr-24 md:text-start text-sm md:text-base text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Sed ut perspiciatis unde omnis iste natus
            error
            <br />
            Sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae ab illo inve ntore veritatis et quasi architecto
            beatae vitae dicta sunt explicabo.
          </p>
          <div className="md:text-start text-center">
            <button className="btn btn-outline border-[#F7A582] text-[#F7A582]">
              More Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurService;
