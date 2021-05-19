<template>
  <button v-if="text" class="btn">{{ text }}</button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    text: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: rem-calc(16 32);
  background-color: $color-primary;
  border: none;
  color: white;
  font-weight: 700;
  font-size: rem-calc(18);
  font-family: Fraunces;
  border-radius: 6px;

  &:hover {
    background-color: $color-primary-light;
    cursor: pointer;
  }
}
</style>
