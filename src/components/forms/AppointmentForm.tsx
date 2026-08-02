type AppointmentFormProps = {
  appointmentCode: string;
  patientId: number;
  doctorId: number;
  appointmentDate: string;
  appointmentTime: string;
  status: string;

  patients: {
    id: number;
    name: string;
  }[];

  doctors: {
    id: number;
    name: string;
  }[];

  setPatientId: (value: number) => void;
  setDoctorId: (value: number) => void;
  setAppointmentDate: (value: string) => void;
  setAppointmentTime: (value: string) => void;
  setStatus: (value: string) => void;
};

export default function AppointmentForm({
  appointmentCode,
  patientId,
  doctorId,
  appointmentDate,
  appointmentTime,
  status,
  patients,
  doctors,
  setPatientId,
  setDoctorId,
  setAppointmentDate,
  setAppointmentTime,
  setStatus,
}: AppointmentFormProps) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        value={appointmentCode}
        readOnly
        className="border rounded-lg px-4 py-2 w-full bg-gray-100"
      />

      <select
        value={patientId}
        onChange={(e) => setPatientId(Number(e.target.value))}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value={0}>Select Patient</option>

        {patients.map((patient) => (
          <option key={patient.id} value={patient.id}>
            {patient.name}
          </option>
        ))}
      </select>

      <select
        value={doctorId}
        onChange={(e) => setDoctorId(Number(e.target.value))}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value={0}>Select Doctor</option>

        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={appointmentDate}
        onChange={(e) => setAppointmentDate(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <input
        type="time"
        value={appointmentTime}
        onChange={(e) => setAppointmentTime(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value="Scheduled">Scheduled</option>
        <option value="Completed">Completed</option>
        <option value="Cancelled">Cancelled</option>
      </select>
    </div>
  );
}
