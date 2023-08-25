import { Rating } from "@smastrom/react-rating";
import React from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import "@smastrom/react-rating/style.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Overview from "../../Components/Overview/Overview";
import { FaHome, FaStar } from "react-icons/fa";
import BusinessHours from "../../Components/BusinessHours/BusinessHours";
const DocViewProfile = () => {
  const doctor = useLoaderData();
  const {
    picture,
    doctorName,
    title,
    rating,
    reviewCount,
    tag,
    address,
    overView,
    businessHours,
  } = doctor;
  console.log(overView);
  return (
    <div>
      <div className="bg-[#07332F] pt">
        <div className="viewDocBg text-white pt-40 md:pt-56 pb-12 md:pb-36 md:mx-20">
          <div className="md:px-20 md:text-left text-center">
            <p className="text-sm font-light mb-3">Home/Doctor Profile</p>
            <h3 className="text-2xl md:text-5xl font-bold">Doctor Profile</h3>
          </div>
        </div>
      </div>
      <div className="container mt-8 md:mt-32">
        <div className="card gap-8 border p-5 md:p-9 lg:card-side bg-base-100 shadow-xl">
          <img className="md:w-80 object-fill h-80 " src={picture} alt="Album" />

          <div className="card-body p-0">
            <h2 className="card-title text-2xl md:text-3xl font-semibold">{doctorName}</h2>
            <div className="space-y-2">
              <p>{title}</p>
              <div className="flex items-center gap-2">
                <Rating readOnly style={{ maxWidth: 100 }} value={rating} />{" "}
                <span>({reviewCount})</span>
              </div>
              <p className="flex items-center gap-2 ">
                <FiMapPin></FiMapPin> <span>{address}</span>
              </p>
            </div>
            <div className="card-actions mt-auto">
              {tag?.map((item) => (
                <button className="border-2 border-gray-800 rounded-md font-semibold text-gray-600 capitalize px-8 py-2 ">
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-14 p-3 md:p-9 rounded-lg shadow-md border">
          <div>
            <Tabs defaultIndex={0} onSelect={(index) => console.log(index)}>
              <TabList
                className="border-2 flex-wrap text-center flex items-center
               mb-12 md:py-3 justify-center md:px-3 rounded-lg"
              >
                <Tab className="px-8 md:px-24 py-4">Overview</Tab>
                <Tab className="px-8 md:px-24 py-4">Location</Tab>
                <Tab className="px-8 md:px-24 py-4">Reviews</Tab>
                <Tab className="px-8 md:px-24 py-4">Business Hours</Tab>
              </TabList>
              <TabPanel>
                <Overview overViewData={overView}></Overview>
              </TabPanel>
              <TabPanel>
                <div className="text-2xl md:text-4xl font-semibold">
                  <FaHome></FaHome> <p>{address}</p>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="text-4xl font-semibold">
                  <div className="flex items-center gap-2">
                    Rating:{" "}
                    <Rating readOnly style={{ maxWidth: 100 }} value={rating} />{" "}
                    <span>({reviewCount})</span>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <BusinessHours businessHours={businessHours}></BusinessHours>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
      <ScrollRestoration></ScrollRestoration>
    </div>
  );
};

export default DocViewProfile;
