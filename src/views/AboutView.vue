<template>
  <transition name="fade" mode="out-in">
    <main v-if="!isLoading">
      <PageBanner
        :header="aboutView.header"
        :imageSrc="imageUrlFor(aboutView.headerImage)"
      />
      <AboutMission
        :header="aboutView.aboutHeader"
        :firstParagraph="aboutView.firstParagraph"
        :secondParagraph="aboutView.secondParagraph"
        :quote="aboutView.quote"
      />
      <AboutTeam
        :header="aboutView.teamHeader"
        :imageSrc="imageUrlFor(aboutView.ourTeamImage)"
      />
    </main>
  </transition>
</template>

<script>
import PageBanner from "@/components/PageBanner.vue";
import AboutMission from "@/components/About/AboutMission.vue";
import AboutTeam from "@/components/About/AboutTeam.vue";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../client";

const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "aboutView"] {
	header,
  headerImage,
	aboutHeader,
  firstParagraph,
  secondParagraph,
  quote,
	teamHeader,
  ourTeamImage
}[0]
`;

export default {
  components: {
    PageBanner,
    AboutMission,
    AboutTeam,
  },
  name: "AboutView",
  data() {
    return {
      isLoading: true,
      aboutView: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    $route: "fetchData",
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      sanity.fetch(query).then(
        (aboutView) => {
          this.isLoading = false;
          this.aboutView = aboutView;
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>
