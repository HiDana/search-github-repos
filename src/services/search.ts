import { api } from "./api";
import { repoType } from "types";

type ReposResponseType =
  | {
      kind: "ok";
      data: {
        total_count: number;
        incomplete_results: boolean;
        items: repoType[];
      };
    }
  | { kind: "bad" };

export const getSearchReposApi = async (
  query: string,
  page: number
): Promise<ReposResponseType> => {
  try {
    const response = await api.get("/search/repositories", {
      params: { q: query, per_page: 20, page },
    });
    if (!!response) {
      return { kind: "ok", data: response.data };
    } else {
      return { kind: "bad" };
    }
  } catch (e) {
    console.log("e", e);
    return { kind: "bad" };
  }
};
