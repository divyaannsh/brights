import { Link } from "react-router-dom";
import { blogs } from "../Blogs/blogData";
import BlogCard from "../Blogs/Card";

export default function RecentPosts() {
  return (
    <>
      <section className="blog-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5
                  className="dash-style"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  data-aos-once="true"
                >
                  FROM OUR BLOG
                </h5>
                <h2
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-once="true"
                >
                  OUR RECENT POSTS
                </h2>
                <p data-aos="fade-up" data-aos-delay="250" data-aos-once="true">
                  From insider tips and destination guides to the latest trends
                  in aviation, our blog is your go-to resource for planning
                  unforgettable journeys. Stay inspired, informed, and ready for
                  your next adventure with expert advice and stories from around
                  the globe.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {blogs.slice(0, 3).map((blog) => (
              <BlogCard blog={blog} key={blog._id} />
            ))}
          </div>
          <div className="row mt-4">
            <div className="col-md-12">
              <div className="text-center">
                <Link
                  to="/blogs"
                  className="btn btn-primary"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  VIEW ALL POSTS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
