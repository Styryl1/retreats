import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/styryl/dev/retreats/tina/__generated__/.cache/1773677302814', url: 'http://localhost:4001/graphql', token: '7dc5ce0c1cc07d8ecce1bf68cc9fb2f1da8e8266', queries,  });
export default client;
  