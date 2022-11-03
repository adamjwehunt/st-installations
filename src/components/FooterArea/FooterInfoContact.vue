<template>
  <section class="col-sm-4 col-sm-offset-1">
    <h1>CONTACT</h1>
    <address class="footer-info-contact">
      <div>
        <i class="fa fa-phone" aria-hidden="true"></i>
        <a :href="`tel:${phone}`">{{ phone }}</a>
      </div>
      <div>
        <i class="fa fa-envelope" aria-hidden="true"></i>
        <a
          :href="
            `mailto:${email}` +
            `?subject=Hello Strong Tower Installations&amp;` +
            `body=Hello Strong Tower Installations,%0A%0APlease contact me. I’m interested in learning more.%0A%0AThank you,`
          "
        >
          {{ email }}
        </a>
      </div>
    </address>
  </section>
</template>

<script>
export default {
	props: ['phone', 'email'],
	name: 'FooterInfoContact',
};
</script>

<style lang="less" scoped>
.footer-info-contact {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-left: -8px;

	div {
		display: flex;
		align-items: center;
		margin: 10px 0;

		i {
			width: 22px;
			margin-right: 8px;
			font-size: 20px;
			color: #a7090a;
			text-align: center;
		}

		a {
			font-size: 14px;
			color: #4a4a4a;
		}
	}
}

@media only screen and (min-width: 375px) {
	.footer-info-contact div {
		a {
			font-size: 18px;
		}

		i {
			width: 30px;
			margin-right: 16px;
		}
	}
}

@media only screen and (min-width: 768px) {
	.footer-info-contact div {
		i {
			font-size: 16px;
			margin-right: 10px;
		}

		a {
			font-size: 15px;
		}
	}
}
</style>
