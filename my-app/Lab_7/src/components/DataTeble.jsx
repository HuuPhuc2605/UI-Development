import React, { useEffect, useState } from "react";
import axios from "axios";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";

const DataTable = () => {
  const [data, setData] = useState([]); // State lưu dữ liệu từ API
  const [loading, setLoading] = useState(true); // Trạng thái tải dữ liệu

  // Gọi API khi component mount
  useEffect(() => {
    axios
      .get("https://67ca6b86102d684575c5483b.mockapi.io/Review") 
      .then((response) => {
        setData(response.data); // Lưu dữ liệu vào state
        setLoading(false); // Tắt trạng thái loading
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
        setLoading(false);
      });
  }, []);

  
  const columns = [
    { accessorKey: "id", header: "ID" },
    { accessorKey: "name", header: "Họ và Tên" },
    { accessorKey: "title", header: "Email" },
    { accessorKey: "description", header: "Số Điện Thoại" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (

    <table className="border-collapse border border-gray-300 w-full">
       
      <thead className="bg-green-200 text-boil h-16">
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className="border-4 border-stone-900 p-2">
                {flexRender(header.column.columnDef.header, header.getContext())}
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
  );
};

export default DataTable;
