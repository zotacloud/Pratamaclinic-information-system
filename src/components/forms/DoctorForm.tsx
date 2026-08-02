type DoctorFormProps = {
  doctorCode: string;
  name: string;
  specialization: string;
  phone: string;
  email: string;

  setName: (value: string) => void;
  setSpecialization: (value: string) => void;
  setPhone: (value: string) => void;
  setEmail: (value: string) => void;
};

export default function DoctorForm({
  doctorCode,
  name,
  specialization,
  phone,
  email,
  setName,
  setSpecialization,
  setPhone,
  setEmail,
}: DoctorFormProps) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Doctor Code"
        value={doctorCode}
        readOnly
        className="border rounded-lg px-4 py-2 w-full bg-gray-100"
      />

      <input
        type="text"
        placeholder="Doctor Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <select
        value={specialization}
        onChange={(e) => setSpecialization(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value="General Practitioner">General Practitioner</option>

        <option value="Pediatrician">Pediatrician</option>

        <option value="Cardiologist">Cardiologist</option>

        <option value="Dentist">Dentist</option>

        <option value="Neurologist">Neurologist</option>
      </select>

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />
    </div>
  );
}
