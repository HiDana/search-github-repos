import { api } from "./api";

export const getSearchReposApi = async () => {
  try {
    const response = await api.get("/search/repositories?q=%22nextjs%22");
    console.log("response", response);
  } catch (e) {
    console.log("e", e);
  }
};
