<template>
  <section>
    <div class="container">
      <div class="row">
        <h1 class="section-title">{{ header }}</h1>
        <hr class="section-hr" />
        <div class="col-sm-1"></div>
        <div class="about-team-image col-sm-10">
          <img :src="imageSrc" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'AboutTeam',
	props: ['header', 'imageSrc'],
};
</script>

<style lang="less">
.about-team-image img {
	width: auto;
	height: auto;
	max-height: 475px;
	margin: 0 auto;
	display: block;
	max-width: 100%;
}
</style>
