import { CaseStudies2 } from "@/components/CaseStudies";
import Faq from "@/components/Faq";
import { Services2 } from "@/components/Services";
import ClientSlider from "@/components/sliders/ClientSlider";
import { TestimonialsSlider3 } from "@/components/sliders/TestimonialSlider";
import { WhyChooseUs2 } from "@/components/WhyChooseUs";
import { WorkingProcess2 } from "@/components/WorkingProcess";
import RiddaLayout from "@/layout/RiddaLayout";

const page = () => {
  const menus = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Services", href: "#services" },
    { id: 4, text: "Case Study", href: "#case-study" },
    { id: 5, text: "Testimonials", href: "#testimonials" },
  ];
  return (
    <RiddaLayout bodyClass="home-three" header={3} footer={3} menus={menus}>
      {/* Hero Area Start */}
      <section className="hero-area-two bgc-black text-white rel z-2" id="home">
        <div
          className="container bordered-x bordered-bottom bgp-bottom pt-195 rpt-150 pb-100"
          style={{
            backgroundImage: "url(assets/images/background/hero-bg-dots.png)",
          }}
        >
          <div className="row align-items-center">
          <div className="text-center  ">
  <div
    className="hero-content style-two text-white rmb-55"
    data-aos="fade-left"
    data-aos-duration={1500}
    data-aos-offset={50}
  >
          <div
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#0d0d0d",   // dark bg behind both pieces
    padding: "2px 10px",
    borderRadius: 9999,           // fully rounded container
    fontFamily: "Inter, sans-serif"
  }}
>
  <span
    style={{
      backgroundColor: "#0a84ff", // bright blue pill
      color: "#fff",
      padding: "2px 10px",
      fontSize: 12,
      fontWeight: 600,
      borderRadius: 9999,
      lineHeight: 1
    }}
  >
    New
  </span>

  <span
    style={{
      color: "#ffffff",
      fontSize: 16,
      fontWeight: 700,
      whiteSpace: "nowrap"
    }}
  >
    CLIQUE
  </span>
</div>

    <h1>Empowering Creators. Simplifying Connections.</h1>

    <p>
      A better way for influencers, athletes, and businesses to connect, book,<br/> and grow — all in one place.
    </p>

    <div className="hero-btns pt-10 flex flex-col sm:flex-row justify-center items-center">
      <div
        href="index3"
        className="theme-btn bgc-secondary me-3 mt-15"
        data-hover="Join CLIQUE"
      >
        <span>Join CLIQUE</span>
      </div>

    </div>
  </div>
</div>

