import React from "react";
import { Link } from "react-router-dom";
import { blogs } from "./blogData";
import BlogCard from "./Card";

export default function Main() {
  return (
    <>
      <div className="container-fluid bg-dark pb-5 pt-5">
        <div className="container-fluid bg-dark pb-5 pt-3"></div>
      </div>
      <div className="container mb-5 pb-5 blog-section">
        <div className="section-heading text-center pt-5">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <h2>All POSTS</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {blogs.map((blog) => (
            <BlogCard blog={blog} key={blog._id} isMarginBottom={true} />
          ))}
        </div>
      </div>
    </>
  );
}
