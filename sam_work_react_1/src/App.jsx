import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import img3 from "./assets/img3.svg";
import img4 from "./assets/img4.svg";
import fb from "./assets/fb.svg";
import insta from "./assets/insta.svg";
import twiter from "./assets/twiter.svg";
import Linkedin from "./assets/Linkedin.svg";

function App() {
  return (
    <>
      <body>
        <header>
          <div className="container">
            <div className="head-content">
              <div className="menu">
                <p>Works</p>
                <p>Blog</p>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="container">
            <div className="newcontainer">
              <div className="sec1">
                <div className="left">
                  <h1>
                    Hi, I am John, <br />
                    Creative Technologist
                  </h1>
                  <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet <br />
                    sint. Velit officia consequat duis enim velit mollit.
                    Exercitation veniam <br />
                    consequat sunt nostrud amet.
                  </p>
                  <button>Download Resume</button>
                </div>
                <div className="right">
                  <img src={img1} alt="img1" />
                </div>
              </div>
            </div>
            <div className="sec2">
              <div className="newcontainer">
                <div className="elements">
                  <div className="title">
                    <p>Recent posts</p>
                    <p className="vievall">View all</p>
                  </div>
                  <div className="cards">
                    <div className="card1">
                      <h1>
                        Making a design system from <br />
                        scratch
                      </h1>
                      <h5>12 Feb 2020 | Design, Pattern</h5>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. Velit officia consequat{" "}
                        <br />
                        duis enim velit mollit. Exercitation veniam consequat{" "}
                        <br />
                        sunt nostrud amet.
                      </p>
                    </div>
                    <div className="card1">
                      <h1>
                        Creating pixel perfect icons in <br />
                        Figma
                      </h1>
                      <h5>12 Feb 2020 | Figma, Icon Design</h5>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit <br />
                        aliqua dolor do amet sint. Velit officia consequat{" "}
                        <br />
                        duis enim velit mollit. Exercitation veniam consequat{" "}
                        <br />
                        sunt nostrud amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="newcontainer">
              <div className="sec3">
                <div className="tittl">
                  <p>Featured works</p>
                </div>
                <div className="boxs">
                  <div className="box1">
                    <div className="box-l">
                      <img src={img2} alt="img2" />
                    </div>
                    <div className="box-r">
                      <h1>Designing Dashboards</h1>
                      <div className="middle">
                        <button>2020</button>
                        <h5>Dashboard</h5>
                      </div>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit <br />
                        officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt <br />
                        nostrud amet.
                      </p>
                    </div>
                  </div>
                  <div className="box1">
                    <div className="box-l">
                      <img src={img3} alt="img3" />
                    </div>
                    <div className="box-r">
                      <h1>Vibrant Portraits of 2020</h1>
                      <div className="middle">
                        <button>2018</button>
                        <h5>Illustration</h5>
                      </div>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit <br />
                        officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt <br />
                        nostrud amet.
                      </p>
                    </div>
                  </div>
                  <div className="box1">
                    <div className="box-l">
                      <img src={img4} alt="img4" />
                    </div>
                    <div className="box-r">
                      <h1>36 Days of Malayalam type</h1>
                      <div className="middle">
                        <button>2018</button>
                        <h5>Typography</h5>
                      </div>
                      <p>
                        Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit <br />
                        officia consequat duis enim velit mollit. Exercitation
                        veniam consequat sunt <br />
                        nostrud amet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer>
          <div className="newcontainer">
            <div className="icons">
              <img src={fb} alt="fb" />
              <img src={insta} alt="fb" />
              <img src={twiter} alt="fb" />
              <img src={Linkedin} alt="fb" />
            </div>
            <div className="last">
              <p>Copyright ©2020 All rights reserved </p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}
export default App;
