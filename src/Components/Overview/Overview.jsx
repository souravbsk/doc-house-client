import React from "react";

const Overview = ({ overViewData }) => {
  console.log(overViewData);
  return (
    <div>
      <div>
        <h2 className="text-2xl mb-2 font-bold ">About Me</h2>
        <p>{overViewData?.about}</p>
      </div>
      <div className="mt-3 flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl mb-4 font-semibold ">Education</h3>
            <ul className="space-y-4 list-disc px-7 ">
              {overViewData?.education.map((edu) => {
                return (
                  <li>
                    <div>
                      <p className="mb-1 font-bold ">{edu?.universityName}</p>

                      <p className="mb-1">{edu?.degree}</p>

                      <p className="mb-1">{edu?.studyYear}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4 font-semibold ">Work & Experience</h3>
            <ul className="space-y-4 list-disc px-7 ">
              {overViewData?.workExperience.map((item) => {
                return (
                  <li>
                    <div>
                      <p className="mb-1 font-bold ">{item?.clinicName}</p>

                      <p className="mb-1">{item?.year}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h3 className="text-xl mb-4 font-semibold ">Services</h3>
            <ul className="space-y-2 list-disc px-7 ">
              {overViewData?.services.map((item) => {
                return <li>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="space-y-4">

        <div>
            <h3 className="text-xl mb-4 font-semibold ">Awards</h3>
            <ul className="space-y-2 list-disc px-7 ">
              {overViewData?.awards.map((item) => {
                return <li>
                    <p className="mb-5">{item?.date}</p>
                    <h4 className="text-lg font-semibold">{item?.awardName}</h4>
                    <p>{item?.awardDescription}</p>
                </li>;
              })}
            </ul>
          </div>
        <div>
            <h3 className="text-xl mb-4 font-semibold ">Specializations</h3>
            <ul className="space-y-2 list-disc px-7 ">
              {overViewData?.specializations.map((item) => {
                return <li>
                
                   {item}
                </li>;
              })}
            </ul>
          </div>








        </div>
      </div>
    </div>
  );
};

export default Overview;
