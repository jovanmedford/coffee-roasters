<template>
  <div class="subscription-form-element">
    <h2 class="subscription-form__question">{{ heading }}</h2>
    <div class="subscription-form__option-container">
      <SubscriptionFormOption
        :key="option.id"
        v-for="option in options"
        :heading="option.heading"
        :content="option.content"
        :inputId="option.inputId"
        :inputName="name"
        :inputValue="option.inputValue"
        @choose-value="$emit('chooseValue', $event)"
      />
    </div>
  </div>
</template>

<script>
import SubscriptionFormOption from "./SubscriptionFormOption.vue";
export default {
  name: "SubscriptionFormElement",
  emits: ["chooseValue"],
  components: { SubscriptionFormOption },
  props: {
    heading: {
      type: String,
      required: true,
      default: "Enter a question.",
    },
    name: {
      type: String,
      default: "preference",
    },
    options: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.subscription-form-element {
  margin: rem-calc(0 24 40 24);

  @media screen and (min-width: $breakpoint-tablet) {
    margin: rem-calc(0 40 88 40);
  }
}

.subscription-form__question {
  color: $color-text-light;
  font-size: rem-calc(24);
  margin-bottom: rem-calc(32);

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(40);
    font-size: rem-calc(32);
  }
}

.subscription-form__option-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: $breakpoint-tablet) {
    flex-wrap: nowrap;
  }
}
</style>
