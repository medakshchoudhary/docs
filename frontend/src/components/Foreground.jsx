import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing dfig dsaf asicg asdui fcgaufc auig duadg adusid sifcgsdui cfsudcv sudgcugcsdg.",
      fileSize: "0.4mb",
      isUploaded: true,
      footer: {
        text: "Read Now",
        color: "green",
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing dfig dsaf asicg asdui fcgaufc auig duadg adusid sifcgsdui cfsudcv sudgcugcsdg.",
      fileSize: "0.4mb",
      isUploaded: false,
      footer: {
        text: "Read Now",
        color: "blue",
      }
    },
    {
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing dfig dsaf asicg asdui fcgaufc auig duadg adusid sifcgsdui cfsudcv sudgcugcsdg.",
      fileSize: "0.4mb",
      isUploaded: true,
      footer: {
        text: "Read Now",
        color: "green",
      }
    },
  ];

  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-screen z-[3] p-5 flex flex-wrap gap-7">
      {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
      ))}
    </div>
  );
};

export default Foreground;
