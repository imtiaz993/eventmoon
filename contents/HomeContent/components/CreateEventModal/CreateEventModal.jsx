import React, { useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { BASE_URL } from "utils/constants";
import moment from "moment/moment";
import classNames from "classnames/bind";
import styles from "./CreateEventModal.module.scss";
import { useState } from "react";


const cx = classNames.bind(styles);

const CreateEventModal = ({
  isCreateModal,
  setIsCreateModal,
  setEventAddedModal,
}) => {
  const router = useRouter();
  const [name,setName]=useState();
  const [location,setLocation]=useState();
  const [startDate,setStartDate]=useState();
  const [endDate,setEndDate]=useState();
  const [startTime,setStartTime]=useState();
  const [endTime,setEndTime]=useState();
  const [description,setDescription]=useState();




  const handleCreate = async () => {
    const bodyData = {
      eventName: name,
      location: location,
      startDate: startDate,
      eventDescription: description,
      // categoryName: "string",
      // filepath: "string",
      // latitude: "string",
      // longitude: "string",
      startTime:startTime,
      // isTmaster: true,
      // Url: "string",
    };

   
    try {
      const { data } = await axios({
        method: "POST",
        url: `${BASE_URL}/EventCreate`,
        data: bodyData,
      });
     if(data){
      setIsCreateModal(false);
      setEventAddedModal(true);
     }
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={cx("modal-container")}>
      <div className={cx("modal-wrapper")}>
        <div className={cx("moon")}>
         
          <Image
            src="/assets/images/creat-event-moon.png" 
            width="106px"
            height="106px"
            alt="moon"
          />
        </div>
        <div
          className={cx("close")}
          onClick={() => {
            setIsCreateModal(false);
          }}
        >
          X
        </div>
        <h4 className={cx("heading")}>Your all new Event community !</h4>
        <p className={cx("subtext")}>
          Post and share and Help others find local event fun{" "}
        </p>
        <div className={cx("pick-image")}>
          <div>
           
            <Image
            src="/assets/images/gallery.svg" 
            width="31.5px"
            height="31.5px"
            alt="gallery"
          />
          </div>
          <p className={cx("heading")}>
            Drag & Drop or click to add main event image
          </p>
          <p className={cx("subtext")}>JPG or PNG</p>
        </div>
        <div className={cx("input-wrapper")}>
          <p className={cx("label")}>Event Name</p>
          <input type="text" placeholder="Enter event tiltle" value={name} onChange={(e)=>{setName(e.target.value)}}/>
        </div>
        <div className={cx("input-wrapper")}>
          <p className={cx("label")}>Event Address</p>
          <input type="text" placeholder="Search location of event" value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
        </div>
        <div className={cx("input-wrapper", "date-wrapper")}>
          <div>
            <p className={cx("label")}>Event Start Date</p>
            <input type="date" placeholder="Start date" value={startDate} onChange={(e)=>{setStartDate(e.target.value)}}/>
          </div>
          <div>
            <p className={cx("label")}>End Date</p>
            <input type="date" placeholder="End date" value={endDate} onChange={(e)=>{setEndDate(e.target.value)}}/>
          </div>
        </div>
        <div className={cx("input-wrapper", "date-wrapper")}>
          <div>
            <p className={cx("label")}>Event Start Time</p>
            <input type="time" placeholder="Start time" value={startTime} onChange={(e)=>{setStartTime(e.target.value)}}/>
          </div>
          <div>
            <p className={cx("label")}>End Time</p>
            <input type="time" placeholder="End time" value={endTime} onChange={(e)=>{setEndTime(e.target.value)}}/>
          </div>
        </div>
        <div className={cx("input-wrapper")}>
          <p className={cx("label")}>Event Description</p>
          <textarea placeholder="write" value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
        </div>
        <div className={cx("buttons-wrapper")}>
          <button
            onClick={() => {
              handleCreate()
           
            }}
          >
            Quick Event Post
          </button>
          <button
            onClick={() => {
              setIsCreateModal(false);
              router.push("create-event");
            }}
          >
            Go to Advance Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateEventModal;
