"use client";

import { useState } from "react";

import Modal from "@/components/common/Modal";
import PatientForm from "@/components/forms/PatientForm";
import Button from "@/components/ui/Button";
import Table from "@/components/ui/Table";

import { initialPatients } from "@/data/patients";
import { Patient } from "@/types/patient";

export default function PatientsPage() {
  const [patients, setPatients] = useState<Patient[]>(initialPatients);

  const [medicalRecordNumber, setMedicalRecordNumber] = useState("");
  const [nik, setNik] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("Male");
  const [birthDate, setBirthDate] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");

  const clearForm = () => {
    setMedicalRecordNumber("");
    setNik("");
    setName("");
    setGender("Male");
    setBirthDate("");
    setPhone("");
    setAddress("");

    setEditingId(null);
    setIsModalOpen(false);
  };

  const openAddModal = () => {
    clearForm();

    setMedicalRecordNumber(`RM${String(patients.length + 1).padStart(4, "0")}`);

    setIsModalOpen(true);
  };

  const addPatient = () => {
    if (
      nik === "" ||
      name === "" ||
      birthDate === "" ||
      phone === "" ||
      address === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const newPatient: Patient = {
      id: patients.length + 1,
      medicalRecordNumber,
      nik,
      name,
      gender,
      birthDate,
      phone,
      address,
    };

    setPatients([...patients, newPatient]);

    clearForm();
  };

  const deletePatient = (id: number) => {
    const newPatients = patients.filter((patient) => patient.id !== id);

    setPatients(newPatients);
  };

  const editPatient = (id: number) => {
    const patient = patients.find((patient) => patient.id === id);

    if (!patient) return;

    setMedicalRecordNumber(patient.medicalRecordNumber);
    setNik(patient.nik);
    setName(patient.name);
    setGender(patient.gender);
    setBirthDate(patient.birthDate);
    setPhone(patient.phone);
    setAddress(patient.address);

    setEditingId(id);
    setIsModalOpen(true);
  };

  const updatePatient = () => {
    const updatedPatients = patients.map((patient) => {
      if (patient.id === editingId) {
        return {
          ...patient,
          medicalRecordNumber,
          nik,
          name,
          gender,
          birthDate,
          phone,
          address,
        };
      }

      return patient;
    });

    setPatients(updatedPatients);

    clearForm();
  };

  const filteredPatients = patients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(search.toLowerCase()) ||
      patient.nik.includes(search) ||
      patient.medicalRecordNumber.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>

        <Button onClick={openAddModal}>+ Add Patient</Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        title={editingId === null ? "Add Patient" : "Edit Patient"}
        onClose={clearForm}
      >
        <PatientForm
          medicalRecordNumber={medicalRecordNumber}
          nik={nik}
          name={name}
          gender={gender}
          birthDate={birthDate}
          phone={phone}
          address={address}
          setNik={setNik}
          setName={setName}
          setGender={setGender}
          setBirthDate={setBirthDate}
          setPhone={setPhone}
          setAddress={setAddress}
        />

        <div className="flex justify-end gap-2 mt-6">
          <Button onClick={clearForm}>Cancel</Button>

          <Button onClick={editingId === null ? addPatient : updatePatient}>
            {editingId === null ? "Save" : "Update"}
          </Button>
        </div>
      </Modal>

      <input
        type="text"
        placeholder="Search patient..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full mb-4"
      />

      <Table
        headers={[
          "MR Number",
          "NIK",
          "Name",
          "Gender",
          "Birth Date",
          "Phone",
          "Address",
          "Action",
        ]}
      >
        {filteredPatients.length > 0 ? (
          filteredPatients.map((patient) => (
            <tr key={patient.id}>
              <td className="p-4">{patient.medicalRecordNumber}</td>

              <td className="p-4">{patient.nik}</td>

              <td className="p-4">{patient.name}</td>

              <td className="p-4">{patient.gender}</td>

              <td className="p-4">{patient.birthDate}</td>

              <td className="p-4">{patient.phone}</td>

              <td className="p-4">{patient.address}</td>

              <td className="p-4">
                <div className="flex gap-2">
                  <Button onClick={() => editPatient(patient.id)}>Edit</Button>

                  <Button onClick={() => deletePatient(patient.id)}>
                    Delete
                  </Button>
                </div>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8} className="text-center py-6 text-gray-500">
              No patients found.
            </td>
          </tr>
        )}
      </Table>
    </div>
  );
}
