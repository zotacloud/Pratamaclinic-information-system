type TableProps = {
  headers: string[];
  children: React.ReactNode;
};

export default function Table({ headers, children }: TableProps) {
  return (
    <div className="bg-white rounded-xl shadow border overflow-hidden">
      <table className="w-full">
        <thead className="bg-blue-600 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="text-left px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="[&>tr:nth-child(even)]:bg-gray-50 [&>tr:hover]:bg-blue-50">
          {children}
        </tbody>
      </table>
    </div>
  );
}
