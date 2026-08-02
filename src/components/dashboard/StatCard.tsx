type StatCardProps = {
  title: string;
  value: number;
  color: string;
};

export default function StatCard({ title, value, color }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl shadow border p-6">
      <p className="text-gray-500 text-sm">{title}</p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>{value}</h2>
    </div>
  );
}
