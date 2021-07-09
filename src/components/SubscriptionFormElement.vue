<template>
  <div class="subscription-form-element">
    <div class="subscription-form-element__header" @click="toggleMenu">
      <h2 class="subscription-form__question">
        {{ heading }}
      </h2>
      <i
        :style="caretStyle"
        class="subscription-form__question-icon fas fa-2x fa-angle-down"
      ></i>
    </div>
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
      caretPosition: 0,
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
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
      this.caretPosition += 180;
    },
  },
  computed: {
    caretStyle() {
      return `transform: rotate(${this.caretPosition}deg);`;
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

.subscription-form-element__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: rem-calc(32);

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(40);
  }
}

.subscription-form__question {
  color: $color-text-light;
  font-size: rem-calc(24);
  max-width: rem-calc(240);

  @media screen and (min-width: $breakpoint-tablet) {
    font-size: rem-calc(32);
    max-width: 100%;
  }
}

.subscription-form__question-icon {
  color: $color-primary;
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
