export const isFormValid = (formData) => {
  const requiredFields = [
    "name",
    "fathersName",
    "contactNumber",
    "email",
    "dob",
    "gender",
    "education",
    "appliedFor",
    "panCard",
    "aadhaarCard",
    "declaration",
  ];

  for (let field of requiredFields) {
    if (!formData[field]) {
      alert(`Please fill ${field.replace(/([A-Z])/g, " $1")}`);
      return false;
    }
  }

  return true;
};

export const uploadImageToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
  formData.append("upload_preset", UPLOAD_PRESET);

  const CLOUD_NAME = process.env.REACT_APP_CLOUD_NAME;
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();
  return data.secure_url;
};

export const handleFileUpload = async (e, setFormData, name) => {
  const file = e.target.files[0];

  const imageUrl = await uploadImageToCloudinary(file);

  setFormData((prev) => ({
    ...prev,
    [name]: imageUrl,
  }));
};
