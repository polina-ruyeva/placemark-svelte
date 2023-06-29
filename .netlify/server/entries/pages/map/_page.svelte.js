import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
const PlacemarkMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box" id="placemark-map" style="height: 75vh"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(PlacemarkMap, "PlacemarkMap").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
