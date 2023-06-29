import { c as create_ssr_component } from "./index2.js";
const WelcomeNavigator = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="box has-text-centered columns m-2"><a href="/signup" class="column"><i class="fas fa-user-cog fa-3x" style="color:rgb(95, 96, 173)"></i></a>
    <a href="/login" class="column"><i class="fas fa-user-edit fa-3x" style="color:rgb(95, 96, 173)" title="Log in"></i></a></div>`;
});
export {
  WelcomeNavigator as W
};
