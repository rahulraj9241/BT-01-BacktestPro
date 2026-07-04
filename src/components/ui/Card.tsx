type CardProps = {
  children: React.ReactNode;
};

function Card({ children }: CardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-md">
      {children}
    </div>
  );
}

export default Card;
