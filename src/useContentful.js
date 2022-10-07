import { createClient } from "contentful";

export default function useContentful() {
  const client = createClient({
    space: "3okd8zp7ryvu",
    accessToken: "-pnmSaf6zCMRu7wHMDVxXcgremsSGvRADeGgQs9Y3po",
  });

  const getAnwsers = async (tags) => {
    try {
      const entries = await client.getEntries({
        content_type: "javascript",
        select: "fields",
      });

      return entries;
    } catch (error) {
      console.log(`Error retrieving your request: ${error}`);
    }
  };

  return { getAnwsers };
}
