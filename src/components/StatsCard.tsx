import Card from "./ui/Card";

type StatsCardProps = {
  title: string;
  value: string;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card>
      <h4 className="text-slate-400 text-sm font-medium">{title}</h4>

      <h2 className="text-white text-3xl font-bold mt-3">{value}</h2>
    </Card>
  );
}

export default StatsCard;
