import { MLoading } from "./MLoading";

const components = [MLoading];

const install = (app) => {
  // 遍历注册所有组件
  components.map((component) => app.component(component.name, component));
};

export { MLoading };

export default {
  install,
};
