const WorkingProcess = ({ titleColor = "color-primary" }) => {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      text: "Planning is the foundational stage any successful project or strategy where goals defined resources are allocated",
    },
    {
      number: "02",
      title: "Planning",
      text: "Planning is the foundational stage any successful project or strategy where goals defined resources are allocated",
    },
    {
      number: "03",
      title: "Production",
      text: "Planning is the foundational stage any successful project or strategy where goals defined resources are allocated",
    },
    {
      number: "04",
      title: "Distribution",
      text: "Planning is the foundational stage any successful project or strategy where goals defined resources are allocated",
    },
    {
      number: "05",
      title: "Optimization",
      text: "Planning is the foundational stage any successful project or strategy where goals defined resources are allocated",
    },
  ];

  return (
    <section className="working-process-area py-100">
      <div className="container container-1290">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className={`subtitle  mt-10 mb-15 ${titleColor}`}>
                Our Working Process
              </span>
              <h2>Step-by-Step The Video Marketing Journey</h2>
            </div>
          </div>
        </div>
        <div className="working-step-wrap">
          {steps.map((step) => (
            <div className="work-step-item hover-item" key={step.number}>
              <span className="number">{step.number}</span>
              <h6>{step.title}</h6>
              <div className="hover-content">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;

export const WorkingProcess2 = ({ extraClass = "bgc-black text-white" }) => {
  return (
    <section className={`working-process-area rel z-1 ${extraClass}`}>
      <div className="container px-sm-0 bordered-x pt-100 pb-70">
        <div className="row justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">Our Working Process</span>
              <h2>How We Match You With the Perfect Influencer</h2>
            </div>
          </div>
        </div>
        <div className="row justify-content-center rel">
  <div
    className="col-xl-3 col-lg-4 col-md-6"
    data-aos="flip-left"
    data-aos-duration={1500}
    data-aos-offset={50}
  >
    <div className="work-process-item-two">
      <span className="number">01</span>
      <h6>Sign Up & Set Availability</h6>
      <div className="arrow">
        <img src="assets/images/shapes/arrow.png" alt="Arrow" />
      </div>
      <p>
        Influencers and athletes create a booking profile, set their availability, niche, and appearance rate—all in minutes.
      </p>
    </div>
  </div>
  <div
    className="col-xl-3 col-lg-4 col-md-6"
    data-aos="flip-left"
    data-aos-duration={1500}
    data-aos-offset={50}
  >
    <div className="work-process-item-two">
      <span className="number">02</span>
      <h6>Receive And Review Bids</h6>
      <div className="arrow">
        <img src="assets/images/shapes/arrow.png" alt="Arrow" />
      </div>
      <p>
        Businesses submit appearance bids with event details, and creators get notified instantly—no long negotiations.
      </p>
    </div>
  </div>
  <div
    className="col-xl-3 col-lg-4 col-md-6"
    data-aos="flip-left"
    data-aos-duration={1500}
    data-aos-offset={50}
  >
    <div className="work-process-item-two">
      <span className="number">03</span>
      <h6>Accept & Lock the Booking</h6>
      <div className="arrow">
        <img src="assets/images/shapes/arrow.png" alt="Arrow" />
      </div>
      <p>
        Creators accept the offers they like with a single click. Booking confirmation and event logistics handled instantly.
      </p>
    </div>
  </div>
  <div
    className="col-xl-3 col-lg-4 col-md-6"
    data-aos="flip-left"
    data-aos-duration={1500}
    data-aos-offset={50}
  >
    <div className="work-process-item-two">
      <span className="number">04</span>
      <h6>Payments & Platform Fee</h6>
      <div className="arrow">
        <img src="assets/images/shapes/arrow.png" alt="Arrow" />
      </div>
      <p>
        Payments are secured through CLIQUE with a 5% platform fee. No middlemen, no delays—just fast, direct transactions.
      </p>
    </div>
  </div>
</div>

      </div>
    </section>
  );
};
