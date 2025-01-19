import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <>
        <main className="min-h-[100vh] mb-[200px]">
          <div className="slider section-notch text-white">
            <div className="slider-content flex flex-col flex-nowrap justify-center md:pl-[100px] gap-5 md:w-[50%] px-5 h-[100%]">
              <h2 className="flex flex-col gap-[15px]">
                <span className="md:text-sm text-white text-xl">A NEW APPROAH TO</span>
                <span className=" font-extrabold md:font-bold text-4xl md:text-6xl kids-edu">Kids Education</span>
              </h2>
              <p className="flex flex-col text-[18px]">
                <span>The universe is one great kindergarten for man. Everything</span>
                <span>that exists has brought with its own peculiar lession</span>
              </p>
              <div className="gap-4 flex">
                <button className="thm-btn thm-btn-1">ADMISSION NOW</button>
                <button className="thm-btn thm-btn-2 ">OUR CLASSES</button>
              </div>
            </div>
          </div>

        <section className="welcome flex flex-col justify-center items-center md:w-[30%] w-4/5 m-auto gap-7 mt-[110px] mb-[60px] text-center">
          <h2 className="text-gray-800 font-extrabold text-3xl md:text-4xl section-title">Welcome to Our Kinter</h2>
          <p className="">
            Here is what you cannot expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!
          </p>
        </section>

        <section className="feature-area  flex flex-wrap justify-evenly mb-[60px]">

            <div className="feature-item">
                <div className="feature-shape shape-1">
                  <Image 
                    src={'/assets/icon/f-icon-1.png'}
                    width={100}
                    height={100}
                    alt="active learning"
                    className=""
                  />
                </div>
                <div className="feature-content">

                  <div className="feature-title">
                    <h3>Active Learning</h3>
                  </div>

                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
            </div>
            <div className="feature-item">
                <div className="feature-shape shape-2">
                  <Image 
                    src={'/assets/icon/f-icon-2.png'}
                    width={100}
                    height={100}
                    alt="Expert Teachers"
                  />
                </div>
                {/* Expert Teachers */}
                <div className="feature-content">
                  <div className="feature-title">
                    <h3>Expert Teachers</h3>
                  </div>

                  <p>Since have been visionary relable software Engineer partner have been and visionary</p>
                </div>
            </div>
            {/* Parents day */}
            <div className="feature-item">
                <div className="feature-shape shape-3">
                  <Image 
                    src={'/assets/icon/f-icon-3.png'}
                    width={100}
                    height={100}
                    alt="active learning"
                    className=""
                  />
                </div>
                <div className="feature-content">
                  <div className="feature-title">
                    <h3>Parents Day</h3>
                  </div>

                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
            </div>
            {/* Music lessons */}
            <div className="feature-item">
                <div className="feature-shape shape-4">
                  <Image 
                    src={'/assets/icon/f-icon-4.png'}
                    width={100}
                    height={100}
                    alt="active learning"
                    className=""
                  />
                </div>
                <div className="feature-content">
                  <div className="feature-title">
                    <h3>Music Lessons</h3>
                  </div>

                  <p>Since have been visonary relable sofware engnern partne have been and visionary</p>
                </div>
            </div>

        </section>

        <section className=" about-area section-bg-one section-notch relative py-20 px-10">
          <div className="container w-full flex justify-evenly">
            <div className="about-content text-white w-[500px] flex flex-col md:justify-center md:gap-[15px]">
              <div className="section-title">
                <h2 className="cur-family text-4xl pb-5">About Kindergarten School</h2>
              </div>
              <p className="pb-5">
              Enthusastcay deminate competitive oportunities through transparent and action
                                        Compelngly seize andvirschemas through intermandated creative adiea sources
                                        Enthusiasticay plagiarize clientcentered and relationships foovalent experiences
                                        Distinctively architect 24 naservice for wreless andebusiness ahosfluorescently
                                        Efficiently comunicate coperative andmethods empowerment awesome atrough
                                        Monotonectaly myocardinate crioss and functional niche markets and functional
                                        scenarios awesome nteractively utilize viral.
              </p>
              <div className="about-btn">
              <button className="thm-btn thm-btn-1">ADMISSION NOW</button>
            </div>
            </div>

            <div className="about-image hidden md:block">
              <Image 
                 src={"/assets/about/about.png"}
                 width={500}
                 height={500}
                 alt="about Kinter"
                 className="mt-[50px]"
              />
            </div>
          </div>
        </section>

        {/* class area */}
        <section className="flex justify-center">
          <div className="container mt-[110px] ">
            <div className="section-content  m-auto text-center">
                <h2 className="text-4xl font-bold mb-10">Our Popular Classes</h2>

              <p className="max-w-[600px] m-auto text-gray-500 px-4">
                Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions
              </p>
            </div>
            <div className="class-images flex flex-wrap justify-evenly  m-auto mt-[110px] overflow-hidden">
              <div className="class-item w-full">
                <div className="class-img">
                  <img src="/assets/classes/class-1.jpg" alt="Imagination classes" />
                </div>
                <div className="class-content ">
                    <h4 className="title      ">Imagination Classes</h4>
                    <p>Class Time: 08:00 am - 10:00 am</p>
                    <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
              <div className="class-item">
                <div className="class-img">
                  <img src="/assets/classes/class-1.jpg" alt="Imagination classes" />
                </div>
                <div className="class-content ">
                    <h4 className="title">Talented Explores</h4>
                    <p>Class Time: 08:00 am - 10:00 am</p>
                    <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
              <div className="class-item">
                <div className="class-img">
                  <img src="/assets/classes/class-1.jpg" alt="Imagination classes" />
                </div>
                <div className="class-content ">
                    <h4 className="title">Super cool kid</h4>
                    <p>Class Time: 08:00 am - 10:00 am</p>
                    <p>Draticaly novate fuly rarched an plications awesome theme education</p>
                </div>
                <ul className="schedule">
                  <li>
                    <span>Class Size</span>
                    <span className="class-size">30 - 40</span>
                  </li>
                  <li>
                    <span>Years Old</span>
                    <span className="class-size-2">06 - 09</span>
                  </li>
                  <li>
                    <span>Tution Fee</span>
                    <span className="class-size">$320.00</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="button-container flex justify-center w-full">
            <button className="thm-btn thm-btn-2 mt-20">SEE MORE CLASSES</button>
            </div>
          </div>

          {/* Counter area */}
        </section>
        <section className="counter-area section-notch w-full  md:h-[600px] mt-[130px] relative flex flex-wrap justify-evenly items-center">
            <div className="single-counter text-white p-[70px] flex flex-col items-center gap-5">
              <Image 
                src={'/assets/icon/c-icon1.png'}
                width={50}
                height={50}
                alt="students encrolled"
              />
              <h3 className="flex gap-1 text-6xl font-semibold">
                <span className=" ">2500</span>
                <FontAwesomeIcon icon={faPlus} width={20} className="text-xl font-bold"/>
              </h3>
              <p className="text-xl">Students Enrolled</p>

            </div>
            <div className="single-counter text-white p-[70px] flex flex-col items-center gap-5">
              <Image 
                src={'/assets/icon/c-icon2.png'}
                width={50}
                height={50}
                alt="best awards won"
              />
              <h3 className="flex gap-1 text-6xl font-semibold">
                <span className=" ">912</span>
                <FontAwesomeIcon icon={faPlus} width={20} className="text-xl font-bold"/>
              </h3>
              <p className="text-xl">Best Awards won</p>

            </div>
            <div className="single-counter text-white p-[70px] flex flex-col items-center gap-5">
              <Image 
                src={'/assets/icon/c-icon3.png'}
                width={50}
                height={50}
                alt="classes completed"
              />
              <h3 className="flex gap-1 text-6xl font-semibold">
                <span className=" ">370</span>
                <FontAwesomeIcon icon={faPlus} width={20} className="text-xl font-bold"/>
              </h3>
              <p className="text-xl">Classes Completed</p>

            </div>
            <div className="single-counter text-white p-[70px] flex flex-col items-center gap-5">
              <Image 
                src={'/assets/icon/c-icon4.png'}
                width={50}
                height={50}
                alt="students encrolled"
              />
              <h3 className="flex gap-1 text-6xl font-semibold">
                <span className=" ">648</span>
                <FontAwesomeIcon icon={faPlus} width={20} className="text-xl font-bold"/>
              </h3>
              <p className="text-xl">Our Total Courses</p>
            </div>
        </section>
        <section className="gallery-area mt-[110px] text-center">
          <div className="content">
            <h2 className="text-gray-900 md:font-bold font-extrabold text-3xl md:text-5xl title">Our school gallery</h2>
            <p className="content-details text-gray-500 text-xl px-4">Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
          </div>
          <div className="gallery">
            <ul className="gallery-list flex  md:shrink-0 flex-wrap justify-evenly md:text-xl font-bold  md:w-[50%] m-auto mt-[45px] text-sm">
              <li>SEE ALL</li>
              <li>BRANDING</li>
              <li>CREATIVE</li>
              <li>ILLUSTRATION</li>
              <li>PHOTOSHOP</li>
            </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-5 w-4/5 m-auto mt-[45px]">
              <div>
                <Image 
                  src={'/assets/portfolio/port01.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
              <div>
                <Image 
                  src={'/assets/portfolio/port02.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
              <div>
                <Image 
                  src={'/assets/portfolio/port03.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
              <div>
                <Image 
                  src={'/assets/portfolio/port04.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
              <div>
                <Image 
                  src={'/assets/portfolio/port05.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
              <div>
                <Image 
                  src={'/assets/portfolio/port06.jpg'}
                  width={400}
                  height={400}
                  alt="Portfolio"
                />
              </div>
            </div>
        </section>

        {/* latest news */}
        <section className="news-area section-notch relative h-auto py-20 w-full mt-[110px] text-white">
          <div className="content text-center px-4">
            <h2 className="title text-3xl  md:text-5xl">Our Latest News</h2>
            <p className="m-auto font-medium">Here is what you can expect from a house cleaning from a Handy professional. Download the app to share further cleaning details and instructions!</p>
          </div>
          <div className=" mt-[45px] gap-y-4 md:gap-4 flex flex-wrap  m-auto place-content-center">
            <div className="news-item">
            <Image 
              src={'/assets/blog/blog-01.jpg'}
              width={400}
              height={200}
              alt="why chidren need a healthy environment "
            />
            <div className="blog-content">
              <div className="blog-ul-li">
              <li >
                  <FontAwesomeIcon icon={faUser} className="w-4"/>
                  <span>by Wasim</span>
                  </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCalendar} className="w-4"/>
                  <span>26th December 2024</span>
                </li>
              </div>
              <h4>Why children need a Healthy Environment</h4>
              <p>READ MORE</p>
            </div>
            </div>
            <div className="news-item">
            <Image 
              src={'/assets/blog/blog-01.jpg'}
              width={400}
              height={200}
              alt="why chidren need a healthy environment "
            />
            <div className="blog-content">
              <div className="blog-ul-li">
              <li >
                  <FontAwesomeIcon icon={faUser} className="w-4"/>
                  <span>by Wasim</span>
                  </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCalendar} className="w-4"/>
                  <span>26th December 2024</span>
                </li>
              </div>
              <h4>Why children need a Healthy Environment</h4>
              <p>READ MORE</p>
            </div>
            </div>
            <div className="news-item">
            <Image 
              src={'/assets/blog/blog-01.jpg'}
              width={400}
              height={200}
              alt="why chidren need a healthy environment "
            />
            <div className="blog-content">
              <div className="blog-ul-li">
                <li >
                  <FontAwesomeIcon icon={faUser} className="w-4"/>
                  <span>by Wasim</span>
                  </li>
                <li className="flex">
                  <FontAwesomeIcon icon={faCalendar} className="w-4"/>
                  <span>26th December 2024</span>
                </li>
              </div>
              <h4>Why children need a Healthy Environment</h4>
              <p>READ MORE</p>
            </div>
            </div>
          </div>
        </section>
        </main>
    </>
  );
}
