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
      <div className="container flex items-center gap-6 justify-between">
        <div className="shrink-0">
          <img
            className="max-w-full object-fill w-full h-[1053px]"
            src={serviceLeftImg}
            alt=""
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold">Our Services</h2>
          <p className="pr-24">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inve ntore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
          <div>
            <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
              <TabList className="border-2 mb-12 py-3 px-3 rounded-lg">
                <Tab>Cavity Protection</Tab>
                <Tab>Cosmetic Dentisty</Tab>
                <Tab>Oral Surgery</Tab>
              </TabList>
              <TabPanel>
                <img
                  className="max-w-full w-full h-[350px] rounded-xl "
                  src={cavityImg}
                  alt=""
                />
              </TabPanel>
              <TabPanel>
                <img
                  className="max-w-full w-full h-[350px] rounded-xl  "
                  src={Cosmetic}
                  alt=""
                />
              </TabPanel>
              <TabPanel>
                <img
                  className="max-w-full w-full h-[350px] rounded-xl  "
                  src={surgary}
                  alt=""
                />
              </TabPanel>
            </Tabs>
          </div>
          <h2 className="text-4xl font-semibold">Electro Gastrology Therapy</h2>
          <p className="pr-24">
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
          <button className="btn btn-outline border-[#F7A582] text-[#F7A582]">More Details</button>
        </div>
      </div>
    </section>
  );
};

export default OurService;
