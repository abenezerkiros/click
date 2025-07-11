"use client";
import Link from "next/link";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const FaqItem = () => {
  const faqData = [
    {
      question: "1. What is CLIQUE and how does it work?",
      answer:
        "CLIQUE is a marketplace that connects influencers, athletes, and creators directly with businesses looking to book appearances. Creators receive bids, review event details, and accept bookings with a simple click.",
    },
    {
      question: "2. How long does it take to get booked on CLIQUE?",
      answer:
        "Booking times vary by creator availability and demand, but many users receive bids and confirm bookings within days of signing up. Our platform is designed to speed up connections and reduce negotiation delays.",
      show: true,
    },
    {
      question: "3. What fees does CLIQUE charge?",
      answer:
        "CLIQUE charges a transparent 5% transaction fee on every successful booking. There are no hidden costs or management fees, allowing creators to keep more of their earnings.",
    },
    {
      question: "4. Can businesses negotiate directly with influencers?",
      answer:
        "Yes. CLIQUE facilitates direct communication between businesses and creators through bids and booking confirmations, eliminating middlemen and lengthy back-and-forths.",
    },
    {
      question: "5. Is CLIQUE suitable for new or smaller influencers?",
      answer:
        "Absolutely. CLIQUE helps smaller creators find paid opportunities and build their brand with less hassle, making it easy to monetize appearances without expensive agents or platforms.",
    },
  ];
  
  const [active, setActive] = useState("collapse1");
  return (
    <Accordion
      defaultActiveKey={active}
      className="accordion-one"
      id="faq-accordion"
    >
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="accordion-item"
          data-aos="fade-up"
          data-aos-duration={1500}
          data-aos-offset={50}
        >
          <h6 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              className={`accordion-button ${
                active == `collapse${index + 1}` ? "" : "collapsed"
              }`}
              onClick={() => setActive(`collapse${index + 1}`)}
              eventKey={`collapse${index + 1}`}
            >
              {faq.question}
            </Accordion.Toggle>
          </h6>
          <Accordion.Collapse
            eventKey={`collapse${index + 1}`}
            className={`accordion-collapse`}
          >
            <div className="accordion-body">
              <p>{faq.answer}</p>
            </div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};

const Faq = () => {
  const faqData = [
    {
      question: "1. What is CLIQUE and how does it work?",
      answer:
        "CLIQUE is a marketplace that connects influencers, athletes, and creators directly with businesses looking to book appearances. Creators receive bids, review event details, and accept bookings with a simple click.",
    },
    {
      question: "2. How long does it take to get booked on CLIQUE?",
      answer:
        "Booking times vary by creator availability and demand, but many users receive bids and confirm bookings within days of signing up. Our platform is designed to speed up connections and reduce negotiation delays.",
      show: true,
    },
    {
      question: "3. What fees does CLIQUE charge?",
      answer:
        "CLIQUE charges a transparent 5% transaction fee on every successful booking. There are no hidden costs or management fees, allowing creators to keep more of their earnings.",
    },
    {
      question: "4. Can businesses negotiate directly with influencers?",
      answer:
        "Yes. CLIQUE facilitates direct communication between businesses and creators through bids and booking confirmations, eliminating middlemen and lengthy back-and-forths.",
    },
    {
      question: "5. Is CLIQUE suitable for new or smaller influencers?",
      answer:
        "Absolutely. CLIQUE helps smaller creators find paid opportunities and build their brand with less hassle, making it easy to monetize appearances without expensive agents or platforms.",
    },
  ];
  

  const [active, setActive] = useState("collapse1");

  return (
    <section className="faq-area bgc-black text-white rel z-1">
      <div className="container bordered-x pb-90">
        <div className="row mx-xl-4 justify-content-center">
          <div className="col-xl-9 col-lg-11">
            <div
              className="section-title mb-50 text-center"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <span className="subtitle mt-10 mb-15">FAQs</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FaqItem />
          </div>
        </div>
      </div>

    </section>
  );
};
export default Faq;

export const Faq2 = () => {
  return (
    <section className="faqs-area rel z-1">
      <div className="container bordered-x px-sm-0 pb-120 rpb-90">
        <div className="row justify-content-between">
          <div
            className="col-lg-4 rmb-55"
            data-aos="fade-up"
            data-aos-duration={1500}
            data-aos-offset={50}
          >
            <div className="section-title mb-35">
              <span className="subtitle mt-10 mb-15">FAQs</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <p>
              We incorporate SEO best practices into website build this includes
              optimizing site structure page load speed, mobile responsiveness.
            </p>
            <Link
              href="contact"
              className="theme-btn style-two mt-15"
              data-hover="Get A Quote"
            >
              <span>Get A Quote</span>
            </Link>
          </div>
          <div className="col-lg-8">
            <FaqItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export const Faq3 = () => {
  // useEffect(() => {
  //   // ## FAQ Nav Fixed
  //   let faqOffset, footerOffset;

  //   const faqTabWrap = document.querySelector(".faq-tab-wrap");
  //   const stickyElement = document.querySelector(".faq-tab-wrap");
  //   const footerElement = document.querySelector(".for-sticky");

  //   // Initialize offsets if elements exist
  //   if (faqTabWrap && footerElement) {
  //     faqOffset = faqTabWrap.offsetTop;
  //     footerOffset = footerElement.offsetTop;
  //   }

  //   window.addEventListener("scroll", () => {
  //     const scroll = window.scrollY;
  //     // ## FAQ Nav Fixed
  //     if (stickyElement) {
  //       if (scroll >= faqOffset) stickyElement.classList.add("fixed");
  //       else stickyElement.classList.remove("fixed");

  //       if (scroll >= footerOffset) stickyElement.classList.remove("fixed");
  //     }
  //   });
  // }, []);

  return (
    <section className="faqs-area rel z-1">
      <div className="container bordered-x px-sm-0 pt-50 rpt-100 pb-120 rpb-90">
        <div className="row justify-content-between">
          <div className="col-lg-4 mt-80 rmt-0">
            <div className="faq-tab-wrap rmb-45">
              <div className="section-title mb-40">
                <span className="subtitle mt-10 mb-15">FAQs</span>
                <h2>Frequently Asked Questions</h2>
              </div>
              <ul className="faq-nav position-sticky">
                <li>
                  <a href="#faq-accordion-one" className="active">
                    General Questions
                  </a>
                </li>
                <li>
                  <a href="#faq-accordion-two">Support &amp; Services</a>
                </li>
                <li>
                  <a href="#faq-accordion-three">Pricing Package</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="accordion-one pt-80 rpt-0" id="faq-accordion-one">
              <h4>General Questions</h4>
              <div className="text pt-10 pb-25">
                <p>
                  Web designer is a creative professional responsible for
                  crafting visually appealing and functional sites that
                  effectively communicate a brand's message. Combining artistic
                  talent with technical skills designers create layouts,
                  graphics, and interactive elements that enhance.
                </p>
              </div>
              <FaqItem />
            </div>
            <div className="accordion-one pt-80 rpt-60" id="faq-accordion-two">
              <h4>Support &amp; Services</h4>
              <div className="text pt-10 pb-25">
                <p>
                  Web designer is a creative professional responsible for
                  crafting visually appealing and functional sites that
                  effectively communicate a brand's message. Combining artistic
                  talent with technical skills designers create layouts,
                  graphics, and interactive elements that enhance.
                </p>
              </div>
              <FaqItem />
            </div>
            <div
              className="accordion-one pt-80 rpt-60"
              id="faq-accordion-three"
            >
              <h4>Pricing Package</h4>
              <div className="text pt-10 pb-25">
                <p>
                  Web designer is a creative professional responsible for
                  crafting visually appealing and functional sites that
                  effectively communicate a brand's message. Combining artistic
                  talent with technical skills designers create layouts,
                  graphics, and interactive elements that enhance.
                </p>
              </div>
              <div className="for-sticky"></div>
              <FaqItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
