import { Staff } from "models";
import { ResultStaffDto, StaffDto } from "dto";

const getAll = async (): Promise<ResultStaffDto[]> => {
  return await Staff.findAll();
};

const create = async (staff: StaffDto): Promise<ResultStaffDto | null> => {
  return await Staff.create(staff);
};

const updateById = async (
  id: number,
  staff: Partial<StaffDto>
): Promise<StaffDto | null> => {
  const staffOld = await Staff.findByPk(id);
  if (!staffOld) return null;
  const updatedStaff = await staffOld.update(staff);
  return updatedStaff;
};

const deleteById = async (id: number): Promise<boolean> => {
  return !!(await Staff.destroy({ where: { id } }));
};

export { getAll, create, updateById, deleteById };
