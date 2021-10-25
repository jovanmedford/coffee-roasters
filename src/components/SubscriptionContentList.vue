<template>
  <aside class="subscription-contents">
    <ul>
      <SubscriptionContentListItem
        :key="{ parameter }"
        v-for="(parameter, index) in parameters"
        :parameter="parameter"
        :count="index"
      />
    </ul>
  </aside>
</template>

<script>
import SubscriptionContentListItem from "./SubscriptionContentListItem.vue";
export default {
  name: "SubscriptionContentList",
  components: { SubscriptionContentListItem },
  data() {
    return {
      parameters: [
        "Preferences",
        "Bean Type",
        "Quantity",
        "Grind Option",
        "Deliveries",
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
