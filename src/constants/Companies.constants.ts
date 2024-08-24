import { StaticImageData } from "next/image";
import MizbanLogo from "../../public/images/Mizban-logo.jpeg";
import ParkFanavariPardis from "../../public/images/Park-Fanavari-Pardis.jpeg";

export interface ICompanyInfoProps {
  id: string;
  image: string | StaticImageData;
  role: string;
  companyName: string;
  location: string;
  startDate: string;
  endData: string | "present";
  jobType: "Remote" | "Hybrid" | "On-site";
}

export const COMPANIES_DATA: ICompanyInfoProps[] = [
  {
    id: "1",
    image: ParkFanavariPardis,
    companyName: "Pardis Technology Park",
    jobType: "Remote",
    location: "Tehran, Iran",
    role: "Frontend Developer",
    startDate: "2023",
    endData: "present",
  },
  {
    id: "2",
    image: MizbanLogo,
    companyName: "Mizban",
    jobType: "Hybrid",
    location: "Tehran, Iran",
    role: "Frontend Developer",
    startDate: "2021",
    endData: "2023",
  },
];
