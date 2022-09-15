import client from "./client";

const endpoint = "/listings";

const getListings = async () => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 3000);
  });

  return client.get(endpoint);
};
export default {
  getListings,
};
