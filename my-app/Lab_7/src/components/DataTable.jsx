import React, { useEffect, useState } from "react";
import axios from "axios";
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

  const handleDelete = (id) => {
    axios
      .delete(`https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`)
      .then(() => fetchData())
      .catch((error) => console.error("Lỗi khi xoá dữ liệu:", error));
  };

  const handleBulkDelete = () => {
    Promise.all(
      selectedIds.map((id) =>
        axios.delete(`https://67ca6b86102d684575c5483b.mockapi.io/Review/${id}`)
      )
    )
      .then(() => {
        setSelectedIds([]);
        fetchData();
      })
      .catch((error) => console.error("Lỗi khi xoá hàng loạt:", error));
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalTurnover = data.reduce((sum, item) => sum + Number(item.order || 0), 0);
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
        else if (status === "In progress") color = "bg-yellow-100 text-yellow-700";
        else if (status === "Completed") color = "bg-green-100 text-green-700";

        return (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide ${color}`}>
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

  const handleSubmit = (formData) => {
    const api = "https://67ca6b86102d684575c5483b.mockapi.io/Review";
    const req = modalData
      ? axios.put(`${api}/${modalData.id}`, formData)
      : axios.post(api, formData);

    req.then(() => {
      setIsModalOpen(false);
      setModalData(null);
      fetchData();
    });
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="text-3xl font-bold text-pink-600 mb-6">Dashboard</div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="p-6 border rounded-xl shadow-sm border-pink-300 bg-pink-50">
          <div className="text-sm text-gray-500">Turnover</div>
          <div className="text-3xl font-bold text-pink-700">${totalTurnover}</div>
          <div className="text-green-600 text-sm mt-1">▲ 5.39% period of change</div>
        </div>
        <div className="p-6 border rounded-xl shadow-sm border-blue-300 bg-blue-50">
          <div className="text-sm text-gray-500">Profit</div>
          <div className="text-3xl font-bold text-blue-700">${totalProfit}</div>
          <div className="text-green-600 text-sm mt-1">▲ 5.39% period of change</div>
        </div>
        <div className="p-6 border rounded-xl shadow-sm border-indigo-300 bg-indigo-50">
          <div className="text-sm text-gray-500">New customer</div>
          <div className="text-3xl font-bold text-indigo-700">{newCustomers}</div>
          <div className="text-green-600 text-sm mt-1">▲ 6.84% period of change</div>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <div className="text-xl font-semibold">📋 Detailed report</div>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setModalData(null);
              setIsModalOpen(true);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Add New
          </button>
          <button
            onClick={handleBulkDelete}
            disabled={selectedIds.length === 0}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50"
          >
            Delete Selected
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
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-5 py-4 border-b text-sm text-gray-700">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-sm text-gray-400 text-right mt-4">{data.length} results</div>

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