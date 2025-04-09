import { useEffect, useState } from "react";

function APIOverview() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    title: "",
    address: "",
  });
  const [data, setData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  {
    /* false: thêm mới
    true: cập nhật */
  }
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetch("https://67ca6b86102d684575c5483b.mockapi.io/Review")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleThem = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "https://67ca6b86102d684575c5483b.mockapi.io/Review",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (response.ok) {
      const post = await response.json();
      setData((prev) => [post, ...prev]);
      alert("Thêm thành công");
      setForm({ name: "", position: "", title: "", address: "" });
    }
  };

  const handleXoa = async (id) => {
    const confirmDelete = confirm("Bạn có chắc chắn muốn xoá không?");
    if (!confirmDelete) return;

    const response = await fetch(
      `https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      setData(data.filter((item) => item.id !== id));
    }
  };

  const handleSua = (post) => {
    setForm({
      name: post.name,
      position: post.position,
      title: post.title,
      address: post.address,
    });
    setIsEditing(true);
    {
      /* mở form sửa */
    }
    setEditId(post.id);
  };

  const handleCapNhat = async (e) => {
    e.preventDefault();
    if (!editId) return;

    const response = await fetch(
      `https://67ca6b86102d684575c5483b.mockapi.io/Review/${editId}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      }
    );

    if (response.ok) {
      const updated = await response.json();
      setData((prev) =>
        prev.map((item) => (item.id === editId ? updated : item))
      );
      alert("Cập nhật thành công");
      setForm({ name: "", position: "", title: "", address: "" });
      setIsEditing(false);
      setEditId(null);
    }
  };

  return (
    <>
      <h1 className="text-5xl font-bold text-slate-900 ml-[300px]">
        {isEditing ? "Cập nhật công việc" : "Thêm công việc mới"}
      </h1>

      <form
        onSubmit={isEditing ? handleCapNhat : handleThem}
        className="text-2xl mx-auto flex flex-col gap-4 justify-between px-4 py-4 ml-64"
      >
        <p>Nhập họ và tên: </p>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="border-2 border-gray-500 rounded-lg px-2 py-2 w-2/5"
        />
        <p>Nhập chức vụ: </p>
        <input
          type="text"
          name="position"
          value={form.position}
          onChange={handleChange}
          className="border-2 border-gray-500 rounded-lg px-2 py-2 w-2/5"
        />
        <p>Nhập nghề nghiệp: </p>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="border-2 border-gray-500 rounded-lg px-2 py-2 w-2/5"
        />
        <p>Nhập địa chỉ: </p>
        <input
          type="text"
          name="address"
          value={form.address}
          onChange={handleChange}
          className="border-2 border-gray-500 rounded-lg px-2 py-2 w-2/5"
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="rounded-xl bg-green-700 text-white w-32 py-2 hover:bg-green-600"
          >
            {isEditing ? "Cập nhật" : "Thêm"}
          </button>

          {isEditing && (
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditId(null);
                setForm({ name: "", position: "", title: "", address: "" });
              }}
              className="rounded-xl bg-orange-400 text-white w-32 py-2 hover:bg-orange-300"
            >
              Huỷ
            </button>
          )}
        </div>
      </form>

      <h1 className="text-5xl text-center font-bold">Danh sách công việc</h1>
      <br />

      <div className="grid grid-cols-5 gap-8 px-10">
        {data.map((post) => (
          <div
            className="flex flex-col h-[300px] justify-between text-2xl bg-blue-200 px-4 py-4 rounded-xl shadow-xl shadow-stone-500 mb-8 mt-8"
            key={post.id}
          >
            <p>
              <span className="font-bold">Tên:</span> {post.name}
            </p>
            <p>
              <span className="font-bold">Chức vụ:</span> {post.position}
            </p>
            <p>
              <span className="font-bold">Nghề nghiệp:</span> {post.title}
            </p>
            <p>
              <span className="font-bold">Địa chỉ:</span> {post.address}
            </p>

            <div className="flex gap-2">
              <button
                onClick={() => handleSua(post)}
                className="w-1/2 bg-yellow-400 rounded-xl hover:bg-yellow-300 px-2 py-1"
              >
                Sửa
              </button>
              <button
                onClick={() => handleXoa(post.id)}
                className="w-1/2 bg-red-500 text-white rounded-xl hover:bg-red-300 px-2 py-1"
              >
                Xoá
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default APIOverview;
