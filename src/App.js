import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './App.css';
import HeaderLogo from "./images/main-logo.svg";
import Qualities from "./components/Qualities.jsx";
import Subtitles from "./components/Subtitles.jsx";
import Screenshots from "./components/Screenshots.jsx";
import Questions from "./components/Questions.jsx";
import Viewallbtn from "./components/Viewallbtn.jsx";
import Features from "./components/Features.jsx";
import Footeritems from "./components/Footeritems.jsx";
import FooteritemsYT from "./components/FooteritemsYT.jsx";
import Footer from "./components/Footer.jsx";
import HeaderNavbar from "./components/HeaderNavbar.jsx";
import HeaderNavbarList from "./components/HeaderNavbarList.jsx";
import MainPageTexts from "./components/MainPageTexts.jsx";

function App() {
  return (
    <div className="App">
      <div className="main-page">
        <div className="header">
          <div className="hr-logo-container">
            <img className="hr-logo" src={HeaderLogo} alt="hr-logo"></img>
          </div>
          <div className="nb-main-container">
            <div className="nb-container">
              <HeaderNavbar
              text="Download" />
              <HeaderNavbar
              text="Donate" />
              <HeaderNavbar
              text="Blog" />
              <HeaderNavbar
              text="Changelogs" />
              <HeaderNavbar
              text="Proxy" />
              <HeaderNavbarList
              text="Documentation"
              ref1="Tutorials"
              ref2="CustomHUD"
              ref3="AutoSettings"
              ref4="Script API"
              ref5="Donation" />
              <HeaderNavbarList
              text="Community"
              ref1="Youtube"
              ref2="Twitter"
              ref3="Discord"
              ref4="Telegram"
              ref5="Forum" />
              <HeaderNavbar
              text="Account" />
            </div>
          </div>
        </div>
        <div className="main-page-items">
          <div className="mp-texts-container">
            <MainPageTexts />
          </div>
        </div>
        <span className="mp-icon-container" onClick={() => window.scrollTo({top: 711, behavior: "smooth"})}> 
          <i className="mp-arrow"><FontAwesomeIcon icon={faAngleDown} /></i>
        </span>
      </div>
      <Subtitles
      title="What is LiquidBounce?"
      text="LiquidBounce is a hacked client (also known as a cheat) for Minecraft and designed to give you a significant advantage over other players. Unlike many of its competitors, LiquidBounce is completely free, open source and compatible with Fabric." />
      <Qualities
      image="lego"
      alt="lego"
      title="Scripting API"
      text="You think the client is missing a module or command? LiquidBounce's JavaScript API allows you to take care of that yourself! With just a few lines of code, you can develop your own modules and share them with the community." />
      <Qualities
      image="dropper"
      alt="dropper"
      title="Highly Customizable"
      text="LiquidBounce allows you to customize the HUD according to your personal needs. So if you don't like the standard design, you can easily customize it to your exact needs." />
      <Qualities
      image="settings"
      alt="settings"
      title="Active Development"
      text="We are constantly trying to improve LiquidBounce by adding new features, modules, and bypasses. Our goal is to develop the perfect client completely free of charge." />
      <Qualities
      image="download"
      alt="download"
      title="Free Download "
      text="We believe quality does not have to be come with a price tag and therefore offer LiquidBounce for free. No hidden costs, no premium features. Just go ahead and download our client!" />
      <Subtitles
      title="Screenshots"
      text="If you're still uncertain about whether LiquidBounce is the right fit for you, take a glance at the screenshots below to get an overview of the client. Should you have any remaining questions, feel free to explore our FAQ section for more information." />
      <Screenshots
      ssimage="main-menu"
      ssalt="main-menu"
      sstitle="Main Menu"
      sstext="LiquidBounce's custom main menu has a beautiful shader background!" />
      <Screenshots
      ssimage="clickgui"
      ssalt="clickgui"
      sstitle="ClickGUI"
      sstext="Our beautiful ClickGUI allows easy customization of all modules!" />
      <Screenshots
      ssimage="hud"
      ssalt="hud"
      sstitle="HUD"
      sstext="Use the integrated TabGUI to quickly toggle modules!" />
      <Screenshots
      ssimage="xray"
      ssalt="xray"
      sstitle="XRay"
      sstext="Never waste time searching for diamonds anymore!" />
      <Subtitles
      title="FAQ"
      text="Before asking your question, please ensure it hasn't already been addressed in our FAQ. This helps save time for both you and us. If you don't find an answer here, feel free to get in touch with us!" />
      <Questions
      title="Is LiquidBounce safe to use?"
      text="Yes, LiquidBounce is safe to use. We can assure you that it is free from viruses, adware, crypto miners or other junkware. Also, LiquidBounce is open source. That means the source code is freely available. This transparency ensures that any potential violations of our standards would be promptly identified." />
      <Questions
      title="How do you make money?"
      text="LiquidBounce is completely free. Nevertheless, we do have some ways to earn money with our work. Firstly, there are banners on this page. If you wish to support us at no cost, consider disabling your AdBlocker. Additionally, we gratefully accept donations as another means of support." />
      <Questions
      title="How do I update the client?"
      text="If you are using LiquidLauncher, which is the recommended way to install LiquidBounce, updates will be installed automatically. Otherwise, simply download the update and replace old version in your mods directory." />
      <Viewallbtn
      title="VIEW ALL" />
      <Features
      image="download"
      alt="download"
      number="5000000"
      text="Total Downloads" />
      <Features
      image="lego"
      alt="lego"
      number="150"
      text="Modules" />
      <Features
      image="message"
      alt="message"
      number="30"
      text="Commands" />
      <Features
      image="save"
      alt="save"
      number="10000"
      text="Lines of Code" />
      <div className="footer-extended">
        <div className="footer-extended-container">
          <div className="fi-main-container">
            <Footeritems
            title="About"
            ref1="Terms of Service"
            ref2="Privacy Policy"
            ref3="Refund Policy"
            ref4="Status"
            ref5="Contact Us" />
            <Footeritems
            title="Downloads"
            ref1="Releases"
            ref2="Source code"
            ref3="License"
            ref4=""
            ref5="" />
            <Footeritems
            title="Docs"
            ref1="Tutorials"
            ref2="CustomHUD"
            ref3="AutoSettings"
            ref4="Script API"
            ref5="Donation" />
            <Footeritems
            title="Community"
            ref1="Forum"
            ref2="Discord"
            ref3="Telegram"
            ref4="YouTube"
            ref5="Twitter" />
            <FooteritemsYT />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="footer-row">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
