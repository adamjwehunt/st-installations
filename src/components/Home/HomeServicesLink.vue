<template>
  <router-link
    :id="data.id"
    class="col-md-3 service-link"
    :to="`${$router.options.routes[1].path}#${data.id}`"
    tag="div"
  >
    <i :class="data.faIcon" class="fa" aria-hidden="true"></i>
    <h2>{{ data.name }}</h2>
  </router-link>
</template>

<script>
export default {
  props: ["data"],
  name: "HomeServicesLink",
};
</script>

<style lang="less">
.service-link {
  margin: 15px 0;
  height: 164px;
  width: 164px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h2 {
    font-family: "Open Sans", sans-serif;
    font-size: 15px;
    font-weight: 500;
    text-transform: uppercase;
  }

  &:hover {
    box-shadow: 0 3px 30px 5px rgba(0, 0, 0, 0.15);
    transition: all linear 0.2s;
    cursor: pointer;
  }

  i {
    font-size: 30px;
    margin-bottom: 10px;
  }
}
</style>
