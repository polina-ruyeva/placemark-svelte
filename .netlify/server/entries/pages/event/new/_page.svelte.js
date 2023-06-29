import { c as create_ssr_component, a as subscribe, v as validate_component, f as add_attribute, d as each, e as escape } from "../../../../chunks/index2.js";
import { p as page } from "../../../../chunks/stores.js";
import { H as Header } from "../../../../chunks/Header.js";
import { M as MainNavigator } from "../../../../chunks/MainNavigator.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("lat");
  $page.url.searchParams.get("lon");
  let event = { name: "", description: "", date: "" };
  let categories = [];
  $$unsubscribe_page();
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}


<h2 class="title">New Event</h2>
<p class="subtitle">Fill in the information to create new event</p>

<div class="box"><form><div class="field"><label class="label">Name</label>
            <div class="control"><input class="input" type="text" required${add_attribute("value", event.name, 0)}></div></div>

        <div class="field is-grouped"><div class="control"><label class="label">Date</label>
                <input class="input" type="date" required${add_attribute("value", event.date, 0)}></div>
            <div class="control"><label class="label">Category</label>
                <div class="select"><select>${each(categories, (category) => {
    return `<option${add_attribute("value", category._id, 0)}>${escape(category.name)}</option>`;
  })}</select></div></div></div>

        <div class="field"><label class="label">Description</label>
            <div class="control"><textarea class="textarea" required>${""}</textarea></div></div>

        <div class="field"><div class="control"><button class="button is-primary" type="submit">Create</button></div></div></form></div>`;
});
export {
  Page as default
};
