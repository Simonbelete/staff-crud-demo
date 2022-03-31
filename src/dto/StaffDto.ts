import { StaffAttributes } from "models";

interface CreateStaffDto {
  name: string;
  age: number;
  email: string;
}

interface ResultStaffDto extends StaffAttributes {}

interface StaffDto extends CreateStaffDto {}

export type { StaffDto, CreateStaffDto, ResultStaffDto };
export default StaffDto;
