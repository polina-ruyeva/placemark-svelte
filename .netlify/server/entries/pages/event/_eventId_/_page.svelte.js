import { c as create_ssr_component, a as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
import { p as page } from "../../../../chunks/stores.js";
/* empty css                          */import "leaflet";
const EventForm_svelte_svelte_type_style_lang = "";
const css = {
  code: ".weather-box.svelte-zv9ofj{border:2px solid purple}",
  map: null
};
const EventForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<main class="box" style="padding: 50px;"><div class="container">${`<p>Load Event...</p>`}</div></main>

<button class="button is-danger"><i class="fas fa-trash" style="margin-right: 5px;"></i>
    <span style="font-weight: normal;">Danger</span>
</button>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(EventForm, "EventForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
