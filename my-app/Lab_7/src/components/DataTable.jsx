import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  {
    /* false: Đóng modal
  true: Mở modal */
  }
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://67ca6b86102d684575c5483b.mockapi.io/Review")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  };

  const handleEditClick = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const handleSave = () => {
    axios
      .put(
        `https://67ca6b86102d684575c5483b.mockapi.io/Review/${selectedRow.id}`,
        selectedRow
      )
      .then(() => {
        fetchData();
        setShowModal(false);
      })
      .catch((err) => console.error("Lỗi khi cập nhật:", err));
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá người này không?")) {
      axios
        .delete(`https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`)
        .then(() => {
          setData((prev) => prev.filter((item) => item.id !== id));
        })
        .catch((err) => console.error("Lỗi khi xoá:", err));
    }
  };

  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Họ và Tên" },
    { accessorKey: "title", header: "Email" },
    { accessorKey: "address", header: "Địa chỉ" },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="space-x-2">
          <button
            onClick={() => handleEditClick(row.original)}
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-1 px-2 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="text-center text-3xl font-bold">
      <p>Danh sách các thành viên</p>
      <br />
      <table className="border-collapse border border-gray-300 w-full text-base">
        <thead className="bg-green-200 h-16">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border-4 border-stone-900 p-2">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-blue-300">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="border-4 border-stone-900 p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {showModal && selectedRow && (
        <div className="fixed inset-0  flex items-center justify-center ">
          {/*fixed:Đặt phần tử ở vị trí cố định trên toàn màn hình
          inset-0: Set tất cả các cạnh (top, right, bottom, left) = 0 → phủ toàn màn hình*/}
          <div className="bg-white p-6 rounded-lg shadow-md w-[400px]">
            <h2 className="text-2xl font-bold mb-4 text-blue-700">
              Chỉnh sửa thông tin
            </h2>

            <div className="space-y-3 text-left">
              <div>
                <label className="text-sm font-medium">Họ và Tên:</label>
                <input
                  type="text"
                  value={selectedRow.name}
                  onChange={(e) =>
                    setSelectedRow({ ...selectedRow, name: e.target.value })
                  }
                  className="w-full border px-3 py-1 rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email:</label>
                <input
                  type="text"
                  value={selectedRow.title}
                  onChange={(e) =>
                    setSelectedRow({ ...selectedRow, title: e.target.value })
                  }
                  className="w-full border px-3 py-1 rounded"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Địa chỉ:</label>
                <input
                  type="text"
                  value={selectedRow.address}
                  onChange={(e) =>
                    setSelectedRow({
                      ...selectedRow,
                      address: e.target.value,
                    })
                  }
                  className="w-full border px-3 py-1 rounded"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 hover:bg-gray-400 text-black py-1 px-4 rounded"
              >
                Hủy
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-4 rounded"
              >
                Lưu
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
