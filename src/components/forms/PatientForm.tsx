type PatientFormProps = {
  medicalRecordNumber: string;
  nik: string;
  name: string;
  gender: string;
  birthDate: string;
  phone: string;
  address: string;

  setNik: (value: string) => void;
  setName: (value: string) => void;
  setGender: (value: string) => void;
  setBirthDate: (value: string) => void;
  setPhone: (value: string) => void;
  setAddress: (value: string) => void;
};

export default function PatientForm({
  medicalRecordNumber,
  nik,
  name,
  gender,
  birthDate,
  phone,
  address,
  setNik,
  setName,
  setGender,
  setBirthDate,
  setPhone,
  setAddress,
}: PatientFormProps) {
  return (
    <div className="space-y-3">
      <input
        type="text"
        placeholder="Medical Record Number"
        value={medicalRecordNumber}
        readOnly
        className="border rounded-lg px-4 py-2 w-full bg-gray-100"
      />

      <input
        type="text"
        placeholder="NIK"
        value={nik}
        onChange={(e) => setNik(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <input
        type="text"
        placeholder="Patient Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <select
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      >
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />

      <textarea
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
        rows={3}
      />
    </div>
  );
}
