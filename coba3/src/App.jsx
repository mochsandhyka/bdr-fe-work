import { useState } from "react";
import "./App.css";
import { LanguageProvider } from "./context/LanguageContext";
import { LangToggle } from "./component/LangToggle";
import { Office } from "./component/Office";
import { WhatsApp } from "./component/WhatsApp";
import { Hero } from "./component/Hero";
import { About } from "./component/About";
import { Contact } from "./component/Contact";
import { Navbar } from "./component/Navbar";
import { DestinasiList } from "./component/Negara";
import { DestinationSlider } from "./component/Country";

function App() {
  return (
    <>
      <div>
        <LanguageProvider>
          <div>
            <LangToggle />
            <Navbar />
            <div>
              <Hero />
              <DestinationSlider />
              <About />
              <WhatsApp />
              <Office />
              <Contact />
            </div>
          </div>
        </LanguageProvider>
      </div>
    </>
  );
}

export default App;
