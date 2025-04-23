const StudentItem = ({ student, onEdit, onDelete }) => {
    return (
      <div className="p-4 bg-blue-100 rounded shadow space-y-2">
        <p><strong>Tên:</strong> {student.name}</p>
        <p><strong>Lớp:</strong> {student.class_name}</p>
        <p><strong>Tuổi:</strong> {student.age}</p>
        <div className="flex gap-2">
          <button
            onClick={onEdit}
            className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-300"
          >Sửa</button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
          >Xoá</button>
        </div>
      </div>
    );
  };
  
  export default StudentItem;
  