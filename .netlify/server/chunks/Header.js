import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "./index2.js";
import { u as user } from "./stores2.js";
const TitleBar_svelte_svelte_type_style_lang = "";
const css = {
  code: ".column.svelte-kw7yrj:last-child{text-align:center}",
  map: null
};
const TitleBar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $user, $$unsubscribe_user;
  $$unsubscribe_user = subscribe(user, (value) => $user = value);
  let { title = "" } = $$props;
  let { subTitle = "" } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subTitle === void 0 && $$bindings.subTitle && subTitle !== void 0)
    $$bindings.subTitle(subTitle);
  $$result.css.add(css);
  $$unsubscribe_user();
  return `<div class="box"><div class="columns m-1"><div class="column ml-5 is-2 svelte-kw7yrj"><i class="fas fa-vihara fa-4x" style="color:rgb(95, 96, 173)"></i></div>
        <div class="column svelte-kw7yrj"><div class="title is-3">${escape(title)}</div>
            <div class="subtitle is-6">${escape(subTitle)}</div></div>
        <div class="column is-2 svelte-kw7yrj"><i class="fas fa-user fa-3x" style="color:rgb(95, 96, 173)"></i>
            ${$user.email ? `<div class="is-size-7">${escape($user.email)}</div>` : `<div class="is-size-7">Please log in</div>`}</div></div>
</div>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="columns is-vcentered"><div class="column is-two-thirds">${validate_component(TitleBar, "TitleBar").$$render(
    $$result,
    {
      title: "Evento",
      subTitle: "stay connected with events effortlessly"
    },
    {},
    {}
  )}</div>
    <div class="column">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export {
  Header as H
};
