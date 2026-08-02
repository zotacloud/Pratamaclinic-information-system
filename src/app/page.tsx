import { initialPatients } from "@/data/patients";
import { initialDoctors } from "@/data/doctors";
import { initialAppointments } from "@/data/appointments";
import StatCard from "@/components/dashboard/StatCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>

          <p className="text-gray-500">Clinic overview</p>
        </div>

        <p className="text-gray-500 mt-1">
          Welcome to Pratama Clinic Information System
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard
          title="Total Patients"
          value={initialPatients.length}
          color="text-blue-600"
        />

        <StatCard
          title="Total Doctors"
          value={initialDoctors.length}
          color="text-green-600"
        />

        <StatCard
          title="Appointments"
          value={initialAppointments.length}
          color="text-purple-600"
        />

        <StatCard
          title="Waiting"
          value={
            initialAppointments.filter(
              (appointment) => appointment.status === "Scheduled",
            ).length
          }
          color="text-orange-500"
        />
      </div>

      <div className="bg-white rounded-xl shadow border p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Appointments</h2>

        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3">Code</th>
              <th className="text-left py-3">Patient</th>
              <th className="text-left py-3">Doctor</th>
              <th className="text-left py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {initialAppointments.map((appointment) => {
              const patient = initialPatients.find(
                (p) => p.id === appointment.patientId,
              );

              const doctor = initialDoctors.find(
                (d) => d.id === appointment.doctorId,
              );

              return (
                <tr key={appointment.id} className="border-b hover:bg-gray-50">
                  <td className="py-4">{appointment.appointmentCode}</td>

                  <td>{patient?.name}</td>

                  <td>{doctor?.name}</td>

                  <td>{appointment.status}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
