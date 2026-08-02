"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Modal from "@/components/common/Modal";
import Table from "@/components/ui/Table";
import AppointmentForm from "@/components/forms/AppointmentForm";

import { Appointment } from "@/types/appointment";
import { initialAppointments } from "../../data/appointments";
import { initialPatients } from "@/data/patients";
import { initialDoctors } from "@/data/doctors";

export default function AppointmentsPage() {
  const [appointments, setAppointments] =
    useState<Appointment[]>(initialAppointments);

  const [appointmentCode, setAppointmentCode] = useState("");
  const [patientId, setPatientId] = useState(0);
  const [doctorId, setDoctorId] = useState(0);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [status, setStatus] = useState("Scheduled");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const clearForm = () => {
    setAppointmentCode("");
    setPatientId(0);
    setDoctorId(0);
    setAppointmentDate("");
    setAppointmentTime("");
    setStatus("Scheduled");

    setEditingId(null);
    setIsModalOpen(false);
  };

  const openAddModal = () => {
    clearForm();

    setAppointmentCode(`AP${String(appointments.length + 1).padStart(3, "0")}`);

    setIsModalOpen(true);
  };

  const addAppointment = () => {
    if (
      patientId === 0 ||
      doctorId === 0 ||
      appointmentDate === "" ||
      appointmentTime === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newAppointment: Appointment = {
      id: appointments.length + 1,
      appointmentCode,
      patientId,
      doctorId,
      appointmentDate,
      appointmentTime,
      status,
    };

    setAppointments([...appointments, newAppointment]);

    clearForm();
  };

  const deleteAppointment = (id: number) => {
    setAppointments(
      appointments.filter((appointment) => appointment.id !== id),
    );
  };

  const editAppointment = (id: number) => {
    const appointment = appointments.find((a) => a.id === id);

    if (!appointment) return;

    setAppointmentCode(appointment.appointmentCode);
    setPatientId(appointment.patientId);
    setDoctorId(appointment.doctorId);
    setAppointmentDate(appointment.appointmentDate);
    setAppointmentTime(appointment.appointmentTime);
    setStatus(appointment.status);

    setEditingId(id);
    setIsModalOpen(true);
  };

  const updateAppointment = () => {
    const updatedAppointments = appointments.map((appointment) => {
      if (appointment.id === editingId) {
        return {
          ...appointment,
          appointmentCode,
          patientId,
          doctorId,
          appointmentDate,
          appointmentTime,
          status,
        };
      }

      return appointment;
    });

    setAppointments(updatedAppointments);

    clearForm();
  };

  const filteredAppointments = appointments.filter((appointment) => {
    const patient = initialPatients.find((p) => p.id === appointment.patientId);

    return patient?.name.toLowerCase().includes(search.toLowerCase()) ?? false;
  });

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Appointments</h1>

        <Button onClick={openAddModal}>+ Add Appointment</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingId === null ? "Add Appointment" : "Edit Appointment"}
        onClose={clearForm}
      >
        <AppointmentForm
          appointmentCode={appointmentCode}
          patientId={patientId}
          doctorId={doctorId}
          appointmentDate={appointmentDate}
          appointmentTime={appointmentTime}
          status={status}
          patients={initialPatients}
          doctors={initialDoctors}
          setPatientId={setPatientId}
          setDoctorId={setDoctorId}
          setAppointmentDate={setAppointmentDate}
          setAppointmentTime={setAppointmentTime}
          setStatus={setStatus}
        />

        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={clearForm}>Cancel</Button>

          <Button
            onClick={editingId === null ? addAppointment : updateAppointment}
          >
            {editingId === null ? "Save" : "Update"}
          </Button>
        </div>
      </Modal>

      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <Table
        headers={[
          "Code",
          "Patient",
          "Doctor",
          "Date",
          "Time",
          "Status",
          "Action",
        ]}
      >
        {filteredAppointments.length > 0 ? (
          filteredAppointments.map((appointment) => {
            const patient = initialPatients.find(
              (p) => p.id === appointment.patientId,
            );

            const doctor = initialDoctors.find(
              (d) => d.id === appointment.doctorId,
            );

            return (
              <tr key={appointment.id}>
                <td className="p-4">{appointment.appointmentCode}</td>

                <td className="p-4">{patient?.name}</td>

                <td className="p-4">{doctor?.name}</td>

                <td className="p-4">{appointment.appointmentDate}</td>

                <td className="p-4">{appointment.appointmentTime}</td>

                <td className="p-4">{appointment.status}</td>

                <td className="p-4">
                  <div className="flex gap-2">
                    <Button
                      className="bg-yellow-500 hover:bg-yellow-600"
                      onClick={() => editAppointment(appointment.id)}
                    >
                      Edit
                    </Button>

                    <Button
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => deleteAppointment(appointment.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={8} className="text-center py-10 text-gray-400">
              No appointment data available.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
