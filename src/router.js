import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
const routeNames = ["home", "project", "contact", "about"];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: routeNames.map(name => {
    return {
      path: name === "home" ? "/" : `/${name}`,
      name: capitalize(name),
      component: () => import(`./views/${capitalize(name)}`)
    };
  })
});
