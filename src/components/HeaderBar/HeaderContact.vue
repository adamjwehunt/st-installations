<template>
  <div class="header-contact-wrap">
    <address class="header-contact">
      <a :href="`tel:${phone}`">
        <h1>Call or text</h1>
        <h1>{{ phone }}</h1>
      </a>
    </address>
  </div>
</template>

<script>
export default {
  name: "HeaderContact",
  props: ["phone"],
};
</script>

<style lang="less" scoped>
.header-contact-wrap {
  display: flex;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: black;
  z-index: 6;

  .header-contact {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    padding-right: 25px;
    padding-top: 8px;

    a {
      display: flex;
      margin-bottom: 13px;

      h1 {
        font-family: "Open Sans", sans-serif;
        color: #fff;
        font-size: 18px;
        font-weight: 500;

        &:first-child {
          display: none;
          margin-right: 12px;
          user-select: none;
          font-size: 15px;
          letter-spacing: 1px;
        }

        @media only screen and (min-width: 422px) {
          &:first-child {
            display: block;
          }
        }

        &:last-child {
          letter-spacing: 1px;
        }
      }
    }
  }
}
</style>
