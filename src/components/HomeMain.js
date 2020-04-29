import React from "react";
import StyledP from "../styled-components.js/StyledP";

const HomeMain = () => {
  return (
    <div>
      <img
        src="https://northcoders.com/hiring-partners/digital-bridge/images/logos/learn_to_code_manchester_original_second.png"
        alt="Northcoders"
        id="nc_img"
      ></img>
      <StyledP>
        Welcome to the Northcoders Student System administrators interface,
        click through the nav bar to be directed to different lists of students.
        Student lists can be added or deleted in the 'Edit Lists' tab.
      </StyledP>
    </div>
  );
};

export default HomeMain;
