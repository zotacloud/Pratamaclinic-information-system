import { Patient } from "@/types/patient";

export const initialPatients: Patient[] = [
  {
    id: 1,
    medicalRecordNumber: "RM0001",
    nik: "3173010101010001",
    name: "Muhammad",
    gender: "Male",
    birthDate: "2004-05-15",
    phone: "08123456789",
    address: "Bandung",
  },
  {
    id: 2,
    medicalRecordNumber: "RM0002",
    nik: "3173010101010002",
    name: "Siti",
    gender: "Female",
    birthDate: "2001-08-10",
    phone: "08111111111",
    address: "Jakarta",
  },
  {
    id: 3,
    medicalRecordNumber: "RM0003",
    nik: "3173010101010003",
    name: "Ahmad",
    gender: "Male",
    birthDate: "1998-12-20",
    phone: "08222222222",
    address: "Surabaya",
  },
];
