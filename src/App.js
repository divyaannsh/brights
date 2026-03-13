import "./App.css";
import Navbar from "./components/Navbar/main";
import FrontPage from "./components/FrontPage/main";
import About from "./components/About/main";
import Contact from "./components/Contact/main";
import Career from "./components/Career/main";
import NotFoundPage from "./components/NotFoundPage/main";
import Footer from "./components/Footer/main";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage/main";
import ApplyPage from "./components/ApplyForm/main";
import Blogs from "./components/Blogs/main";
import Login from "./components/Login/main";
import SignUp from "./components/Signup/main";
import Services from "./components/Services/main";
import DomesticPackages from "./components/Tour/Domestic/main";
import DomesticPackageDetail from "./components/Tour/Domestic/DomesticPackageDetail";
import InternationalPackages from "./components/Tour/International/main";
import InternationalPackageDetail from "./components/Tour/International/InternationalPackageDetail";
import FAQ from "./components/Faq/main";
import TermsAndConditions from "./components/TermsAndConditions/main";
import Caution from "./components/Caution/main";
import Blog1 from "./components/Blogs/Pages/why-bright-airways-is-the-future-of-aviation-careers";
import Blog2 from "./components/Blogs/Pages/why-bright-airways-is-a-trusted-name-in-aviation-training-and-job-placement-in-india";
import Blog3 from "./components/Blogs/Pages/how-to-find-verified-aviation-jobs-in-india-2025-guide";
import Blog4 from "./components/Blogs/Pages/is-bright-airways-real-or-fake";

import NewBlog1 from "./components/Blogs/Pages/how-to-apply-for-bright-airways-cabin-crew-jobs-in-2026";
import NewBlog2 from "./components/Blogs/Pages/bright-airways-careers-guide";
import NewBlog3 from "./components/Blogs/Pages/aviation-jobs-at-bright-airways-overview";
import NewBlog4 from "./components/Blogs/Pages/bright-airways-ground-staff-recruitment";
import NewBlog5 from "./components/Blogs/Pages/airport-customer-support-jobs";
import TopLoader from "nextjs-toploader";

function App() {
  return (
    <Router>
      {/* Testing line for git check */}
      <TopLoader color="#F56960" showSpinner={false} height={4} />
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/apply-for-job" element={<ApplyPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domestic-packages" element={<DomesticPackages />} />
        <Route path="/tour/domestic/:id" element={<DomesticPackageDetail />} />
        <Route
          path="/international-packages"
          element={<InternationalPackages />}
        />
        <Route
          path="/tour/international/:id"
          element={<InternationalPackageDetail />}
        />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/caution" element={<Caution />} />
        <Route
          path="/blog/why-bright-airways-is-the-future-of-aviation-careers"
          element={<Blog1 />}
        />
        <Route
          path="/blog/why-bright-airways-is-a-trusted-name-in-aviation-training-and-job-placement-in-india"
          element={<Blog2 />}
        />
        <Route
          path="/blog/how-to-find-verified-aviation-jobs-in-india-2025-guide"
          element={<Blog3 />}
        />
        <Route
          path="/blog/is-bright-airways-real-or-fake"
          element={<Blog4 />}
        />
        <Route
          path="/blog/how-to-apply-for-bright-airways-cabin-crew-jobs-in-2026"
          element={<NewBlog1 />}
        />
        <Route
          path="/blog/bright-airways-careers-guide"
          element={<NewBlog2 />}
        />
        <Route
          path="/blog/aviation-jobs-at-bright-airways-overview"
          element={<NewBlog3 />}
        />
        <Route
          path="/blog/bright-airways-ground-staff-recruitment"
          element={<NewBlog4 />}
        />
        <Route
          path="/blog/airport-customer-support-jobs"
          element={<NewBlog5 />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
