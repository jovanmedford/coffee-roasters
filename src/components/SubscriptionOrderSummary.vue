<template>
  <section class="order-summary">
    <span class="order-summary__heading">Order Summary</span>
    <p class="order-summary__message">
      I drink my coffee <span v-html="preferenceText" /> with a
      <span v-html="beanText" /> type of bean. <span v-html="quantityText" />
      <span v-html="grindOptionText" /> sent to me
      <span v-html="delivertyText" />.
    </p>
  </section>
</template>

<script>
export default {
  name: "SubscriptionFormOrderSummary",
  props: {
    preferences: {
      type: String,
      default: "capsule",
    },
    beanType: {
      type: String,
      default: "",
    },
    quantity: {
      type: String,
      default: "",
    },
    grindOption: {
      type: String,
      default: "",
    },
    delivery: {
      type: String,
      default: "",
    },
  },
  methods: {
    fillSpace(choice) {
      const blankSpace = "<span class='blank-space'>        </span>";
      return choice
        ? `<span class='special-text'>${choice}</span>`
        : blankSpace;
    },
  },
  computed: {
    preferenceText() {
      if (this.preferences == "capsule" || this.preferences == "") {
        return `using <span class="special-text">Capsules</span>,`;
      } else {
        return `as <span class="special-text">${this.preferences}</span>,`;
      }
    },
    beanText() {
      return this.fillSpace(this.beanType);
    },
    quantityText() {
      return this.fillSpace(this.quantity);
    },
    grindOptionText() {
      if (this.grindOption == "") {
        return `,`;
      } else {
        return ` ground a la <span class="special-text">${this.grindOption}</span>,`;
      }
    },
    delivertyText() {
      return this.fillSpace(this.delivery);
    },
  },
};
</script>

<style lang="scss">
.blank-space {
  text-decoration: underline;
  text-decoration-color: $color-primary;
  white-space: pre;
}

.order-summary {
  background: #2c343e;
  color: white;
  padding: rem-calc(32 24);
  margin: rem-calc(0 24 56 24);
  border-radius: 10px;

  @media screen and (min-width: $breakpoint-tablet) {
    margin: rem-calc(0 40 40 40);
    padding: rem-calc(27 44);
  }
}

.order-summary__heading {
  font-size: rem-calc(16);
  text-transform: uppercase;
  color: $color-text-light;
}

.order-summary__message {
  font-size: rem-calc(24);
  font-family: Fraunces;
  line-height: 40px;
}

.special-text {
  color: $color-primary;
}
</style>
