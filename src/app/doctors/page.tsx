"use client";

import { useState } from "react";

import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";
import DoctorForm from "@/components/forms/DoctorForm";
import Modal from "@/components/common/Modal";

import { initialDoctors } from "@/data/doctors";
import { Doctor } from "@/types/doctor";

export default function DoctorsPage() {
  const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);

  const [doctorCode, setDoctorCode] = useState("");
  const [name, setName] = useState("");
  const [specialization, setSpecialization] = useState("General Practitioner");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [search, setSearch] = useState("");

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase()),
  );

  const clearForm = () => {
    setDoctorCode("");
    setName("");
    setSpecialization("General Practitioner");
    setPhone("");
    setEmail("");

    setEditingId(null);
    setIsModalOpen(false);
  };

  const openAddModal = () => {
    clearForm();

    setDoctorCode(`DR${String(doctors.length + 1).padStart(3, "0")}`);

    setIsModalOpen(true);
  };

  const addDoctor = () => {
    if (name === "" || phone === "" || email === "") {
      alert("Please fill all fields");
      return;
    }

    const newDoctor: Doctor = {
      id: doctors.length + 1,
      doctorCode,
      name,
      specialization,
      phone,
      email,
    };

    setDoctors([...doctors, newDoctor]);

    clearForm();
  };

  const deleteDoctor = (id: number) => {
    const newDoctors = doctors.filter((doctor) => doctor.id !== id);

    setDoctors(newDoctors);
  };

  const editDoctor = (id: number) => {
    const doctor = doctors.find((doctor) => doctor.id === id);

    if (!doctor) return;

    setDoctorCode(doctor.doctorCode);
    setName(doctor.name);
    setSpecialization(doctor.specialization);
    setPhone(doctor.phone);
    setEmail(doctor.email);

    setEditingId(id);
    setIsModalOpen(true);
  };

  const updateDoctor = () => {
    const updatedDoctors = doctors.map((doctor) => {
      if (doctor.id === editingId) {
        return {
          ...doctor,
          doctorCode,
          name,
          specialization,
          phone,
          email,
        };
      }

      return doctor;
    });

    setDoctors(updatedDoctors);

    clearForm();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Doctors</h1>

        <Button onClick={openAddModal}>+ Add Doctor</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingId === null ? "Add Doctor" : "Edit Doctor"}
        onClose={clearForm}
      >
        <DoctorForm
          doctorCode={doctorCode}
          name={name}
          specialization={specialization}
          phone={phone}
          email={email}
          setName={setName}
          setSpecialization={setSpecialization}
          setPhone={setPhone}
          setEmail={setEmail}
        />

        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={clearForm}>Cancel</Button>

          <Button onClick={editingId === null ? addDoctor : updateDoctor}>
            {editingId === null ? "Save" : "Update"}
          </Button>
        </div>
      </Modal>

      <input
        type="text"
        placeholder="Search doctor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full mb-4"
      />

      <Table
        headers={[
          "Doctor Code",
          "Name",
          "Specialization",
          "Phone",
          "Email",
          "Action",
        ]}
      >
        {filteredDoctors.length > 0 ? (
          filteredDoctors.map((doctor) => (
            <tr key={doctor.id}>
              <td className="p-4">{doctor.doctorCode}</td>
              <td className="p-4">{doctor.name}</td>
              <td className="p-4">{doctor.specialization}</td>
              <td className="p-4">{doctor.phone}</td>
              <td className="p-4">{doctor.email}</td>

              <td className="p-4">
                <div className="flex gap-2">
                  <Button onClick={() => editDoctor(doctor.id)}>Edit</Button>

                  <Button onClick={() => deleteDoctor(doctor.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6} className="text-center py-6">
              No doctors found.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
