import Vue from "vue";
import Router from "vue-router";
import Header from "./layout/AppHeader";
import Footer from "./layout/AppFooter";
import Main from "./views/Main";

Vue.use(Router);

export default new Router({ 
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      components: {
        header: Header,
        default: Main,
        footer: Footer
      }
    },
  ]
});
 