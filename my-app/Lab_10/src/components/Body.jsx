import { useEffect, useState } from "react";
import StudentItem from "./StudentItem";

function StudentManager() {
  const API = "https://67ca6b86102d684575c5483b.mockapi.io/Lab4";

  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", class_name: "", age: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [deleteName, setDeleteName] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterClass, setFilterClass] = useState("");

  useEffect(() => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => setStudents(res));
  }, []);

  const openAddModal = () => {
    setForm({ name: "", class_name: "", age: "" });
    setEditId(null);
    setIsEditing(false);
    setModalOpen(true);
  };

  const openEditModal = (student) => {
    setForm({ name: student.name, class_name: student.class_name, age: student.age });
    setEditId(student.id);
    setIsEditing(true);
    setModalOpen(true);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const method = isEditing ? "PUT" : "POST";
    const url = isEditing ? `${API}/${editId}` : API;

    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      const result = await response.json();
      if (isEditing) {
        setStudents((prev) => prev.map((s) => (s.id === editId ? result : s)));
        alert("Cập nhật thành công!");
      } else {
        setStudents((prev) => [result, ...prev]);
        alert("Thêm thành công!");
      }
      setModalOpen(false);
      setForm({ name: "", class_name: "", age: "" });
      setEditId(null);
      setIsEditing(false);
    }
  };

  const confirmDeleteStudent = (student) => {
    setDeleteId(student.id);
    setDeleteName(student.name);
    setConfirmDelete(true);
  };

  const handleDelete = async () => {
    if (!deleteId) return;
    const response = await fetch(`${API}/${deleteId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      setStudents((prev) => prev.filter((s) => s.id !== deleteId));
      alert("Xoá thành công!");
      setConfirmDelete(false);
      setDeleteId(null);
      setDeleteName("");
    }
  };

  const filteredStudents = students.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesClass = filterClass ? s.class_name === filterClass : true;
    return matchesSearch && matchesClass;
  });

  const classOptions = [...new Set(students.map((s) => s.class_name))];

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Quản lý sinh viên</h1>
        <button
          onClick={openAddModal}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Thêm học sinh
        </button>
      </div>

      <div className="flex gap-4 mt-6">
        <input
          type="text"
          placeholder="Tìm theo tên..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border px-3 py-2 rounded w-1/3"
        />
        <select
          value={filterClass}
          onChange={(e) => setFilterClass(e.target.value)}
          className="border px-3 py-2 rounded w-1/4"
        >
          <option value="">Tất cả lớp</option>
          {classOptions.map((cls, idx) => (
            <option key={idx} value={cls}>{cls}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        {filteredStudents.map((s) => (
          <StudentItem
            key={s.id}
            student={s}
            onEdit={() => openEditModal(s)}
            onDelete={() => confirmDeleteStudent(s)}
          />
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Chỉnh sửa học sinh" : "Thêm học sinh"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Họ tên"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="class_name"
                placeholder="Tên lớp"
                value={form.class_name}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <input
                name="age"
                type="number"
                placeholder="Tuổi"
                value={form.age}
                onChange={handleChange}
                required
                className="w-full border px-3 py-2 rounded"
              />
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="w-1/2 bg-green-600 text-white py-2 rounded"
                >{isEditing ? "Cập nhật" : "Thêm"}</button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="w-1/2 bg-gray-300 py-2 rounded"
                >Huỷ</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {confirmDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Xác nhận xoá</h2>
            <p className="text-center mb-4">Bạn có chắc muốn xoá học sinh <strong>{deleteName}</strong> không?</p>
            <div className="flex justify-between">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white w-1/2 py-2 rounded hover:bg-red-400"
              >Xoá</button>
              <button
                onClick={() => { setConfirmDelete(false); setDeleteId(null); setDeleteName(""); }}
                className="bg-gray-400 w-1/2 py-2 rounded hover:bg-gray-300"
              >Huỷ</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentManager;
