import { mount } from "@cloudflare/nimbus-docs/client";

// Modern browsers light-dismiss a `closedby="any"` dialog themselves, and keep
// scroll gestures out of the page with the `dialog:modal` / `::backdrop` rules
// in globals.css. Safari still ignores `closedby`, so only there do we close on
// a press-and-release outside the dialog's content.
const nativeClosedBy = "closedBy" in HTMLDialogElement.prototype;

mount("[data-dialog]", (root) => {
  if (nativeClosedBy || !(root instanceof HTMLDialogElement)) return () => {};
  const dialog = root;

  // Test the pointer position rather than only the event target: the dialog is
  // also the target for its own padding and for the gaps between its children.
  // A dialog that fills the viewport paints its own backdrop, so there the
  // dialog element reacting to the press *is* the backdrop.
  const outside = (e: PointerEvent) => {
    if (e.target === dialog) return true;
    const r = dialog.getBoundingClientRect();
    return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
  };
  // Require the press and the release to both land outside, so a text-selection
  // drag that ends on the backdrop does not dismiss the dialog.
  let pressedOutside = false;
  const onPointerDown = (e: PointerEvent) => {
    pressedOutside = outside(e);
  };
  const onPointerUp = (e: PointerEvent) => {
    if (pressedOutside && outside(e)) dialog.close();
    pressedOutside = false;
  };
  dialog.addEventListener("pointerdown", onPointerDown);
  dialog.addEventListener("pointerup", onPointerUp);

  return () => {
    dialog.removeEventListener("pointerdown", onPointerDown);
    dialog.removeEventListener("pointerup", onPointerUp);
  };
});
