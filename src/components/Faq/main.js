import React from "react";
import Img from "../../assets/images/faq-banner.jpg";

export default function main() {
  return (
    <>
      <div className="container-fluid">
        <div className="row bg-dark" style={{ height: "155px" }}></div>
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      <img src={Img} alt="FAQ" className="d-block w-100" />
      <div className="container">
        <div className="ro">
          <h2 className="text-center mt-4 mb-4">FAQs</h2>
        </div>
      </div>
      <div className="container mb-4">
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="heading1">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What distinguishes Bright Airways from other airlines?
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseOne"
                  className="collapse"
                  aria-labelledby="heading1"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Bright Airways is a leading aviation and management services
                    company established in 2024. We strive to provide
                    exceptional services to our customers. Our API-integrated
                    booking system, user-friendly interface, and affordable
                    holiday packages set us apart from other airlines.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading2">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      How can I book a flight on Bright Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="heading2"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Booking a flight on Bright Airways is easy and hassle-free.
                    Simply select your trip type, flight class, departure and
                    destination, travel dates, and a number of passengers. Our
                    system will then search for available flights, and you can
                    book your tickets accordingly.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading3">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can I book a round trip with Bright Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="heading3"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Yes, you can easily book a round trip with Bright Airways by
                    selecting the round trip option when booking your tickets.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading4">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Is it possible to book multiple flights with Bright
                      Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFour"
                  className="collapse"
                  aria-labelledby="heading4"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Yes, you can book multiple flights with Bright Airways by
                    selecting the multi-trip option when booking your tickets.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading5">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      What is the refund policy for cancelled flights on Bright
                      Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFive"
                  className="collapse"
                  aria-labelledby="heading5"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Bright Airways offers refunds on cancelled flights subject
                    to certain conditions. For domestic flights, cancellation
                    must be made at least 3 hours before departure, and for
                    international flights, cancellation must be made no more
                    than 5 hours before departure. If the cancellation falls
                    within these time frames, a refund will be issued, minus any
                    cancellation fees.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading6">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSix"
                      aria-expanded="false"
                      aria-controls="collapseSix"
                    >
                      How can I get a refund for my cancelled flight to Bright
                      Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSix"
                  className="collapse"
                  aria-labelledby="heading6"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    If your ticket is refundable, you can get a refund by
                    deducting the cancellation fees. The refunded amount will be
                    credited to your bank account within 7 days.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading7">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      What kind of offers is available for booking through the
                      Bright Airways website?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseSeven"
                  className="collapse"
                  aria-labelledby="heading7"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Bright Airways offers a variety of travel packages with
                    different offers to suit your needs. To learn more about the
                    offers available, visit our tour and travel section.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading8">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseEight"
                    >
                      Can I request a reduction in price for a package without
                      any offers?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseEight"
                  className="collapse"
                  aria-labelledby="heading8"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Unfortunately, Bright Airways does not provide price
                    reductions for packages without offers. However, you can
                    choose to opt out of any offers provided with the package.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading9">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseNine"
                      aria-expanded="false"
                      aria-controls="collapseNine"
                    >
                      Are there economical travel packages for the lower middle
                      class?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseNine"
                  className="collapse"
                  aria-labelledby="heading9"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Bright Airways has designed its travel packages to cater to
                    everyone, including the lower middle class. To make it more
                    affordable, we offer a no-cost EMI option.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading10">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      Which airlines can I book through Bright Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTen"
                  className="collapse"
                  aria-labelledby="heading10"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Bright Airways currently partners with a range of airlines,
                    including Air India, Spicejet, Jet Airways, Spirit Airlines,
                    Avian Air, and Air Asia. We are constantly expanding our
                    partnerships with more airlines to provide you with more
                    options.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading11">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      Can I cancel my travel booking anytime with Bright
                      Airways?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseEleven"
                  className="collapse"
                  aria-labelledby="heading11"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Yes, you can cancel your travel booking anytime, but refund
                    policies apply. If you cancel beyond the given period, no
                    refund will be provided. If the cancellation falls within
                    the given time frame, you will receive a refund of
                    additional taxes after the deduction of cancellation fees.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading12">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      What are the available payment options for booking travel
                      packages?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseTwelve"
                  className="collapse"
                  aria-labelledby="heading12"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Various modes of payment are at your disposal for booking
                    travel packages, including credit and debit cards, net
                    banking, mobile banking, UPI, QR code scanning at the
                    airport, and EMI.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading13">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                    >
                      Can I reserve different class seats for a round-trip?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseThirteen"
                  className="collapse"
                  aria-labelledby="heading13"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    Unfortunately, it's not possible to book different class
                    seats for the same round-trip. Instead, you'll have to book
                    separate tickets for a one-way trip.
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="heading14">
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFourteen"
                      aria-expanded="false"
                      aria-controls="collapseFourteen"
                    >
                      What documents do I need if the booking is made using
                      someone else's card?
                    </button>
                  </h2>
                </div>
                <div
                  id="collapseFourteen"
                  className="collapse"
                  aria-labelledby="heading14"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    If someone else makes the booking, you'll need a valid ID
                    proof of the cardholder and a photocopy of the card from
                    both sides, excluding the CVV number. Failure to provide
                    these documents may result in you being barred from
                    travelling due to security reasons.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 d-flex justify-content-center align-items-center">
            <div
              className="card text-center"
              style={{
                backgroundColor: "#8B3EEA",
                color: "#fff",
                width: "18rem",
              }}
            >
              <div className="card-body pt-5 pb-5">
                <i
                  className="fas fa-phone-alt"
                  style={{ fontSize: "80px" }}
                ></i>
                <h4 className="card-title mt-3 text-white">Call 24x7</h4>
                <a
                  href="tel:01204564508"
                  className="card-link"
                  style={{
                    color: "#fff",
                    textDecoration: "none",
                    fontSize: "25px",
                  }}
                >
                  0120-456-4508
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
