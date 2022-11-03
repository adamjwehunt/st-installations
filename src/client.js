const sanityClient = require("@sanity/client");
const client = sanityClient({
  projectId: "25hh13q2",
  dataset: "production",
  apiVersion: "2022-10-30",
  useCdn: true,
});

export default client;
