<template>
  <div class="BG">
    <div class="container-xl mt-5">
      <div class="row justify-content-center">
        <h2>選擇星盤好友</h2>
        <div
          v-for="friend in this.$store.state.friends"
          class="col-lg-5 col-md-11 my-3 mx-3 friend-block"
        >
          <div class="d-flex">
            <div class="w-25 m-auto d-flex justify-content-center">
              <img
                class="logoSign-sun-s"
                :src="this.logoSigns[friend.signs[0] - 1]"
                alt="sunSignLogo"
              />
            </div>
            <div class="w-75 m-auto d-flex justify-content-center">
              {{ friend.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from "vuex";

import lAries from "../assets/img/signLogos/Aries_pink_400p.png";
import lTarus from "../assets/img/signLogos/Tarus_pink_400p.png";
import lGemini from "../assets/img/signLogos/Gemini_pink_400p.png";
import lCancer from "../assets/img/signLogos/Cancer_pink_400p.png";
import lLeo from "../assets/img/signLogos/Leo_pink_400p.png";
import lVirgo from "../assets/img/signLogos/Virgo_pink_400p.png";
import lLibra from "../assets/img/signLogos/Libra_pink_400p.png";
import lScorpio from "../assets/img/signLogos/Scorpio_pink_400p.png";
import lSagitarius from "../assets/img/signLogos/Sagitarius_pink_400p.png";
import lCapricorn from "../assets/img/signLogos/Capricorn_pink_400p.png";
import lAquarius from "../assets/img/signLogos/Aquarius_pink_400p.png";
import lPisces from "../assets/img/signLogos/Pisces_pink_400p.png";
export default {
  setup() {
    const store = useStore();

    return {};
  },
  data() {
    return {
      logoSigns: [
        lAries,
        lTarus,
        lGemini,
        lCancer,
        lLeo,
        lVirgo,
        lLibra,
        lScorpio,
        lSagitarius,
        lCapricorn,
        lAquarius,
        lPisces,
      ],
    };
  },
  mounted() {},
};
</script>
<style scoped>
.logoSign-sun-s {
  width: 100px;
}
.friend-block {
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}
</style>
