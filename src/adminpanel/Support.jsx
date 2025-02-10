import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../Navbar";
import "../Style/Support.css";
import { Avatar } from "@mui/material";
import Footer from "../Footer.jsx"

const BlogsList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:30001/Blogposts?page=${page}&limit=4`)
      .then((response) => {
        setBlogs(response.data.blogs);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setError("Failed to load blogs.");
        setLoading(false);
      });
  }, [page]);

  const handleFilter = (category) => {
    setFilteredCategory(category);
  };

  const handleNextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const filteredBlogs =
    filteredCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === filteredCategory);

  const truncateHTML = (html, maxLength) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const plainText = div.textContent || div.innerText || "";
    return plainText.length > maxLength
      ? `${plainText.substring(0, maxLength)}...`
      : plainText;
  };

  if (loading)
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading blogs...</p>
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <>
      <div className="mainblogheading">
      <h1 style={{ paddingTop: "1px" }}></h1>

        <Navbar />
        <h1 className="blogheading">Hi! How can we Help?</h1>
      </div>
      <div className="py-5 bg-light">
        <h1 className="text-center supportheading">Support</h1>
        <div className="text-center my-4">
          <button className="btn btnoutline mx-2" onClick={() => handleFilter("All")}>
            All
          </button>
          {[...new Set(blogs.map((blog) => blog.category))].map((category) => (
            <button
              key={category}
              className="btn btnoutline mx-2"
              onClick={() => handleFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="container mt-9" style={{ marginTop: "100px" }}>
          {filteredBlogs.map((blog) => (
            <div key={blog._id} className="row mb-5">
              <div className="col-md-4">
                <img
                  className="img-fluid rounded"
                  src={
                    blog.blogImage
                      ? `http://localhost:30001/uploads/${blog.blogImage}`
                      : "default-placeholder.jpg"
                  }
                  alt={blog.title}
                />
              </div>
              <div className="col-md-8 d-flex flex-column justify-content-between">
                <div>
                  <p className="text-muted mb-1">
                    {blog.postDate} | <span className="badge bgcolor ms-2">{blog.category}</span>
                  </p>
                  <h2 className="h4 mb-3">{blog.title}</h2>
                  <p className="text-secondary">{truncateHTML(blog.body, 200)}</p>
                  <button
                    className="btn btn-link p-0"
                    onClick={() => navigate(`/BlogDetail/${blog._id}`)}
                  >
                    Read More
                  </button>
                </div>
                <hr className="my-3" />
                <div className="d-flex align-items-center">
                  <Avatar alt={blog.username} src={blog.userImage || "/default-avatar.jpg"} sx={{ width: 40, height: 40 }} />
                  <div className="ms-2">
                    <p className="mb-0 fw-bold">{blog.username}</p>
                    <p className="mb-0 text-muted">{blog.occupation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination-container">
          <button className="pagination-btn" onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </button>
          <span className="pagination-text">Page {page} of {totalPages}</span>
          <button className="pagination-btn" onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BlogsList;