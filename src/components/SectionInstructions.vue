<template>
  <section class="instructions-section">
    <h2 class="instructions-section__title">How it works</h2>
    <svg class="instructions-section__graphic" height="36px" width="100%">
      <line x1="0" y1="18" x2="74%" y2="18" stroke="#FDD6BA" stroke-width="2" />
      <circle
        cx="18"
        cy="18"
        r="16"
        stroke="#0E8784"
        fill="#FEFCF7"
        stroke-width="2"
      />
      <circle
        cx="74%"
        cy="18"
        r="16"
        stroke="#0E8784"
        fill="#FEFCF7"
        stroke-width="2"
      />
      <circle
        cx="38%"
        cy="18"
        r="16"
        stroke="#0E8784"
        fill="#FEFCF7"
        stroke-width="2"
      />
    </svg>
    <InstructionList />
    <BaseButton class="instructions-section__btn" text="Create Your Plan" />
  </section>
</template>

<script>
import InstructionList from "@/components/InstructionList.vue";
import BaseButton from "@/components/BaseButton.vue";

export default {
  name: "SectionInstructions",
  components: {
    InstructionList,
    BaseButton,
  },
};
</script>

<style lang="scss" scoped>
section {
  margin: rem-calc(0 24 120 24);

  @media screen and (min-width: $breakpoint-tablet) {
    margin: rem-calc(0 40 144 40);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin: rem-calc(0 230 200 165);
  }
}

.instructions-section__title {
  font-size: rem-calc(24);
  margin-bottom: rem-calc(80);
  text-align: center;
  color: $color-text-light;

  @media screen and (min-width: $breakpoint-tablet) {
    text-align: left;
    margin-bottom: rem-calc(77);
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin-bottom: rem-calc(104);
  }
}

.instructions-section__graphic {
  margin-bottom: 0;
  display: none;

  @media screen and (min-width: $breakpoint-tablet) {
    margin-bottom: rem-calc(48);
    display: block;
  }

  @media screen and (min-width: $breakpoint-desktop) {
    margin-bottom: rem-calc(67);
  }
}

.instructions-section__btn {
  display: block;
  margin: 0 auto;

  @media screen and (min-width: $breakpoint-tablet) {
    margin: 0;
  }
}
</style>
