<template>
  <i @click="isActive = true" class="header__dropdown-icon fa fa-bars"></i>
  <div :class="menuDisplay" class="dropdown-menu">
    <div class="dropdown-menu__header">
      <TheLogo class="dropdown-menu__logo" :isDark="true" />
      <img
        @click="isActive = false"
        class="dropdown-menu__close-btn"
        src="../assets/shared/mobile/icon-close.svg"
      />
    </div>
    <div class="dropdown-menu__link-container">
      <router-link
        class="dropdown-menu__link"
        :key="link.text"
        v-for="link in links"
        :to="link.to"
        >{{ link.text }}
      </router-link>
    </div>
  </div>
</template>

<script>
import TheLogo from "@/components/TheLogo.vue";

export default {
  name: "DropdownMenu",
  components: {
    TheLogo,
  },
  data() {
    return {
      isActive: false,
      links: [
        { text: "Home", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Create Your Plan", to: "/create-your-plan" },
      ],
    };
  },
  computed: {
    menuDisplay() {
      return this.isActive
        ? "dropdown-menu--active"
        : "dropdown-menu--inactive";
    },
  },
};
</script>

<style lang="scss" scoped>
.header__dropdown-icon {
  display: block;

  @media screen and (min-width: $breakpoint-tablet) {
    display: none;
  }

  &:hover {
    cursor: pointer;
  }
}

.dropdown-menu {
  padding: rem-calc(32 0);
  position: fixed;
  z-index: 110;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: $color-background;
  text-align: center;
}

.dropdown-menu--active {
  display: block;
}

.dropdown-menu--inactive {
  display: none;
}

.dropdown-menu__header {
  margin-bottom: rem-calc(80);
  justify-content: space-between;
  position: relative;
}

.dropdown-menu__logo {
  transform: scale(0.7);
  display: block;
  text-align: left;
}

.dropdown-menu__close-btn {
  position: absolute;
  top: 10px;
  right: 24px;

  &:hover {
    cursor: pointer;
  }
}

.dropdown-menu__link-container {
  display: flex;
  flex-direction: column;
}

.dropdown-menu__link {
  font-family: Fraunces;
  font-size: rem-calc(24);
  text-decoration: none;
  margin-bottom: rem-calc(32);
  color: $color-text;
}
</style>
