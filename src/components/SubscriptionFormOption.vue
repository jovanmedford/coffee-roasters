<template>
  <label>
    <input
      type="radio"
      :id="inputId"
      :name="inputName"
      :value="inputValue"
      @click="$emit('chooseOption', inputValue)"
    />
    <div class="subscription-form__option">
      <h3 class="subscription-form__option-title">{{ heading }}</h3>
      <p class="subscription-form__option-content">
        {{ content }}
      </p>
    </div>
  </label>
</template>

<script>
export default {
  name: "SubscriptionFormOption",
  emits: ["chooseOption"],
  props: {
    heading: {
      type: String,
      required: true,
      default: "Enter Option Heading",
    },
    content: {
      type: String,
      required: true,
      default: "Short description about the product",
    },
    inputName: {
      type: String,
      required: true,
      default: "preferences",
    },
    inputValue: {
      type: String,
      required: true,
      default: "capsule",
    },
    inputId: {
      type: String,
      required: true,
      default: "option1",
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

input[type="radio"] {
  width: 0;
  height: 0;
  opacity: 0;

  &:checked {
    + div {
      background-color: $color-primary;
      color: $color-background;
    }
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

label {
  width: 100%;
  @media screen and (min-width: $breakpoint-tablet) {
    width: 33%;
    max-width: rem-calc(223);
  }
}

.subscription-form__option {
  padding: rem-calc(24);
  background-color: #f4f1eb;
  border-radius: 8px;

  &:hover {
    cursor: pointer;
    background-color: $color-secondary;
  }

  @media screen and (min-width: $breakpoint-tablet) {
    padding: rem-calc(32 24 0 24);
    height: rem-calc(250);
  }
}

.subscription-form__option-title {
  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(24);
    margin-bottom: rem-calc(24);
  }
}

.subscription-form__option-content {
  font-size: rem-calc(15);
  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(16);
    line-height: rem-calc(26);
  }
}
</style>
