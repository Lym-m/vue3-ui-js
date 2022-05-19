import { reactive } from "vue";

/**
 * 定义loading
 * */
export default function () {
  const loading = reactive({ value: false });

  return { loading };
}
