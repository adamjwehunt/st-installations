<template>
  <nav>
    <ul class="navigation">
      <router-link
        v-for="route in routes"
        :key="route.name"
        :to="route"
        tag="li"
      >
        {{ route.name }}
      </router-link>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes.filter((route) => !route.meta.hidden);
    },
  },
  name: "NavLinks",
};
</script>

<style lang="less">
.navigation {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  justify-content: center;
  user-select: none;
  padding-bottom: 6px;

  li {
    font-family: "Dosis", sans-serif;
    margin: 6px 12px;
    padding-bottom: 2px;
    border-bottom: 3px solid #ffffff;
    cursor: pointer;
    color: #7f7f7f;
    transition: 0.25s;
    letter-spacing: 2px;

    &.router-link-exact-active,
    &:hover {
      border-bottom: 3px solid #a7090a;
      color: #000;
    }

    &:last-child {
      padding: 3px;
      border: 2px solid #7f7f7f;
      border-radius: 2px;
    }

    &:last-child:hover,
    &.router-link-exact-active:last-child {
      border: 2px solid #a7090a;
      color: #fff;
      background: #a7090a;
    }
  }
}
</style>
