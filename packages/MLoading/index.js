import MLoading from "./src/index.vue";

MLoading.install = (app) => {
  app.component(MLoading.name, MLoading);
};

export { MLoading };
