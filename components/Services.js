import Link from "next/link";

const Services = ({ extraClass = "" }) => {
  const services = [
    {
      id: 1,
      image: "assets/images/services/service-timeline1.jpg",
      title: "Web Design",
    },
    {
      id: 2,
      image: "assets/images/services/service-timeline2.jpg",
      title: "Branding",
    },
    {
      id: 3,
      image: "assets/images/services/service-timeline3.jpg",
      title: "SEO",
    },
    {
      id: 4,
      image: "assets/images/services/service-timeline4.jpg",
      title: "Motion Design",
    },
    {
      id: 5,
      image: "assets/images/services/service-timeline5.jpg",
      title: "3D Animation",
    },
  ];
  return (
    <section className={`services-area ${extraClass}`} id="services">
      <div className="container px-0 bordered-x bordered-top py-130 rpy-100">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-9 col-md-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Services</span>
              <h2>Creative &amp; Modern Services</h2>
            </div>
          </div>
        </div>
        {services.map(({ id, image, title }) => (
          <div key={id} className="service-limeline-item">
            <span className="number">{id < 10 ? `0${id}` : id}</span>
            <span className="h1">
              <div href="service-details">{title}</div>
            </span>
            <div className="image">
              <img src={image} alt="Service" />
            </div>
            <div href="service-details" className="detail-btn">
              <i className="far fa-arrow-right" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;

export const Services2 = ({ extraClass = "pb-70" }) => {
  const services = [
    {
      icon: "flaticon-keywords ",
      title: "Event Discovery for Creators",
      description:
        "We help smaller creators and athletes uncover consistent, high-quality event opportunities that align with their personal brand and audience — no more scrolling through irrelevant platforms or relying on agencies.",
    },
    {
      icon: "flaticon-search-engine",
      title: "Lower Booking Fees",
      description:
        "By cutting out traditional middlemen and management firms, CLIQUE enables creators to keep more of what they earn while offering businesses a more cost-effective way to connect with talent.",
    },
    {
      icon: "flaticon-link-building",
      title: "Direct Communication Tools",
      description:
        "CLIQUE removes the guesswork by enabling real-time communication between hosts and influencers, streamlining logistics and reducing confusion throughout the booking journey.",
    },
    {
      icon: "flaticon-www",
      title: "Unified Booking Platform",
      description:
        "Our centralized booking system eliminates the need for third-party negotiations, enabling creators and brands to manage bids, events, and payments all in one intuitive dashboard.",
    },
    {
      icon: "flaticon-link-building",
      title: "Faster Appearance Matching",
      description:
        "Our technology simplifies the process of finding the right influencers for specific events, ensuring faster matchmaking between businesses and creators who are genuinely aligned in values and audience.",
    },
  ];
  
  return (
    <section className="services-area rel z-1" id="services">
      <div className={`container bordered-x px-sm-0 ${extraClass}`}>
        <div className="row justify-content-center pb-35">
          <div
            className="col-xl-7 col-lg-9 text-center"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-30">
              <span className="subtitle mb-15">Our Services</span>
              <h2>Explore Popular Services</h2>
            </div>
            <p>
            Explore the challenges we're solving for creators, athletes, and event planners alike
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          {services.map(({ icon, title, description }, i) => (
            <div
              key={i}
              className={`${i === 0 ? "col-xl-8" : "col-xl-4 col-md-6"}  `}
              data-aos="flip-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="service-two-item">
                <div className="icon">
                  <i className={icon} />
                </div>
                <h4>
                  <div href="service-details">{title}</div>
                </h4>
                <p>{description}</p>
                <div href="service-details" className="read-more">
                  Read More <i className="far fa-arrow-right" />
                </div>
                <div className="bg">
                  <img
                    src="assets/images/shapes/service-circle.png"
                    alt="Circle"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
