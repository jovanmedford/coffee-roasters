<template>
  <div class="subscription-form-element">
    <h2 class="subscription-form__question" @click="isOpen = !isOpen">
      {{ heading }}
    </h2>
    <transition name="slide-fade">
      <div class="subscription-form__option-container" v-if="isOpen">
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
    </transition>
  </div>
</template>

<script>
import SubscriptionFormOption from "./SubscriptionFormOption.vue";
export default {
  name: "SubscriptionFormElement",
  emits: ["chooseValue"],
  components: { SubscriptionFormOption },
  data() {
    return {
      isOpen: false,
    };
  },
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

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(40);
    font-size: rem-calc(32);
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}

.slide-fade-enter-from {
  transform: translateY(-20px);
}

.slide-fade-leave-to {
  transform: translateY(-70px);
  opacity: 0;
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
