import { Staff } from "models";

const initdb = async () => {
  // TODO: Sync only on dev environment
  await Staff.sync();
};

export default initdb;
