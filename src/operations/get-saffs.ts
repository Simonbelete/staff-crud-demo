/* eslint-disable react-hooks/rules-of-hooks */
import useSWR, { SWRResponse } from "swr";
import { Staff, Response } from "types.d";
import axios from "config/axiosConfig";
import { AxiosResponse } from "axios";
import { setLoading, setStaffs } from "rootSlice";

export const ENDPOINT = "/staffs";

const fetcher = (url: string): Promise<Staff[]> =>
  axios.get(url).then((response: AxiosResponse<Response<Staff[]>>) => {
    return response.data.data;
  });

const getStaffs = () => {
  const { data, error } = useSWR(ENDPOINT, fetcher);

  return {
    staffs: data || [],
    loading: !error && !data,
    error: error,
  };
};

const getStaffsAndUpdate = (dispatch: any) => {
  fetcher(ENDPOINT).then((data) => {
    console.log(data);
    dispatch(setStaffs(data));
    dispatch(setLoading(false));
  });
};

export { getStaffsAndUpdate, getStaffs };
export default getStaffs;
