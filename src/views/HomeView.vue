<template>
  <div class="home">
    <vx-button-search
      @click="onSearch"
      :loading="loading"
      style="margin-left: 16px"
    />
    <daterange-picker v-model:value="searchParams.updated_ip" />
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from "vue";
import TimeSizes from "@/utils/timesizes";
import moment from "moment";

export default defineComponent({
  setup() {
    const loading = ref(false);
    const onSearch = () => {
      // console.log(111);
    };
    const end = TimeSizes.truncateMomentToTimeSize(moment(), "MIN");
    const start = end.clone().subtract(24 * 7, "hour");
    const searchParams = reactive({
      updated_ip: [start, end],
    });
    return {
      loading,
      onSearch,
      searchParams,
    };
  },
});
</script>
