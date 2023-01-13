// If your extension doesn't need a background script, just leave this file empty

// This needs to be an export due to typescript implementation
// limitation of needing '--isolatedModules' tsconfig
export function messageInBackground(): boolean {
  console.info("I can run your javascript like any other code in your project");
  console.info("just do not forget, I cannot render anything !");
  return true;
}

messageInBackground();
