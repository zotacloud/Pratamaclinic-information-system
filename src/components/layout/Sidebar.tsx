export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-800 text-white p-6">
      <h1 className="text-xl font-bold mb-8">🏥 Clinic App</h1>

      <nav className="space-y-4">
        <p>🏠 Dashboard</p>
        <p>🧑 Patients</p>
        <p>👨 Doctors</p>
        <p>📅 Appointments</p>
      </nav>
    </aside>
  );
}
