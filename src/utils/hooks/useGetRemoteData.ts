import { useState, useEffect, useCallback } from "react";
import { repoType } from "types";
import { getSearchReposApi } from "services";

export const useGetRemoteData = (searchInfo: string, page: number) => {
  const [reposCount, setReposCount] = useState(0);
  const [responseData, setResponseData] = useState<repoType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getReposData = useCallback(
    async (info: string, page: number) => {
      page === 1 && setResponseData([]);
      setIsLoading(true);
      try {
        const response = await getSearchReposApi(info, page);

        if (response.kind === "ok") {
          if (page === 1) {
            setResponseData(response.data.items);
            setReposCount(response.data.total_count);
          } else {
            setResponseData([...responseData, ...response.data.items]);
          }
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    },
    [searchInfo, page]
  );

  useEffect(() => {
    if (searchInfo === "") {
      setResponseData([]);
    } else {
      getReposData(searchInfo, page);
    }
  }, [searchInfo, setResponseData, page, getReposData]);

  return { responseData, reposCount, isLoading };
};
