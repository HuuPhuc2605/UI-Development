import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

const Overview = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    avatar: "",
    company: "",
    order: "",
    date: "",
    status: "New",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://67ca6b86102d684575c5483b.mockapi.io/Review")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const api = "https://67ca6b86102d684575c5483b.mockapi.io/Review";
    const isUpdate = !!modalData;
    const req = isUpdate
      ? axios.put(`${api}/${modalData.id}`, formState)
      : axios.post(api, formState);

    req
      .then(() => {
        fetchData();
        setModalData(null);
        setIsModalOpen(false);
        setFormState({
          name: "",
          avatar: "",
          company: "",
          order: "",
          date: "",
          status: "New",
        });
        alert(isUpdate ? "Cập nhật thành công!" : "Thêm mới thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi gửi dữ liệu:", error);
        alert("Đã xảy ra lỗi, vui lòng thử lại.");
      });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Bạn có chắc chắn muốn xoá mục này?");
    if (!confirmDelete) return;

    axios
      .delete(`https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`)
      .then(() => {
        fetchData();
        alert("Xoá thành công!");
      })
      .catch((error) => {
        console.error("Lỗi khi xoá dữ liệu:", error);
        alert("Lỗi khi xoá, vui lòng thử lại.");
      });
  };

  const handleBulkDelete = () => {
    if (selectedIds.length === 0) return;
    const confirmBulk = window.confirm(
      "Bạn có chắc chắn muốn xoá các mục đã chọn?"
    );
    if (!confirmBulk) return;

    Promise.all(
      selectedIds.map((id) =>
        axios.delete(`https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`)
      )
    )
      .then(() => {
        setSelectedIds([]);
        fetchData();
        alert("Đã xoá tất cả mục được chọn!");
      })
      .catch((error) => {
        console.error("Lỗi khi xoá hàng loạt:", error);
        alert("Có lỗi xảy ra khi xoá hàng loạt.");
      });
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const columns = [
    {
      id: "select",
      header: "",
      cell: ({ row }) => (
        <input
          type="checkbox"
          className="form-checkbox"
          checked={selectedIds.includes(row.original.id)}
          onChange={() => toggleSelect(row.original.id)}
        />
      ),
    },
    {
      accessorKey: "avatar",
      header: "CUSTOMER NAME",
      cell: ({ row }) => (
        <div className="flex items-center gap-3">
          <img
            src={row.original.avatar}
            alt="avatar"
            className="w-10 h-10 rounded-full border border-gray-300"
          />
          <span className="font-semibold text-gray-900">
            {row.original.name}
          </span>
        </div>
      ),
    },
    {
      accessorKey: "company",
      header: "COMPANY",
    },
    {
      accessorKey: "order",
      header: "ORDER VALUE",
      cell: ({ getValue }) => (
        <span className="font-medium text-gray-800">${getValue()}</span>
      ),
    },
    {
      accessorKey: "date",
      header: "ORDER DATE",
    },
    {
      accessorKey: "status",
      header: "STATUS",
      cell: ({ getValue }) => {
        const status = getValue();
        let color = "bg-gray-200 text-gray-700";
        if (status === "New") color = "bg-blue-100 text-blue-600";
        else if (status === "In progress")
          color = "bg-yellow-100 text-yellow-700";
        else if (status === "Completed") color = "bg-green-100 text-green-700";

        return (
          <span
            className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${color}`}
          >
            {status}
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "ACTIONS",
      cell: ({ row }) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              setModalData(row.original);
              setFormState(row.original);
              setIsModalOpen(true);
            }}
            className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <Pencil size={16} />
          </button>
          <button
            onClick={() => handleDelete(row.original.id)}
            className="p-2 rounded-full bg-red-100 hover:bg-red-200 text-red-600 hover:text-red-800 transition-colors"
          >
            <Trash2 size={16} />
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
    <div className="p-6 bg-white min-h-screen space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">API Overview</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 border rounded-lg p-4 shadow-sm"
      >
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Avatar URL"
          value={formState.avatar}
          onChange={(e) =>
            setFormState({ ...formState, avatar: e.target.value })
          }
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="text"
          placeholder="Company"
          value={formState.company}
          onChange={(e) =>
            setFormState({ ...formState, company: e.target.value })
          }
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Order Value"
          value={formState.order}
          onChange={(e) =>
            setFormState({ ...formState, order: e.target.value })
          }
          className="border rounded px-4 py-2 w-full"
          required
        />
        <input
          type="date"
          placeholder="Order Date"
          value={formState.date}
          onChange={(e) => setFormState({ ...formState, date: e.target.value })}
          className="border rounded px-4 py-2 w-full"
          required
        />
        <select
          value={formState.status}
          onChange={(e) =>
            setFormState({ ...formState, status: e.target.value })
          }
          className="border rounded px-4 py-2 w-full"
        >
          <option value="New">New</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="flex gap-2 col-span-full">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
          >
            {modalData ? "Update" : "Create"}
          </button>
          <button
            type="button"
            onClick={() => {
              setModalData(null);
              setFormState({
                name: "",
                avatar: "",
                company: "",
                order: "",
                date: "",
                status: "New",
              });
            }}
            className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
          >
            Clear
          </button>
          <button
            type="button"
            onClick={handleBulkDelete}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 text-red-600 border border-red-300 rounded hover:bg-red-100 disabled:opacity-50"
          >
            Delete Selected
          </button>
        </div>
      </form>

      <h2 className="text-2xl font-bold text-gray-800">DataTable </h2>
      <div className="overflow-x-auto border rounded-lg shadow-sm">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left px-4 py-2 text-sm text-gray-600 border-b"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3 border-b text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
