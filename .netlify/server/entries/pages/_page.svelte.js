import { c as create_ssr_component, v as validate_component } from "../../chunks/index2.js";
import { H as Header } from "../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../chunks/WelcomeNavigator.js";
const WelcomeForm_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-container.svelte-r7zhf9{position:relative}.image-text.svelte-r7zhf9{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);color:white;font-size:50px;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.8)}.blur-image.svelte-r7zhf9{filter:blur(3px)}",
  map: null
};
const WelcomeForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="columns is-vcentered content"><div class="column has-text-centered"><div class="image-container svelte-r7zhf9"><img src="/welcome.jpg" alt="welcome" class="blur-image svelte-r7zhf9">
            <h1 class="image-text svelte-r7zhf9">Welcome to Evento</h1></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${`${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`}`;
    }
  })}


${validate_component(WelcomeForm, "WelcomeForm").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
