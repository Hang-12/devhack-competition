import { useCallback } from "react";

const defaultHeaders = {
  Accept: `application/json`,
  'Content-Type': `application/json`,
};

const defaultURL = `http://localhost:8000`;

const useHTTPRequest = () => {
  const post = useCallback(
    async ({
      url = `${defaultURL}/api`,
      api = ``,
      body = {},
      headers = {},
    }) => {
      return new Promise((resolve, reject) => {
        setTimeout(async () => {
          try {
            const result = await fetch(`${url}${api}`, {
              method: `POST`,
              headers: {
                ...defaultHeaders,
                ...headers,
              },
              body: JSON.stringify(body),
            });

            const responseCode = await result.status;
            const resultJson = await result.json();
          } catch (error) {
            const status = 999;
            reject({
              status,
              response: { message: `Unknown error` },
            });
          }
        }, 1000)
      }).finally(() => {});
    },
  );
};

export default useHTTPRequest;