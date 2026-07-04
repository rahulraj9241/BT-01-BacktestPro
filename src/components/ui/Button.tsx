type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "success" | "secondary";
};

function Button({ children, onClick, variant = "primary" }: ButtonProps) {
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    success: "bg-green-600 hover:bg-green-700",
    secondary: "bg-slate-700 hover:bg-slate-600",
  };

  return (
    <button
      onClick={onClick}
      className={`${styles[variant]} text-white px-6 py-3 rounded-lg font-semibold transition`}
    >
      {children}
    </button>
  );
}

export default Button;
