import React from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useFatch from "../../../Hooks/useFatch";
import DocCard from "./DocCard";

const ExpertDoctor = () => {
  const [doctors] = useFatch();

  const sectionTitle = {
    title: "Our Expert Doctors",
    pera: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
  };
  return (
    <div className="st">
      <div className="container">
        <SectionTitle sectionTitle={sectionTitle}></SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {doctors.map((doc) => (
            <DocCard doc={doc} key={doc.id}></DocCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertDoctor;
