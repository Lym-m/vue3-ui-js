<template>
  <a-spin tip="加载中..." class="spanStyle" v-if="loading"> </a-spin>
  <slot v-else />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "MLoading",
  props: {
    loading: Boolean,
  },
});
</script>

<style scoped>
.spanStyle {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
</style>
