import { Wallet } from "./components/wallet";
import { BuyForm } from "./components/buyForm";
import { useState } from "react";

function App() {

    const [open, setOpen] = useState(false);
    
    function switchOpen() {
        if (!open)
            setOpen(true);
        else setOpen(false);
 
    }

  return (
    <div className="App">
      <div className="d-flex flex-column">
        <div className="navbar">
          <div id="menu-content" style={ open ? { height:'100%'} : {height : '0%'} } >
            <div className="close" onClick={ () => switchOpen()} id="hamburgerclose">
              X
            </div>
            <ul id="navlinks" style={{ listStyle: "none" }} className="links">
              <li onClick={ () => switchOpen()} id="home">
                <a className="link" href="https://drakeland.io/">
                  Home
                </a>
              </li>
              <li onClick={ () => switchOpen()} id="roadmap">
                <a className="link" href="#roadmap-sec">
                  RoadMap
                </a>
              </li>
              <li onClick={ () => switchOpen()} id="about">
                <a className="link" href="#about-sec">
                  About
                </a>
              </li>
              <li onClick={ () => switchOpen()} id="social">
                <a className="link" href="#social-sec">
                  Social
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div onClick={ () => switchOpen()}  className="hamburger" id="hamburger">
          <i class="fas fa-bars"></i>
        </div>

        <main className="flex-shrink-0">
          <h1 className="title"> DrakeLand </h1>

          <section className="py-5">
            <div className="cont-all">
              <div className="mint-card">
                <div className="text">
                  <h1 style={{ color: "#3835e4", fontSize: "2em" }}>
                    <span id="main"></span>
                    <span>/3,800</span>
                  </h1>
                  <div style={{ fontWeight: "bold", fontSize: "1.8em" }}>
                    Get Your DrakeLand Egg!
                  </div>
                  <p>Connect your wallet to enable minting</p>
                  <Wallet />
                  <BuyForm />
                </div>

                <div className="image-gif "></div>
              </div>
            </div>
          </section>
        </main>

        <footer className="text-white" id="social-sec">
          <div className="social">
            <a
              style={{ color: "white" }}
              href="https://discord.gg/tCQYJ7wQuE"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-discord"></i>
            </a>
            <a
              style={{ color: "white" }}
              href="https://twitter.com/DrakeLandNFT"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          </div>
          <div style={{ marginBottom: "40px" }}>
            <h1 style={{ fontSize: "2em" }}>Copyright DrakeLand™</h1>
            <h2 style={{ fontSize: "1.2em" }}>Made by Aurora & Rage</h2>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;