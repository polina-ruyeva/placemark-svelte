import { c as create_ssr_component, e as escape, b as createEventDispatcher, d as each, f as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { M as MainNavigator } from "../../../chunks/MainNavigator.js";
import "leaflet";
/* empty css                       */const PlacemarkMapList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { event = null } = $$props;
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  return `<div class="box" id="${"placemark-map-" + escape(event._id, true)}" style="height: 25vh"></div>`;
});
const EventList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".tile.svelte-1hmioiy{margin-bottom:1rem}.event-image.svelte-1hmioiy{width:100%;max-height:200px;object-fit:cover;border-radius:4px;margin-bottom:0.5rem}",
  map: null
};
function formatDate(dateString) {
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric"
  };
  const date = new Date(dateString);
  return date.toLocaleDateString("de-DE", options);
}
const EventList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let categories = [];
  let filteredEvents = [];
  $$result.css.add(css);
  return `<h1 class="title">Events</h1>



<div class="field is-grouped"><div class="control"><label class="label" for="category-select">Select Category:</label></div>
    <div class="control"><div class="select"><select id="category-select" class="input"><option value="">All</option>${each(categories, (category) => {
    return `<option${add_attribute("value", category._id, 0)}>${escape(category.name)}</option>`;
  })}</select></div></div></div>

<div class="tile is-ancestor svelte-1hmioiy">${each(filteredEvents, (event) => {
    return `<div class="tile is-parent svelte-1hmioiy"><article class="tile is-child box svelte-1hmioiy"><div class="columns"><div class="column"><h2 class="title is-4">${escape(event.name)}</h2></div>
                    <div class="column is-narrow"><a><i class="fas fa-arrow-circle-right fa-2x"></i></a>
                    </div></div>
                <p class="subtitle">${escape(formatDate(event.date))}</p>
                ${event.image ? `<figure class="image"><img class="event-image svelte-1hmioiy"${add_attribute("src", event.image, 0)} alt="Event Image">
                    </figure>` : ``}
                <p>${escape(event.description)}</p>
                ${validate_component(PlacemarkMapList, "PlacemarkMap").$$render($$result, { event, key: event._id }, {}, {})}</article>
        </div>`;
  })}</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(MainNavigator, "MainNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

${validate_component(EventList, "EventList").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
