import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/styryl/dev/retreats/tina/__generated__/.cache/1773259266923', url: 'http://localhost:4001/graphql', token: 'null', queries,  });
export default client;
  