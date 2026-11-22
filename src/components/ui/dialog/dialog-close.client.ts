import { mount } from "@cloudflare/nimbus-docs/client";

// Browsers with Invoker Commands close the dialog from `command="close"` +
// `commandfor="<dialog id>"` on their own. Only older ones need a listener,
// which also covers a DialogClose rendered without a `commandfor`.
const nativeCommands = "commandForElement" in HTMLButtonElement.prototype;

mount("[data-dialog-close]", (btn) => {
  if (nativeCommands) return () => {};
  const close = () => btn.closest("dialog")?.close();
  btn.addEventListener("click", close);
  return () => btn.removeEventListener("click", close);
});
