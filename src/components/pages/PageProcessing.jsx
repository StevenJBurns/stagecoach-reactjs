/* React */
import React from "react";

/* Stylesheets */
import "../../styles/pages/PageProcessing.css";

/* Assets */
import BarbedWire from "../../assets/images/barbed-wire.jpg";
// import CutsheetBeefPDF from "../../assets/svg/cutsheet-beef.svg";
// import CutsheetPorkPDF from "../../assets/svg/cutsheet-pork.svg";
import ResumeTestPDF from "../../assets/documents/steven-j-burns-resume.pdf";


export const PageProcessing = () => (
  <main className="main-processing">
    <p>Because we are a small family-owned plant, we offer high quality processing while also cutting beef to the customer's specifications. If you're new to the whole process, we're available to answer any questions you may have along the way!</p>
    <p>The current slaughter charge for beef is $75 per head and the cost of processing is $0.81/lb. Contact us if you need to verify these rates.  After cutting, the beef is then double-wrapped and put into the freezer.</p>
    <p>The cut sheets we use to process your order are linked below.  If you have the ability to fill them out in advance they can be faxed to 970-483-8180 or sent via email to svonloh@yahoo.com. If you don't have the option to print and return the cut sheet to us, we have paper sheets available at our shop location.</p>
    <h5>Cut sheets in PDF format</h5>
    <div id="div-button-wrapper">
      <input type="button" className="input-cutsheet" value="Beef Cut Sheet"></input>
      <input type="button" className="input-cutsheet" value="Pork Cut Sheet"></input>
      <input type="button" className="input-cutsheet" value="Steve - Resume"></input>
      <a href={ResumeTestPDF}>TEST</a>
    </div>
    <img id="img-barbed-wire" src={BarbedWire} alt="Barbed Wire Flourish"></img>

  </main>
);
