export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">
          Pratama Clinic Information System
        </h1>

        <p className="text-sm text-gray-500">
          Pratama Clinic Management Dashboard
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-right">
          <p className="font-medium text-gray-800">
            Muhammad Tauhid Ma'rifatullah
          </p>

          <p className="text-sm text-gray-500">Tauhid.admin@clinic.com</p>
        </div>

        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
          A
        </div>
      </div>
    </header>
  );
}
