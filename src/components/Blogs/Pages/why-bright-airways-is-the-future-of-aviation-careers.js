import React from "react";
import BannerImage from "../../../assets/images/aboutusbg.png";
import Banner from "../banner";

const Main = () => {
  return (
    <>
      <Banner
        img={BannerImage}
        title="Why Bright Airways is the Future of Aviation Careers"
      />
      <div className="container mt-4 mb-4">
        <article className="blog-article">
          <header className="mb-2">
            <h3 className="fw-bold">Introduction</h3>
            <p>
              The aviation industry in India is evolving rapidly, creating
              exciting new career opportunities for young aspirants. However,
              with increasing competition and the rise of online education
              platforms, finding a trustworthy and effective training partner
              has become more important than ever.
            </p>
            <p>
              <strong>Bright Airways</strong> is emerging as a revolutionary
              force in aviation education and career placement — blending
              quality training, verified job placements, and seamless travel
              services all under one roof. Here’s why Bright Airways is the
              future of aviation careers in India.
            </p>
          </header>

          <section className="mb-2">
            <h3 className="fw-semibold">
              1. Comprehensive Aviation Training Programs
            </h3>
            <p>
              Bright Airways offers a wide range of courses tailored to the
              needs of the aviation sector:
            </p>
            <ul>
              <li>Cabin Crew Training</li>
              <li>Ground Staff & Airline Ticket Agent</li>
              <li>Flight Attendant</li>
              <li>Airport Station Attendant</li>
              <li>Airline Cargo Handling Supervisor</li>
              <li>Airline Supervisor</li>
            </ul>
            <p>
              All courses are designed and delivered by industry experts with
              practical insights, making students job-ready from day one.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="fw-semibold">2. 100% Online Accessibility</h3>
            <p>
              Bright Airways leverages cutting-edge technology to deliver fully
              online courses, allowing students across India to access quality
              aviation education without geographical restrictions. This
              flexibility enables aspirants to learn at their own pace while
              managing other commitments.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="fw-semibold">
              3. Verified Job Placement Assistance
            </h3>
            <p>
              One of the biggest challenges for aviation aspirants is securing
              genuine jobs post-training. Bright Airways bridges this gap by:
            </p>
            <ul>
              <li>
                Partnering with verified airlines, airports, and travel agencies
              </li>
              <li>
                Providing dedicated placement support and interview preparation
              </li>
              <li>
                Hosting virtual job fairs and connecting students directly with
                employers
              </li>
            </ul>
          </section>

          <section className="mb-2">
            <h3 className="fw-semibold">4. Real-time Student Support</h3>
            <p>
              Bright Airways provides continuous support via live chat, calls,
              and emails to answer student queries, assist with admissions, and
              guide them through the placement process. This personalized
              approach ensures every student receives the attention they
              deserve.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="fw-semibold">
              5. Integrated Travel Booking Services
            </h3>
            <p>
              Unlike traditional academies, Bright Airways also offers an
              integrated travel booking platform for:
            </p>
            <ul>
              <li>Flight tickets</li>
              <li>Hotel reservations</li>
              <li>Tour packages</li>
            </ul>
            <p>
              This unique combination makes it a one-stop solution for aviation
              aspirants and travelers alike.
            </p>
          </section>

          <section className="mb-2">
            <h3 className="fw-semibold">
              6. Transparent and Trustworthy Brand
            </h3>
            <p>
              Bright Airways operates with full transparency — from course fees
              to placement guarantees. The brand is registered, compliant with
              legal regulations, and has received positive reviews from many
              successful students who have secured aviation jobs.
            </p>
          </section>

          <footer className="mt-2">
            <h3 className="fw-bold">Conclusion</h3>
            <p>
              In a fast-growing and competitive aviation sector, Bright Airways
              stands out as the future-ready platform that not only educates but
              empowers its students to succeed in aviation careers.
            </p>
            <p>
              If you’re looking to build a career in aviation with real
              training, genuine job placements, and trusted travel services,
              Bright Airways is your go-to partner.
            </p>
            <div className="text-center mt-2">
              <a
                href="https://brightairways.in"
                className="btn text-white btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: "#101F46" }}
              >
                Ready to take off? Start your aviation journey today!
              </a>
            </div>
          </footer>
        </article>
      </div>
    </>
  );
};

export default Main;
