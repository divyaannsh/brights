import React from "react";
import Banner from "./Banner";
import BrandSlider from "../FrontPage/BrandSlider";
import Card from "./card";
import { Helmet } from "react-helmet";

export default function main() {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions - Bright Airways</title>
      </Helmet>
      <Banner />
      <div className="container">
        <div className="row mt-5">
          <div className="col-md-12">
            <h2>Payment Terms & Methods:-</h2>
            <p>
              For all the services contracted, certain advance payment should be made to hold the booking, on confirmed basis & the balance amount can be paid either before your departure from your country or upon arrival in INDIA but definitely before the commencement of the services. Management personnel’s hold the right to decide upon the amount to be paid as advance payment, based on the nature of the service & the time left for the commencement of the service.
            </p>
            <ul>
              <li>Payment 10% of the package amount needs to pay in advance while making a booking.</li>
              <li>Payment 45% of total amount to be paid within 3 to 5 Days of booking date.</li>
              <li>Payment 25% of total amount to be paid after hotel & cab confirmation.</li>
              <li>Payment rest 20% amount need to be paid on the 1st day of the trip.</li>
              <li>Discounts and vouchers will be available to the users on every holiday package.</li>
            </ul>
            <p>
              Apart from above in some cases like Special Train Journeys, Bus, hotels or resorts bookings during the peak season, full payment is required to be sent in advance.
            </p>
            <h2>Package Cancellation:-</h2>
            <ul>
              <li>25 to 30 days before the departure date, no cancellation fees.</li>
              <li>In case of cancellation 25 days prior to travel 10% cancellation to full package will be levied.</li>
              <li>In case of cancellation 20 days prior to travel 20% cancellation to full package will be levied.</li>
              <li>50% cancellation fees will refund if the cancellation is within 4 days.</li>
              <li>30% cancellation fees will refund if the cancellation is within 3 days.</li>
              <li>No refund policy after 48 hrs of Booking.</li>
            </ul>
            <p>
              If the departing date is within 10 days, then full payment needs to pay at the time of booking.
            </p>
            <h2>Flight reservation policies:-</h2>
            <ul>
              <li>Your reservation will confirm after the full payment.</li>
              <li>Your seat can be given to anyone without prior notice if you book it without making the payment.</li>
              <li>A non-reservation seat always comes under unreserved status.</li>
              <li>So a user should keep track of his tentative booking before making the full payment.</li>
            </ul>
            <h2>Flight cancellation:-</h2>
            <ul>
              <li>If a cancellation request is under 30 to 40 days, cancellation fees will be 25%.</li>
              <li>If a cancellation request is under 15 to 30 days, cancellation fees will be 50%.</li>
              <li>If a cancellation request is under 15 days, Then no refund will be given by the company.</li>
            </ul>
            <h2>Amendments if made by users:-</h2>
            <ul>
              <li>The company has full authority and is liable to recover cancellation fees as mentioned earlier, If a user cancels or amends his trips on personal issues, non-payment issues, accidents & injuries, and changes in plans.</li>
              <li>A written application is mandatory before amending or changing the original travel plans or booking, All the cancellation fees will be subject to the travel packages and booking provided by Bright Airways. It doesn't cover services provided on our websites by third parties vendors.</li>
              <li>Bright Airways doesn't have its airlines, so the change made by the airlines is solely on them, which includes changing in flight timing or cancellation due to bad weather. In that case, cancellation fees will be as per the airline's terms and conditions.</li>
              <li>If a user avails of any third-party services on the Bright Airways site but for some reason cancels the services. Then Bright Airways is liable to recover cancellation fees as per the terms and conditions of the respective third party.</li>
            </ul>
            <h2>Travel Conditions:-</h2>
            <ul>
              <li>A traveller needs to follow the holiday package provided by the company throughout the journey.</li>
              <li>Bright Airways will not be responsible for any misfortunate events that happen by any amendments or changes made by the client on their own during the journey.</li>
              <li>There won't be any refund if the traveler doesn't avail or fail to avail of the services provided within the holiday package for whatsoever reasons.</li>
              <li>Bright Airways will not be responsible if a client loses their luggage or documents during the travel. Bright Airways can amend changes before or on the travel plans, and the client has to follow the same.</li>
              <li>Bright Airways is liable to cancel the tour of such travelers whose behavior affects others or our officials.</li>
              <li>We have legal rights in such cases to take action against that traveller.</li>
              <li>Bright Airways has full right to update or revise the prices of the travel packages and services provided to the clients.</li>
              <li>Any case against the company does not bring within seven days from the last day of the tour. Then it is discharged from any form of legal liabilities from the concerned client as per the contract.</li>
              <li>In case of any new service launched by Bright Airways,</li>
              <li>We can update or relinquish it anytime, but if a user has availed of any such service while the offer is valid, he will be eligible to get the benefit.</li>
            </ul>
            <h2>Deal Of the Day Terms and Conditions:-</h2>
            <ul>
              <li>GST shall be applicable over and above the package prices.</li>
              <li>Your e-tickets will be sent 3 days before departure in case of fixed departure.</li>
              <li>Above rates are Net and Non Commissionable.</li>
              <li>The package price does not include â€“ Expenses of personal nature, such as laundry, telephone calls, room service, alcoholic beverages, mini bar charges, tips, portage, camera fees etc.</li>
              <li>Meal plan: EP - Accommodation only, CP - Accommodation with breakfast, MAP - Accommodation with breakfast, lunch or dinner, AP - Accommodation with breakfast, lunch & dinner.</li>
              <li>Airline seats and hotel rooms are subject to availability at the time of booking.</li>
              <li>In case of any Visa denial or any delay in Visa process we shall not be resonsible for any loss due to the same and no refund will be applicable. Visa approval and process duration is as per consulate / embassy descretion. We cannot guarantee if visa shall be granted and duration to process the same.</li>
              <li>In case of unavailability in the listed hotels, arrangement for an alternate accommodation will be made in a hotel of similar standard.</li>
              <li>Transportation shall be provided as per the itinerary and will not be at disposal.( AC will not work on hills )</li>
              <li>Package rates are subject to change without prior notice, Force Majeure events, strikes, fairs, festivals, weather conditions, traffic problems, overbooking of hotels / flights, cancellation / re-routing of flights, closure of / entry restrictions at a place of visit, etc. While we will do our best to make suitable alternate arrangements, we would not be held liable for any refunds/compensation claims arising out of this.</li>
              <li>It is mandatory for all guests to carry valid photo IDâ€™s (Passport/Driving License/Voter ID Card). PAN Card is not accepted at many places as a valid photo ID.</li>
              <li>Cancellation charges will be calculated on gross tour cost and the cancellation charges shall depend on date of departure and date of cancellation.</li>
              <li>Cancellation charges for any type of transport ticket are applicable as per the rules of the concerned authority.</li>
              <li>Air tickets issued on special fares are NON REFUNDABLE and Guest shall bear cancellation charges.</li>
              <li>Any refund payable to the Guest (if any applicable as per cancellation policy) will be paid after the Company receives refund from the respective authorities. The Company deducts processing charges from the refund to be paid to the Guest.</li>
              <li>From 1 June 2016 onwards if any invoice amount is above 2 lacs and mode of payment full or partial is in cash (cash paid at counter or deposited in bank) 1% TCS will be applicabke and to be deposited extra on total amount and PAN card copy has to be shared.</li>
              <li>Also do read booking procedure which is given in every package details.</li>
            </ul>
            <h2>Website using terms and conditions:-</h2>
            <p>
              PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THIS WEBSITE. IF YOU DO NOT AGREE WITH THESE TERMS AND CONDITIONS, YOU MUST DISCONTINUE USING THIS WEBSITE.
            </p>
            <p>
              Thank you for visiting www.brightairways.in. The website is owned and operated by Bright Airways, headquartered. 10A, IOC Colony, Sector 10, Gurgaon 122001. Bright Airways is committed to providing world-class air travel services.
            </p>
            <p>
              By accessing and using this Website, you unconditionally and irrevocably confirm, agree, and accept all of the terms and conditions contained here in. These terms and conditions shall constitute a legally binding contract between Bright Airways and you as a customer.
            </p>
            <p>
              Hotel and other activities’ own policies and terms and condition may also apply. Please refer to the information provided at the time of booking.
            </p>
            <p>
              Customers must not:– please don't use the Website to make any speculative, false, or fraudulent booking.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
