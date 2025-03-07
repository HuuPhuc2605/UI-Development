import { useState } from "react";
import axios from "axios";

export default function UploadImage() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState("");

  const CLOUD_NAME = "dkzpfo8b2"; // Cloud Name của bạn
  const UPLOAD_PRESET = "phucpreset"; // Đặt đúng upload_preset của bạn
  const API_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file)); // Hiển thị ảnh xem trước
    }
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Vui lòng chọn ảnh trước khi tải lên!");
      return;
    }

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "phucpreset");  // Dùng đúng key "upload_preset"

    try {
      const res = await axios.post(API_URL, formData);
      setUploadedUrl(res.data.secure_url); // Lưu URL ảnh đã upload
      alert("Tải ảnh lên thành công!");
    } catch (error) {
      console.error("Lỗi upload:", error.response?.data || error.message);
      alert("Lỗi tải ảnh lên, vui lòng kiểm tra lại!");
    }
  };

  return (
    <div>
      <h2>Upload Ảnh lên Cloudinary</h2>
      <input type="file" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Preview" width="100" />}
      <button onClick={handleUpload}>Tải lên Cloudinary</button>

      {uploadedUrl && (
        <div>
          <p>Ảnh đã tải lên:</p>
          <img src={uploadedUrl} alt="Uploaded" width="150" />
        </div>
      )}
    </div>
  );
}
