import { Appointment } from "@/types/appointment";

export const initialAppointments: Appointment[] = [
  {
    id: 1,
    appointmentCode: "AP001",
    patientId: 1,
    doctorId: 1,
    appointmentDate: "2026-08-05",
    appointmentTime: "09:00",
    status: "Scheduled",
  },
  {
    id: 2,
    appointmentCode: "AP002",
    patientId: 2,
    doctorId: 2,
    appointmentDate: "2026-08-05",
    appointmentTime: "10:00",
    status: "Completed",
  },
];
