
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import AdminNavbar from "./AdminNavbar";
import "../Style/Blogpost.css"
function EditBlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    postDate: "",
    category: "",
    username: "",
    occupation: "",
    title: "",
    body: "",
    blogImage: null,
  });

  useEffect(() => {
    fetchBlogDetails();
  }, []);

  const fetchBlogDetails = async () => {
    try {
      const response = await axios.get(`http://icellmobile.co.za:30001/Blogpost/${id}`);
      const { postDate, category, username, occupation, title, body } = response.data;
      setFormData({
        postDate,
        category,
        username,
        occupation,
        title,
        body,
        blogImage: null, // Keep null as we're not fetching the image for editing
      });
    } catch (error) {
      console.error("Error fetching blog details:", error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBodyChange = (value) => {
    setFormData((prevState) => ({
      ...prevState,
      body: value,
    }));
  };

  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      blogImage: e.target.files[0],
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updatedData = new FormData();
    updatedData.append("postDate", formData.postDate);
    updatedData.append("category", formData.category);
    updatedData.append("username", formData.username);
    updatedData.append("occupation", formData.occupation);
    updatedData.append("title", formData.title);
    updatedData.append("body", formData.body);
    if (formData.blogImage) {
      updatedData.append("blogImage", formData.blogImage);
    }

    try {
      await axios.put(`http://icellmobile.co.za:30001/Blogpost/${id}`, updatedData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/BlogTable");
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="container-fluid mt-2">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <form id="blogPostForm" onSubmit={handleUpdate}>
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title text-center">Edit Blog Post</h3>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Post Date</label>
                      <input
                        type="date"
                        className="form-control"
                        name="postDate"
                        value={formData.postDate}
                        required
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Category</label>
                      <input
                        className="form-control"
                        placeholder="Enter Category"
                        list="categories"
                        name="category"
                        value={formData.category}
                        required
                        onChange={handleFormChange}
                      />
                      <datalist id="categories">
                        <option value="Sale" />
                        <option value="Marketing" />
                        <option value="Frontend" />
                        <option value="Salesman" />
                      </datalist>
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Username</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Username"
                        name="username"
                        value={formData.username}
                        required
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Occupation</label>
                      <input
                        className="form-control"
                        placeholder="Enter Occupation"
                        name="occupation"
                        value={formData.occupation}
                        required
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Blog Title"
                        name="title"
                        value={formData.title}
                        required
                        onChange={handleFormChange}
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Body</label>
                      <ReactQuill
                        theme="snow"
                        value={formData.body}
                        onChange={handleBodyChange}
                        placeholder="Write your blog content here..."
                      />
                    </div>
                    <div className="col-md-12 mb-3">
                      <label className="form-label">Blog Image</label>
                      <input
                        type="file"
                        className="form-control"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary" type="submit">
                    Update Blog
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditBlogPost;