// If your extension doesn't need a content script, just leave this file empty

// This is an example of a script that will run on every page. This can alter pages
// Don't forget to change `matches` in manifest.json if you want to only change specific webpages

// This needs to be an export due to typescript i
// mplementation limitation of needing '--isolatedModules' tsconfig
export function printAllPageLinks(): boolean {
  console.info("NEW CONSOLE LOG TS");
  const allLinks = Array.from(document.querySelectorAll("a")).map(
    (link) => link.href
  );

  console.info("-".repeat(30));
  console.info(
    `These are all ${allLinks.length} links on the current page that have been printed by the Sample Create React Extension`
  );

  console.info(allLinks);
  console.info("-".repeat(30));
  return true;
}
printAllPageLinks();
