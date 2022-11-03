<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ header }}</h1>
        <hr class="section-hr" />
      </div>
      <div class="row">
        <div class="about-quote col-sm-offset-1 col-md-2">
          <p>"{{ quote }}"</p>
        </div>
        <div class="about-summary col-sm-6 col-sm-offset-1">
          <p>{{ firstParagraph }}</p>
          <p>{{ secondParagraph }}</p>
          <p>{{ quote }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMission",
  props: ["header", "firstParagraph", "secondParagraph", "quote"],
};
</script>

<style lang="less">
.about-summary p:first-child:first-letter {
  color: #a7090a;
  font-size: 36px;
}

.about-quote p {
  font-size: 23px;
  text-align: center;
  line-height: 32px;
  font-weight: 300;
  font-style: italic;
}

@media only screen and (min-width: 768px) {
  .about-quote p {
    text-align: left;
  }
}
</style>
