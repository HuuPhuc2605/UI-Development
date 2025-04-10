import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Bell,
  Search,
  HelpCircle,
  LayoutDashboard,
  FileText,
} from "lucide-react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { Pencil, Trash2 } from "lucide-react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://67ca6b86102d684575c5483b.mockapi.io/Review")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Lỗi khi gọi API:", error));
  };

  const handleSubmit = (formData) => {
    const api = "https://67ca6b86102d684575c5483b.mockapi.io/Review";
    const isUpdate = !!modalData;
    const request = isUpdate
      ? axios.put(`${api}/${modalData.id}`, formData)
      : axios.post(api, formData);

    request
      .then(() => {
        fetchData();
        setIsModalOpen(false);
        setModalData(null);
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

  const totalTurnover = data.reduce(
    (sum, item) => sum + Number(item.order || 0),
    0
  );
  const totalProfit = (totalTurnover * 0.35).toFixed(0);
  const newCustomers = data.length;

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
    <div className="p-8 bg-white min-h-screen">
      <div></div>
      <header className="w-full flex justify-between items-center bg-white px-6 py-4 shadow-sm border-xl border-gray-500">
        {/* Left side */}
        <div className="text-2xl font-bold text-pink-500">Dashboard</div>

        {/* Right side */}
        <div className="flex items-center space-x-4">
          {/* Search bar */}
          <div className="relative">
            <span className="absolute left-3 top-2.5  text-gray-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 w-64 py-2 bg-gray-100 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
            />
          </div>

          {/* Bell icon */}
          <button className="text-gray-600 hover:text-pink-500">
            <Bell size={20} />
          </button>

          {/* Help icon */}
          <button className="text-gray-600 hover:text-pink-500">
            <HelpCircle size={20} />
          </button>

          {/* Avatar */}
          <img
            src="https://i.pravatar.cc/40?img=3"
            alt="Avatar"
            className="w-9 h-9 rounded-full border-2 border-pink-300"
          />
        </div>
      </header>
      <div className="h-[1px] bg-gray-200 w-full" />
      <div className="flex items-center space-x-2 mt-8">
        <LayoutDashboard className="w-10 h-10 text-pink-500" />
        <h1 className="text-2xl font-bold text-black-500">Overview</h1>
      </div>

      <div className=" mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="p-6 border rounded-xl shadow-sm border-pink-300 bg-pink-50">
          <div className="text-sm text-gray-500">Turnover</div>
          <div className="text-3xl font-bold text-black-700">
            ${totalTurnover}
          </div>
          <div className="text-green-600 text-sm mt-1">
            ▲ 5.39% period of change
          </div>
        </div>
        <div className="p-6 border rounded-xl shadow-sm border-blue-300 bg-blue-50">
          <div className="text-sm text-gray-500">Profit</div>
          <div className="text-3xl font-bold text-black-700">
            ${totalProfit}
          </div>
          <div className="text-green-600 text-sm mt-1">
            ▲ 5.39% period of change
          </div>
        </div>
        <div className="p-6 border rounded-xl shadow-sm border-indigo-300 bg-indigo-50">
          <div className="text-sm text-gray-500">New customer</div>
          <div className="text-3xl font-bold text-black-700">
            {newCustomers}
          </div>
          <div className="text-green-600 text-sm mt-1">
            ▲ 6.84% period of change
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2 mt-8">
          <FileText className="w-10 h-10 text-pink-500" />
          <h1 className="text-2xl font-bold text-black-500">Detailed report</h1>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setModalData(null);
              setIsModalOpen(true);
            }}
            className="flex items-center gap-2 px-4 py-2 text-pink-500 border border-pink-300 rounded-xl shadow-sm hover:bg-pink-50 bg-white transition duration-200"
          >
            {/* Optional icon: Add icon trước chữ nếu muốn */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Add New
          </button>
          <button
            onClick={handleBulkDelete}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 text-pink-500 border border-pink-300 rounded-xl shadow-sm hover:bg-pink-50 bg-white"
          >
            Import
          </button>
        </div>
      </div>

      <div className="overflow-x-auto rounded-2xl shadow border border-gray-200">
        <table className="min-w-full">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="text-left px-5 py-3 text-xs font-semibold text-gray-500 tracking-widest uppercase border-b"
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
                  <td
                    key={cell.id}
                    className="px-5 py-4 border-b text-sm text-gray-700"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-400 text-right mt-4">
        {data.length} results
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg">
            <h2 className="text-xl font-semibold mb-4">
              {modalData ? "Edit Customer" : "Add New Customer"}
            </h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const formData = {
                  name: form.name.value,
                  avatar: form.avatar.value,
                  company: form.company.value,
                  order: form.order.value,
                  date: form.date.value,
                  status: form.status.value,
                };
                handleSubmit(formData);
              }}
              className="space-y-4"
            >
              <input
                name="name"
                defaultValue={modalData?.name || ""}
                className="w-full border rounded px-4 py-2"
                placeholder="Name"
                required
              />
              <input
                name="avatar"
                defaultValue={modalData?.avatar || ""}
                className="w-full border rounded px-4 py-2"
                placeholder="Avatar URL"
                required
              />
              <input
                name="company"
                defaultValue={modalData?.company || ""}
                className="w-full border rounded px-4 py-2"
                placeholder="Company"
                required
              />
              <input
                name="order"
                defaultValue={modalData?.order || ""}
                className="w-full border rounded px-4 py-2"
                placeholder="Order Value"
                type="number"
                required
              />
              <input
                type="date"
                name="date"
                defaultValue={modalData?.date || ""}
                className="w-full border rounded px-4 py-2"
                placeholder="Order Date"
                required
              />

              <select
                name="status"
                defaultValue={modalData?.status || "New"}
                className="w-full border rounded px-4 py-2"
              >
                <option value="New">New</option>
                <option value="In progress">In progress</option>
                <option value="Completed">Completed</option>
              </select>
              <div className="flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  {modalData ? "Update" : "Create"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataTable;
