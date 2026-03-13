import React, { useState, useEffect } from "react";
import * as Realm from "realm-web";
import emailjs from "@emailjs/browser";
import { handleFileUpload, isFormValid } from "./util";
import { jobsData } from "../Career/jobsData";

export default function Form() {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    fathersName: "",
    contactNumber: "",
    email: "",
    dob: "",
    gender: "",
    education: "",
    appliedFor: "",
    panCard: "",
    aadhaarCard: "",
    panCardFile: null, // for base64
    panCardFileUrl: "", // for stored cloudinary url
    aadhaarCardFile: null,
    aadhaarCardFileUrl: "", // for stored cloudinary url
    declaration: false,
    createdAt: new Date(),
  });
  const [uploading, setUploading] = useState({
    panCardFile: false,
    aadhaarCardFile: false,
  });

  useEffect(() => {
    const fetchCourses = async () => {
      // Extract static job titles from jobsData
      const staticJobs = jobsData.map((job) => ({
        _id: `static-${job.id}`,
        title: job.title,
      }));

      const app = new Realm.App({ id: "application-0-rpwpphv" });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const mongodb = app.currentUser.mongoClient("mongodb-atlas");
        const collection = mongodb.db("jobs").collection("data");
        const allCourses = await collection.find({}, { title: 1 });
        console.log("Fetched courses:", allCourses); // Debugging line

        // Merge MongoDB jobs with static jobs
        const mergedCourses = [...allCourses, ...staticJobs];
        setCourses(mergedCourses);
      } catch (err) {
        console.error(
          "Failed to fetch MongoDB jobs, using static jobs only:",
          err
        );
        // Fallback to static jobs if DB fetch fails
        setCourses(staticJobs);
      }
    };
    fetchCourses();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: reader.result,
        }));
      };
      reader.readAsDataURL(files[0]);

      setUploading((prev) => ({ ...prev, [name]: true }));

      handleFileUpload(e, setFormData, `${name}Url`)
        .catch((err) => {
          console.error(err);
          alert("Failed to saved Image.");
        })
        .finally(() => {
          setUploading((prev) => ({ ...prev, [name]: false }));
        });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid(formData)) return;

    if (!formData.panCardFileUrl || !formData.aadhaarCardFileUrl) {
      alert("Please wait for image uploads to finish");
      return;
    }

    const app = new Realm.App({ id: "application-0-rpwpphv" });
    const credentials = Realm.Credentials.anonymous();
    try {
      // 🔹 Send Email via EmailJS
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          fathers_name: formData.fathersName,
          contact_number: formData.contactNumber,
          email: formData.email,
          dob: formData.dob,
          gender: formData.gender,
          education: formData.education,
          applied_for: formData.appliedFor,
          pan_card: formData.panCard,
          aadhaar_card: formData.aadhaarCard,
          pan_image: formData.panCardFileUrl,
          aadhaar_image: formData.aadhaarCardFileUrl,
          declaration: formData.declaration ? "Yes" : "No",
          submitted_at: new Date().toLocaleString(),
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );

      const user = await app.logIn(credentials);
      const mongodb = app.currentUser.mongoClient("mongodb-atlas");
      const collection = mongodb.db("jobs").collection("form");
      await collection.insertOne(formData);

      alert("Form submitted successfully!");
    } catch (err) {
      console.error("Failed to submit form", err);
    }
  };

  const validateFile = (file) => {
    return file && file.type.startsWith("image/") && file.size <= 1048576;
  };

  const isUploading = uploading.panCardFile || uploading.aadhaarCardFile;

  return (
    <div className="container apply-now-container mt-3">
      <div className="row">
        <div className="col-md-12 mt-5 mb-3">
          <div className="row">
            <div className="col-md-12 text-center">
              <h2 className="">Apply Now</h2>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.name}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Father's Name</label>
                <input
                  type="text"
                  name="fathersName"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.fathersName}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Contact Number</label>
                <input
                  type="tel"
                  name="contactNumber"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.contactNumber}
                  maxLength="10"
                  pattern="[0-9]{10}"
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.email}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.dob}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Gender</label>
                <select
                  name="gender"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.gender}
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Education</label>
                <select
                  name="education"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.education}
                  style={{
                    borderRadius: "5px",
                  }}
                >
                  <option value="">Select</option>
                  <option value="High School">High School</option>
                  <option value="Graduate">Graduate</option>
                  <option value="Post Graduate">Post Graduate</option>
                </select>
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Applied For</label>
                <select
                  name="appliedFor"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.appliedFor}
                  style={{ borderRadius: "5px" }}
                >
                  <option value="">Select</option>
                  {courses.map((course) => (
                    <option key={course._id} value={course.title}>
                      {course.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Pan Card</label>
                <input
                  type="text"
                  name="panCard"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.panCard}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Aadhaar Card</label>
                <input
                  type="text"
                  name="aadhaarCard"
                  className="form-control"
                  required
                  onChange={handleChange}
                  value={formData.aadhaarCard}
                  style={{
                    backgroundColor: "#F9F9F9",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-6">
                <label className="col-form-label">Pan Card Upload</label>
                <input
                  type="file"
                  name="panCardFile"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    if (validateFile(e.target.files[0])) {
                      handleChange(e);
                    } else {
                      alert("File must be an image and less than 1 MB");
                      e.target.value = null;
                    }
                  }}
                  style={{ borderRadius: "5px" }}
                />
                {uploading.panCardFile && (
                  <span className="ms-2 spinner-border spinner-border-sm text-primary" />
                )}
              </div>
              <div className="col-md-6">
                <label className="col-form-label">Aadhar Card Upload</label>
                <input
                  type="file"
                  name="aadhaarCardFile"
                  accept="image/*"
                  required
                  onChange={(e) => {
                    if (validateFile(e.target.files[0])) {
                      handleChange(e);
                    } else {
                      alert("File must be an image and less than 1 MB");
                      e.target.value = null;
                    }
                  }}
                  style={{ borderRadius: "5px" }}
                />
                {uploading.aadhaarCardFile && (
                  <span className="ms-2 spinner-border spinner-border-sm text-primary" />
                )}
              </div>
              <div
                className="col-md-12 mt-5 mb-3 pb-2 pt-2"
                style={{ backgroundColor: "#CFE2FF" }}
              >
                <label className="col-form-label">
                  <h3>Declaration</h3>
                </label>
                <input
                  type="checkbox"
                  name="declaration"
                  id="declaration"
                  required
                  onChange={handleChange}
                  checked={formData.declaration}
                />
                <label
                  htmlFor="declaration"
                  style={{
                    display: "inline",
                    width: "100%",
                    cursor: "pointer",
                  }}
                >
                  &nbsp;I Declare that the name, class, date of birth, address
                  and other information given by me in the online application
                  form is correct to the best of my knowledge and belief. Which
                  I declare to be truely correct. If the above information is
                  found incomplete or incorrect, my candidature is liable to be
                  terminated at any time.
                </label>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-lg">
                  {isUploading ? "Uploading..." : "Submit"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
