import { getPokedexEntry } from "./lib/get-pokedex-entry.ts";
import { renderPokedexEntry } from "./lib/render-pokedex-entry.ts";

addEventListener("fetch", async (event) => {
  let result = "";
  const { pathname } = new URL(event.request.url);
  const data = await getPokedexEntry(pathname);
  if (data !== null) {
    result = renderPokedexEntry(data.name, data.species, data.entry);
  }
  const response = new Response(result, {
    headers: { "content-type": "image/svg+xml" },
  });
  event.respondWith(response);
});
