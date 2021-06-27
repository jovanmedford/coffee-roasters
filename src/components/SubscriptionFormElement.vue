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
        :inputName="option.inputName"
        :inputValue="option.inputValue"
        v-model="picked"
        @choose-option="picked = $event"
      />
    </div>
  </div>
  <p>{{ picked }}</p>
</template>

<script>
import SubscriptionFormOption from "./SubscriptionFormOption.vue";
export default {
  name: "SubscriptionFormElement",
  components: { SubscriptionFormOption },
  data() {
    return {
      heading: "How do you drink your coffee",
      picked: "capsule",
      options: [
        {
          heading: "Capsule",
          content: "Compatible with Nespresso systems and similar brewers",
          inputId: "option 1",
          inputName: "preferences",
          inputValue: "capsule",
        },
        {
          heading: "Filter",
          content:
            "For pour over or drip methods like Aeropress, Chemex, and V60",
          inputId: "option 2",
          inputName: "preferences",
          inputValue: "filter",
        },
        {
          heading: "Espresso",
          content:
            "Dense and finely ground beans for an intense, flavorful experience",
          inputId: "option 3",
          inputName: "preferences",
          inputValue: "espresso",
        },
      ],
    };
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
