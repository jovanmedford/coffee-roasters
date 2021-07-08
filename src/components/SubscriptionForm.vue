<template>
  <form class="subscription-form">
    <SubscriptionFormElement
      v-for="element in elements"
      :key="element.heading"
      :heading="element.heading"
      :name="element.name"
      :options="element.options"
      @choose-value="storeChoice(element.name, $event)"
    />
  </form>
</template>

<script>
import SubscriptionFormElement from "./SubscriptionFormElement.vue";
export default {
  name: "SubscriptionForm",
  components: { SubscriptionFormElement },
  data() {
    return {
      preference: "",
      bean: "",
      quantity: "",
      grind: "",
      delivery: "",
      elements: [
        {
          heading: "How do you drink your coffee?",
          name: "preference",
          options: [
            {
              heading: "Capsule",
              content: "Compatible with Nespresso systems and similar brewers",
              inputId: "option 1",
              inputValue: "capsule",
            },
            {
              heading: "Filter",
              content:
                "For pour over or drip methods like Aeropress, Chemex, and V60",
              inputId: "option 2",
              inputValue: "filter",
            },
            {
              heading: "Espresso",
              content:
                "Dense and finely ground beans for an intense, flavorful experience",
              inputId: "option 3",
              inputValue: "espresso",
            },
          ],
        },
        {
          heading: "What type of coffee?",
          name: "bean",
          options: [
            {
              heading: "Single Origin",
              content:
                "Distinct, high quality coffee from a specific family-owned farm",
              inputId: "option 1",
              inputValue: "single origin",
            },
            {
              heading: "Decaf",
              content:
                "Just like regular coffee, except the caffeine has been removed",
              inputId: "option 2",
              inputValue: "decaf",
            },
            {
              heading: "Blended",
              content:
                "Combination of two or three dark roasted beans of organic coffees",
              inputId: "option 3",
              inputValue: "blended",
            },
          ],
        },
        {
          heading: "How much would you like?",
          name: "quantity",
          options: [
            {
              heading: "250g",
              content:
                "Perfect for the solo drinker. Yields about 12 delicious cups.",
              inputId: "option 1",
              inputValue: "250g",
            },
            {
              heading: "500g",
              content:
                "Perfect option for a couple. Yields about 40 delectable cups.",
              inputId: "option 2",
              inputValue: "500g",
            },
            {
              heading: "1000g",
              content:
                "Perfect for offices and events. Yields about 90 delightful cups.",
              inputId: "option 3",
              inputValue: "1000g",
            },
          ],
        },
        {
          heading: "Want us to grind them?",
          name: "grind",
          options: [
            {
              heading: "Wholebean",
              content: "Best choice if you cherish the full sensory experience",
              inputId: "option 1",
              inputValue: "wholebean",
            },
            {
              heading: "Filter",
              content:
                "For drip or pour-over coffee methods such as V60 or Aeropress",
              inputId: "option 2",
              inputValue: "filter",
            },
            {
              heading: "Cafetiére",
              content:
                "Course ground beans specially suited for french press coffee",
              inputId: "option 3",
              inputValue: "cafetiere",
            },
          ],
        },
        {
          heading: "How often should we deliver?",
          name: "delivery",
          options: [
            {
              heading: "Every week",
              content:
                "$7.20 per shipment. Includes free first-class shipping.",
              inputId: "option 1",
              inputValue: "weekly",
            },
            {
              heading: "Every 2 weeks",
              content: "$9.60 per shipment. Includes free priority shipping.",
              inputId: "option 2",
              inputValue: "biweekly",
            },
            {
              heading: "Every Month",
              content: "$12.00 per shipment. Includes free priority shipping.",
              inputId: "option 3",
              inputValue: "monthly",
            },
          ],
        },
      ],
    };
  },
  methods: {
    storeChoice(param, choice) {
      this[param] = choice;
    },
  },
};
</script>

<style lang="scss" scoped>
.subscription-form {
  @media screen and (min-width: $breakpoint-tablet) {
    max-width: rem-calc(730);
    margin: 0 auto;
  }
}
</style>
