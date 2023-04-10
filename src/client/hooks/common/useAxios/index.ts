import axios from "axios";
import { makeUseAxios } from "axios-hooks";

const axiosClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_HOST}/api`,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

const useAxios = makeUseAxios({ axios: axiosClient });

export default useAxios;
