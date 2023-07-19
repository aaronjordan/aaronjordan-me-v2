# aaronjordan.me v2

This is the codebase that powers [my personal website.](https://aaronjordan.me)
Key goals of this rewrite were improved configurability and extensibility over 
the previous React/NodeJS/Express stack. We accomplish this through a few key
improvements:

1) Copy is not coupled to code. Markdown files stored in /static/pages are
   parsed by the server on each request to construct route contents. With the
   magic of SvelteKit, either a prerendered initial HTML file is sent or the
   difference to apply to the document is provided over XHR. These files can be
   updated on the host without requiring a new code deployment.

2) Content is *mostly* not coupled to code. While this could be improved with 
   dynamic routing, the solution is fine as-is for now. A file, 
   `/static/content.json`, provides a significant amount of context to the site.

These features are great for the use case of this site — a low-traffic, 
quickly-modifiable website. The concept could be improved through addition of
caching and a database-backed posting model for repeated entries in
`content.json` (such as ProjectEntry).
