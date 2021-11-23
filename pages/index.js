import React, { useState } from "react";
import { FaTelegramPlane, FaTwitch, FaDiscord } from "react-icons/fa";
import Navbar from "../components/navbar/navbar";
import Animatedtext from "../components/movingText/movingText";
import Footer from "../components/footer/footer";
import SupPlatforms from "../components/supPlatforms/supPlatforms";
import Phone from "../components/phone/phone";

const index = () => {
  const [state, setState] = useState(false);

  const changeSwitch = () => {
    setState((state = !state));
  };
  const platformRows = ["roww1", "row2", "row3"];

  const platformData = [
    {
      icon: FaTelegramPlane,
      name: "Telegram",
      color: "#2f89ce",
    },
    {
      icon: FaTwitch,
      name: "Twitch",
      color: "#9147ff",
    },
    {
      icon: FaDiscord,
      name: "Discord",
      color: "#8a9cff",
    },
    {
      icon: FaTelegramPlane,
      name: "API <Code/>",
      color: "#2f89ce",
    },
    {
      icon: FaTelegramPlane,
      name: "Zapier",
      color: "#FF4A00",
    },
    {
      icon: FaTelegramPlane,
      name: "Minicraft",
      color: "#43816a",
    },
  ];

  return (
    <div>
      <Navbar />
      <Animatedtext />
      <Phone />
      <SupPlatforms
        platformData={platformData}
        changeSwitch={changeSwitch}
        state={state}
        setState={setState}
        platformRows={platformRows}
      />
      <Footer />
    </div>
  );
};

export default index;
