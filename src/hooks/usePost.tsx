import { useMutation } from "react-query";
import axiosInstance from "../services/axiosInstance";

interface IParams {
  url: string;
  payload?: any;
  token?: boolean;
}

const post = async ({ url, payload, token = true }: IParams) => {
  const JWT = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxYTE5MDdmNy0wYmIzLTQ4MGUtYjk3Ni1kNzg4YjY4MGFhZmQiLCJlbWFpbCI6ImpyYWphdDcyQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzMzA2NDI5ZWIxMGFhMGNkNzE3ZSIsInNjb3BlZEtleVNlY3JldCI6ImNiZmIxMzU1N2QwOTBhZTI2OTViZTlhNWRlNmJhYTIwOTcyOGUzNzNjZTU4NzMyNTU4Y2I4OTg3ZTk2YWE1OTAiLCJpYXQiOjE2NzM1NTY4NTJ9.S5j1mvn0c4xxVjAHvsYK6HW_3a8F8_eJbgut4agayqM`;

  let headers: any;
  if (token) {
    headers = { Authorization: JWT };
  }

  const { data } = await axiosInstance.post(url, payload, { headers });
  return data;
};

const usePost = () => useMutation(post);

export default usePost;