{  /*          <div className="col-lg-5">
              <div
                className="hero-two-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img src="assets/images/hero/hero-right.png" alt="Hero" />
                <div className="shape one">
                  <img src="assets/images/shapes/hero-shape1.png" alt="Shape" />
                </div>
                <div className="shape two">
                  <img src="assets/images/shapes/hero-shape2.png" alt="Shape" />
                </div>
                <div className="shape three">
                  <img src="assets/images/shapes/hero-shape3.png" alt="Shape" />
                </div>
                <div className="shape four">
                  <img src="assets/images/shapes/hero-shape4.png" alt="Shape" />
                </div>
                <div className="shape five">
                  <img src="assets/images/shapes/hero-shape5.png" alt="Shape" />
                </div>
              </div>
            </div>*/}
          </div>
        </div>
      </section>
      {/* Hero Area End */}
      {/* Client Logo Area start */}
      <div className="client-logo-area bgc-black">
        <div className="container text-white bordered-x">
          <div className="client-logo-wrap pt-95 pb-85">
            <div
              className="text-center mb-40"
              data-aos="zoom-in"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <h6>Trusted by industry leaders</h6>
            </div>
            <ClientSlider
              logoData={[
                {
                  id: 1,
                  image: "assets/images/client-logos/client-logo-white1.png",
                },
                {
                  id: 2,
                  image: "assets/images/client-logos/client-logo-white2.png",
                },
                {
                  id: 3,
                  image: "assets/images/client-logos/client-logo-white3.png",
                },
                {
                  id: 4,
                  image: "assets/images/client-logos/client-logo-white4.png",
                },
                {
                  id: 5,
                  image: "assets/images/client-logos/client-logo-white5.png",
                },
                {
                  id: 6,
                  image: "assets/images/client-logos/client-logo-white6.png",
                },
              ]}
            />
          </div>
        </div>
      </div>
      {/* Client Logo Area end */}
      {/* About Area start */}
      <section id="about" className="about-area-two rel z-1">
        <div className="container bordered-x py-100">
          <div className="row gap-100 justify-content-between align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-four-image-part rmb-55">
                <img src="assets/images/about/about-two.png" alt="About" />
                <div className="shape one">
                  <img style={{height: "100%", width:"100%"}} src="assets/images/logos/logo-two-white.png" alt="Shape" />
                </div>
            
         
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div className="about-content-four ps-xl-5 ms-xl-1">
                <div className="section-title mb-40">
                  <span className="subtitle mt-10 mb-15">About Us</span>
                  <h2>
                  Where real-world access meets digital influence.
                  </h2>
                </div>
                <p>
                CLIQUE was founded to bridge the gap between digital personalities and real-world opportunities. Built by creators, for creators, we know the struggle of booking gigs, negotiating fees, and getting noticed. Our team of engineers, marketers, and visionaries from top companies and universities is dedicated to making authentic, profitable connections easier than ever. At CLIQUE, we believe creators deserve simplicity, transparency, and control — and businesses deserve easy access to the right people. This is where it all clicks.
                </p>
                <div
           
                  className="theme-btn color-white hover-secondary mt-25"
                  data-hover="Learn More Us"
                >
                  <span>Learn More Us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Area end */}
      {/* Services Area start */}
      <Services2 />
      {/* Services Area end */}
      {/* Why Choose Us Area start */}
      <WhyChooseUs2 />
      {/* Why Choose Us Area end */}
      {/* Case Studies Area start */}

      {/* Case Studies Area end */}
      {/* Testimonials Area Start */}
      <section id="testimonials" className="testimonials-two-area rel z-1">
        <div
          className="container px-xl-5 bordered-x py-100"
          style={{
            backgroundImage: "url(assets/images/background/cta-bg-dots.png)",
          }}
        >
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div
                className="testimonials-content-two rmb-55"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-50">
                  <span className="subtitle mt-10 mb-15">Out Testimonials</span>
                  <h2>What Our Clients Say Us</h2>
                </div>
                <TestimonialsSlider3 />
                <div className="testimonial-dots pt-25" />
              </div>
            </div>
            <div className="col-lg-6 text-xl-end">
              <div
                className="testimonials-four-image-part"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/testimonials/testimonials.png"
                  alt="Testimonisls"
                />
                <div className="shape icon">
                  <i className="flaticon-quotation-mark" />
                </div>
     
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Area End */}
      {/* Working Process Area Start */}
      <WorkingProcess2 />
      {/* Working Process Area End */}
      {/* FAQ Area Start */}
      <Faq />
      {/* FAQ Area End */}
      {/* Blog Area start */}

      {/* Blog Area end */}
      {/* CTA Area Start */}
      <section className="cta-two-area mt-50 rel z-1">
        <div className="container px-sm-0 bordered-x pb-100">
          <div
            className="cta-two-wrap bgc-primary br-10"
            style={{
              backgroundImage: "url(assets/images/background/hero-bg-dots.png)",
            }}
          >
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div
                  className="cta-content-two rmb-55"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div className="section-title text-white mb-25">
                    <span className="subtitle mt-10 mb-15">
                      Let’s Boost Your Business 
                    </span>
                    <h2>We Are Ready to Boost Your Business &amp; Grow Sales</h2>
                    <p>Join Us to get more updates and tips</p>
                  </div>
                  <form className="newsletter-form" action="#">
                    <label htmlFor="news-email">
                      <i className="fas fa-envelope" />
                    </label>
                    <input
                      id="news-email"
                      type="email"
                      placeholder="Email Address"
                      required
                    />
                    <button
                      type="submit"
                      className="theme-btn bgc-secondary hover-secondary"
                      data-hover="Subscribe"
                    >
                      <span>Subscribe</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 text-xl-end">
                <div
                  className="cta-two-image-part"
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
               
                  <div className="shape logo">
                    <img
                      src="assets/images/logos/logo-two-white.png"
                      alt="Logo"
                      style={{width: "50px",height: "70px"}}
                    />
                  </div>
          

     
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Area End */}
    </RiddaLayout>
  );
};
export default page;
