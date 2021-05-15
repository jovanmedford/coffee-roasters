<template>
  <header class="header">
    <img class="header__logo" src="../assets/shared/desktop/logo.svg" />
    <nav class="header__navbar">
      <router-link
        class="header__navbar-list-item"
        :key="link.text"
        v-for="link in links"
        :to="link.to"
        >{{ link.text }}
      </router-link>
      <i class="header__dropdown-icon fa fa-bars"></i>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: "Home", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Create Your Plan", to: "/create-your-plan" },
      ],
    };
  },
};
</script>

<style lang="scss">
.header {
  padding: rem-calc(32 24 40 24);
  display: flex;
  justify-content: space-between;

  @media screen and (min-width: $breakpoint-tablet) {
    padding: rem-calc(40);
  }
}

.header__logo {
  width: rem-calc(163);
  height: rem-calc(18);

  @media screen and (min-width: $breakpoint-tablet) {
    width: rem-calc(236);
    height: rem-calc(26);
  }
}

.header__navbar-list-item {
  text-decoration: none;
  color: $color-text-light;
  font-weight: bold;
  font-size: rem-calc(12);
  text-transform: uppercase;
  display: none;

  &:not(:last-child) {
    margin-right: rem-calc(32);
  }

  &:hover {
    color: $color-text;
  }

  @media screen and (min-width: $breakpoint-tablet) {
    display: inline-block;
  }
}

.header__dropdown-icon {
  display: block;

  @media screen and (min-width: $breakpoint-tablet) {
    display: none;
  }
}
</style>
