import { post } from "./useHTTPRequest";

const login = async ({ username, password }) => {
  const res = await post({
    api: `/login`,
    body: {
      username,
      password,
    },
  });

  return res;
};

const def = {
  login,
};

export default def;