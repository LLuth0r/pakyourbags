import React, { useState } from "react";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import NoteIcon from "@material-ui/icons/Note";

import OnboardingCarousel from "../components/OnboardingCarousel/OnboardingCarousel";
import { useHistory } from "react-router";

const info = [
  {
    word: "Plan",
    head: "with friends!",
    icon: <PeopleOutlineIcon fontSize="inherit" />,
    blurb:
      "Vote on trip dates and destinations while booking flights and hotels together!",
    button: "Next",
    backgroundColor: "#96B4B660",
    foregroundColor: "#FFFFFF",
    buttonColor: "#FE5D2A",
    headColor: "#121212",
  },
  {
    word: "Stick to",
    head: "a budget!!",
    icon: <AccountBalanceWalletIcon fontSize="inherit" />,
    blurb: "Set a budget that we help you follow every step of the way!",
    button: "Next",
    backgroundColor: "#FE5D2A",
    foregroundColor: "#FFFFFF",
    buttonColor: "#121212",
    headColor: "#FFFFFF",
  },
  {
    word: "Leave",
    head: "Notes!",
    icon: <NoteIcon fontSize="inherit" />,
    blurb: 'Leave notes for your friends on trips - or just to say "Hello"!',
    button: "Get Started!",
    backgroundColor: "#96B4B660",
    foregroundColor: "#FFFFFF",
    buttonColor: "#FE5D2A",
    headColor: "#121212",
  },
];

export default function Onboarding(props) {
  const [active, setActive] = useState(0);
  const history = useHistory();
  const current = info[active];
  const advance = () => {
    if (active === info.length - 1) {
      history.push("/mytrips");
    } else {
      setActive((prev) => prev + 1);
    }
  };

  const back = () => {
    if (active <= 0) {
      history.push("/register");
    } else {
      setActive((prev) => prev - 1);
    }
  };
  return (
    <>
      <OnboardingCarousel
        info={info}
        active={active}
        advance={advance}
        back={back}
        current={current}
      />
    </>
  );
}
