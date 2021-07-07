<template>
  <p>{{ picked }}</p>
  <form class="subscription-form">
    <SubscriptionFormElement
      v-for="element in elements"
      :key="element.heading"
      :heading="element.heading"
      :options="element.options"
      @choose-value="picked = $event"
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
      picked: "",
      elements: [
        {
          heading: "How do you drink your coffee?",
          name: "preference",
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
              inputName: "bean-type",
              inputValue: "single origin",
            },
            {
              heading: "Decaf",
              content:
                "Just like regular coffee, except the caffeine has been removed",
              inputId: "option 2",
              inputName: "bean-type",
              inputValue: "decaf",
            },
            {
              heading: "Blended",
              content:
                "Combination of two or three dark roasted beans of organic coffees",
              inputId: "option 3",
              inputName: "bean-type",
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
              inputName: "quantity",
              inputValue: "250g",
            },
            {
              heading: "500g",
              content:
                "Perfect option for a couple. Yields about 40 delectable cups.",
              inputId: "option 2",
              inputName: "quantity",
              inputValue: "500g",
            },
            {
              heading: "1000g",
              content:
                "Perfect for offices and events. Yields about 90 delightful cups.",
              inputId: "option 3",
              inputName: "quantity",
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
              inputName: "grind-option",
              inputValue: "wholebean",
            },
            {
              heading: "Filter",
              content:
                "For drip or pour-over coffee methods such as V60 or Aeropress",
              inputId: "option 2",
              inputName: "grind-option",
              inputValue: "filter",
            },
            {
              heading: "Cafetiére",
              content:
                "Course ground beans specially suited for french press coffee",
              inputId: "option 3",
              inputName: "grind-option",
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
              inputName: "deliveries",
              inputValue: "weekly",
            },
            {
              heading: "Every 2 weeks",
              content: "$9.60 per shipment. Includes free priority shipping.",
              inputId: "option 2",
              inputName: "deliveries",
              inputValue: "biweekly",
            },
            {
              heading: "Every Month",
              content: "$12.00 per shipment. Includes free priority shipping.",
              inputId: "option 3",
              inputName: "deliveries",
              inputValue: "monthly",
            },
          ],
        },
      ],
    };
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
