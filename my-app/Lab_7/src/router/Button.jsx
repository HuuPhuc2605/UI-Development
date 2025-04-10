const Button = ({ style, onClick, children }) => {
  return (
    <button
      className={`${style} px-2 py-1 text-rose min-w-[100px] rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
