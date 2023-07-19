import { marked } from "marked";
import type { ContentData } from "$src/lib/types/content.js";

const markedSettings = {
  mangle: false,
  headerIds: false,
};

export const load = (async ({ fetch, route }) => {
  const file = await fetch("/content.json");
  const content = await file.json() as ContentData;

  const pageFilePathOrNull = content.pages[route.id ?? "@NONE"]?.bodyUrl;
  let markdownOrNull: string | undefined;

  if (typeof pageFilePathOrNull == "string") {
    try {
      const file = await fetch(`/pages/${pageFilePathOrNull}`);
      const compiled = await marked.parse(await file.text(), markedSettings);
      markdownOrNull = compiled;
    } catch (e) {
      console.log(
        `Attempted to read ${pageFilePathOrNull} on disk; an error occured.`,
        e,
      );
    }
  }

  return {
    ...content,
    ...(markdownOrNull && { markdown: markdownOrNull }),
  };
});
