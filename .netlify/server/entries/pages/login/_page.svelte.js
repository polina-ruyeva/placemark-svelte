import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { H as Header } from "../../../chunks/Header.js";
import { W as WelcomeNavigator } from "../../../chunks/WelcomeNavigator.js";
const LoginForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let email = "";
  let password = "";
  return `<div class="container"><div class="columns is-centered"><div class="column is-one-third"><form class="box"><h2 class="title">Log In</h2>
                <div class="field"><label class="label" for="email">Email</label>
                    <input class="input" id="email" name="email" placeholder="Enter email" type="text"${add_attribute("value", email, 0)}></div>
                <div class="field"><label class="label" for="password">Password</label>
                    <input class="input" id="password" name="password" placeholder="Enter Password" type="password"${add_attribute("value", password, 0)}></div>
                <div class="field is-grouped"><button class="button is-link">Log In</button></div></form>

            ${``}</div></div></div>



${``}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(WelcomeNavigator, "WelcomeNavigator").$$render($$result, {}, {}, {})}`;
    }
  })}

<div class="columns"><div class="column">${validate_component(LoginForm, "LoginForm").$$render($$result, {}, {}, {})}</div></div>`;
});
export {
  Page as default
};
