import { Staff } from "models";

const initdb = () => {
  // TODO: Sync only on dev environment
  Staff.sync();
};

export default initdb;
