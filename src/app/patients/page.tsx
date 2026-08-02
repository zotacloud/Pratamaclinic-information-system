"use client";
import { initialPatients } from "@/data/patients";
import Table from "@/components/ui/Table";
import Button from "@/components/ui/Button";
import { useState } from "react";

export default function PatientsPage() {
  const [patients, setPatients] = useState(initialPatients);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");
  const addPatient = () => {
    if (name === "" || age === "" || phone === "") {
      alert("Please fill all fields");
      return;
    }
    const newPatient = {
      id: patients.length + 1,
      name,
      age: Number(age),
      gender,
      phone,
    };

    setPatients([...patients, newPatient]);

    setName("");
    setAge("");
    setGender("Male");
    setPhone("");
  };
  const deletePatient = (id: number) => {
    const newPatients = patients.filter((patient) => patient.id !== id);

    setPatients(newPatients);
  };

  const [editingId, setEditingId] = useState<number | null>(null);
  const editPatient = (id: number) => {
    const patient = patients.find((patient) => patient.id === id);

    if (!patient) return;

    setName(patient.name);
    setAge(String(patient.age));
    setGender(patient.gender);
    setPhone(patient.phone);

    setEditingId(id);
  };

  const updatePatient = () => {
    const updatedPatients = patients.map((patient) => {
      if (patient.id === editingId) {
        return {
          ...patient,
          name,
          age: Number(age),
          gender,
          phone,
        };
      }

      return patient;
    });

    setPatients(updatedPatients);

    setName("");
    setAge("");
    setGender("Male");
    setPhone("");

    setEditingId(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Patients</h1>

        <Button onClick={addPatient}>+ Add Patient</Button>
      </div>

      <div className="mb-6 space-y-3">
        <input
          type="text"
          placeholder="Patient Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />

        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />

        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        >
          <option>Male</option>
          <option>Female</option>
        </select>

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded-lg px-4 py-2 w-full"
        />
      </div>

      <Table headers={["Name", "Age", "Gender", "Phone", "Action"]}>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td className="p-4">{patient.name}</td>

            <td className="p-4">{patient.age}</td>

            <td className="p-4">{patient.gender}</td>

            <td className="p-4">{patient.phone}</td>

            <td className="p-4 space-x-2">
              <Button onClick={() => editPatient(patient.id)}>Edit</Button>

              <Button onClick={() => deletePatient(patient.id)}>Delete</Button>

              <Button onClick={editingId === null ? addPatient : updatePatient}>
                {editingId === null ? "+ Add Patient" : "Update Patient"}
              </Button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
