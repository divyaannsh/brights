import { Link } from "react-router-dom";

export default function BlogCard({ blog, isMarginBottom }) {
  return (
    <div
      key={blog._id}
      className={`col-md-6 col-lg-4 ${isMarginBottom ? "mb-4" : ""}`}
    >
      <Link
        to={blog.link}
        style={{ textDecoration: "none", color: "inherit" }}
        onClick={() => window.scrollTo(0, 0)}
      >
        <article
          className="post"
          style={{ height: "100%" }}
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          <figure className="feature-image">
            <img
              src={blog.image}
              alt={blog.title}
              style={{
                width: "100%",
                maxWidth: "450px",
                height: "auto",
                aspectRatio: "9/7.2",
                maxHeight: "360px",
                objectFit: "contain",
                background: "#f8f8f8",
                display: "block",
                margin: "0 auto",
              }}
            />
          </figure>
          <div className="entry-content" style={{ padding: "10px" }}>
            <h3 style={{ margin: 0 }}>{blog.title}</h3>
            <div className="entry-meta" style={{ marginTop: "5px" }}>
              <span className="posted-on">
                Posted On: <b>{new Date(blog.date).toLocaleDateString()}</b>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}
