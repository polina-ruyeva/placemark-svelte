import { c as create_ssr_component } from "../../chunks/index2.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
