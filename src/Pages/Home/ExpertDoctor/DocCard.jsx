import React from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { FiMapPin } from "react-icons/fi";
import { BsCalendar4 } from "react-icons/bs";
import {AiOutlineDollarCircle} from "react-icons/ai"
import moment from "moment/moment";
import { Link } from "react-router-dom";
const DocCard = ({ doc }) => {
  console.log(doc);
  const {
    address,
    availableData,
    doctorName,
    _id,
    picture,
    price,
    rating,
    title,
  } = doc;

  return (
    <div className="card border  bg-base-100 ">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <div className="mb-5">
        <h2 className="card-title">{doctorName}</h2>
        <p className="text-sm mb-3">BTP - {title}</p>
         <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
        </div>
        <div className="text-gray-500 space-y-2">
            <p className="flex gap-4 items-center text-sm"><FiMapPin className="text-base"></FiMapPin> <span>{address}</span></p>
            <p className="flex gap-4 items-center text-sm"><BsCalendar4 className="text-base"></BsCalendar4> <span>Available On {moment(availableData).format("dddd, D MMM")}</span></p>
            <p className="flex gap-4 items-center text-sm"><AiOutlineDollarCircle className="text-base"></AiOutlineDollarCircle> <span>$ {price}</span></p>
        </div>
        <div className="card-actions justify-center mt-5">
          <Link className="w-full" to={`/doctorProfile/${_id}`}> <button className="btn btn-block border-2 hover:border-[#F7A582] border-[#F7A582] btn-outline hover:bg-[#F7A582] text-[#F7A582]">View Profile</button></Link>
        </div>
      </div>
    </div>
  );
};

export default DocCard;
