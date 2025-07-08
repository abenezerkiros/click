"use client";

import Link from "next/link";
import { Nav, Tab } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <section className="tab-area bgc-lighter-gradient" id="why-choose">
      <div
        className="container bordered-x py-130 rpy-100 bgp-bottom"
        style={{
          backgroundImage: "url(assets/images/background/tab-bg-dots.png)",
        }}
      >
        <div
          className="section-title mb-50 text-center"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <span className="subtitle mt-10 mb-15">Why Choose Us</span>
          <h2>Why Choose Ridda Agency</h2>
        </div>
        <Tab.Container defaultActiveKey={"tabOne1"}>
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
            data-aos-delay={50}
          >
            <Nav as={"ul"} className="nav tab-style-one mb-70" role="tablist">
              {[
                {
                  eventKey: "tabOne1",
                  icon: "fas fa-user-friends",
                  text: "Experience Team",
                },
                {
                  eventKey: "tabOne2",
                  icon: "fas fa-chart-bar",
                  text: "Proven Results",
                },
                {
                  eventKey: "tabOne3",
                  icon: "fas fa-rocket-launch",
                  text: "Personalized Approach",
                },
              ].map((item, index) => (
                <Nav.Item key={index} as={"li"}>
                  <Nav.Link
                    as={"button"}
                    className="nav-link"
                    eventKey={item.eventKey}
                  >
                    <i className={item.icon} /> {item.text}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </div>
          <Tab.Content className="tab-content">
            <Tab.Pane className="tab-pane fade" eventKey="tabOne1">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <div
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="tabOne2">
              <div className="row gap-60 align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <div
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
              </div>
            </Tab.Pane>
            <Tab.Pane className="tab-pane fade" eventKey="tabOne3">
              <div className="row align-items-center justify-content-center">
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="content rmb-55"
                    data-aos="fade-left"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h4 className="mb-25">
                      Lead Social Media Marketing Specialist Director of Social
                      Media Strategy
                    </h4>
                    <p>
                      As a valued member of our team Teams Member' consistently
                      demonstrates a high level of expertise and dedication to
                      their role their ability to collaborate effectively with
                      colleagues
                    </p>
                    <ul className="list-style-two mt-35 mb-40">
                      <li>Senior Social Media Strategist</li>
                      <li>Chief Social Media Marketing Officer</li>
                      <li>Director of Social Media Strategy</li>
                    </ul>
                    <div
                      href="about"
                      className="theme-btn btn-small bgc-secondary hover-secondary"
                      data-hover="Learn More"
                    >
                      <span>Learn More</span>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 col-lg-6">
                  <div
                    className="image"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <img src="assets/images/tabs/tab-one.png" alt="Tab" />
                  </div>
                </div>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </section>
  );
};
export default WhyChooseUs;

export const WhyChooseUs2 = ({ bg = "bgc-lighter" }) => {
  const services = [
    {
      icon: "fas fa-bolt",
      title: "Instant Booking Model",
      text: "With real-time bidding and one-click acceptance, CLIQUE simplifies the entire booking process—so influencers and businesses connect faster, with less friction and no drawn-out negotiations.",
    },
    {
      icon: "fas fa-store",
      title: "All-in-One Marketplace",
      text: "From profile creation to payment processing, CLIQUE handles everything in one place, eliminating the need for multiple tools, third-party platforms, or complex communication channels.",
    },
    {
      icon: "fas fa-users-cog",
      title: "Verified, Diverse Talent Network",
      text: "Whether you're an event organizer or a creator, our platform offers a curated and growing roster of micro/macro influencers, athletes, and professionals ready to collaborate.",
    },
  ];
  

  return (
    <section className={`why-choose-us ral z-1 ${bg}`}>
      <div className="container bordered-x py-100">
        <div className="row mx-xl-1 justify-content-between">
          <div
            className="col-lg-6 rmb-55"
            data-aos="fade-left"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-45">
              <span className="subtitle mt-10 mb-15">Why Choose Us?</span>
              <h2>Influencers Tailored to Your Business Needs</h2>
            </div>
            <img
              className="br-5"
              src="assets/images/services/why-choose-us.png"
              alt="Why Choose Us"
            />
          </div>
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            {services.map((service) => (
              <div className="service-item style-two" key={service.title}>
                <div className="icon">
                  <i className={service.icon} />
                </div>
                <div className="content">
                  <h6>
                    <div href="service-details">{service.title}</div>
                  </h6>
                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyChooseUs3 = ({ className = "why-choose-two-area" }) => {
  const steps = [
    { number: "01", title: "Modern & Creative Design", icon: "flaticon-curve" },
    {
      number: "02",
      title: "Dedicated Team Member",
      icon: "flaticon-leadership",
    },
    {
      number: "03",
      title: "Satisfaction guaranteed",
      icon: "flaticon-satisfaction",
    },
  ];

  return (
    <section className={`rel z-1 ${className}`}>
      <div className="container bordered-x pt-130 rpt-100 pb-100 rpb-70 px-sm-0">
        <div className="row justify-content-center pb-35">
          <div
            className="col-xl-5 col-lg-7 col-md-10 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mt-10 mb-30">
              <span className="subtitle mb-15">Why Choose Us</span>
              <h2>Discover the advantages of our services</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {steps.map(({ number, title, icon }) => (
            <div
              key={number}
              className="col-xl-4 col-md-6"
              data-aos="flip-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item style-two">
                <div className="icon">
                  <i className={icon} />
                </div>
                <h5>
                  <div href="service-details">{title}</div>
                </h5>
                <p>
                  We design are mobile-friendly and fully responsive. This means
                  they will look and function perfectly on all devices.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
