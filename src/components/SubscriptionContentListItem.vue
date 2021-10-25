<template>
  <li :key="parameter">
    <span class="content-number">{count}</span>
    {parameter}
  </li>
</template>

<script>
export default {
  name: "SubscriptionContentListItem",
  props: {
    count: {
      type: String,
      default: "01",
    },
    parameter: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
