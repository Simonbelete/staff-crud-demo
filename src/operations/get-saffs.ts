/* eslint-disable react-hooks/rules-of-hooks */
import useSWR, { SWRResponse } from "swr";
import { Staff, Response } from "types.d";
import axios from "config/axiosConfig";
import { AxiosResponse } from "axios";

const ENDPOINT = "/staffs";

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

export default getStaffs;
