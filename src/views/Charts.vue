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
            <div class="left-part m-auto d-flex justify-content-center">
              <img
                class="logoSign-sun-s"
                :src="this.logoSigns[friend.signs[0] - 1]"
                alt="sunSignLogo"
              />
            </div>
            <div class="right-part m-auto d-flex flex-column align-items-start">
              <div class="d-flex justify-content-between w-100">
                <span class="mt-3">{{ friend.name }}</span
                ><span>
                  <!-- edit -->
                  <span class="mx-1 btn"
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>
                  </span>
                  <!-- delete -->
                  <span
                    class="btn"
                    @click="
                      deleteFriend(this.$store.state.friends.indexOf(friend))
                    "
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                      />
                      <path
                        fill-rule="evenodd"
                        d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      /></svg
                  ></span>
                </span>
              </div>
              <div>
                {{ friend.birthCity }}
              </div>
              <div>
                {{ friend.birthday }}
              </div>
              <div class="mt-3 d-flex justify-content-end">
                <span class="btn btn-c" @click="viewChart(friend)">
                  查看星盤
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {useStore} from "vuex";

import Swal from "sweetalert2";

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
  methods: {
    viewChart(friend) {
      //將資料導入Current
      this.$store.commit("setCurrentData", {
        name: friend.name,
        birthday: friend.birthday,
        birthTime: friend.birthTime,
        location: friend.birthCity,
      });

      //轉換 UTC 時間
      this.$store.commit("setCurrentUTCtime");

      this.$router.push("/currentChart");
    },
    deleteFriend(index) {
      Swal.fire({
        title: "確定要刪除此好友星盤嗎?",
        text: "資料將永久刪除!",
        icon: "warning",
        iconColor: "rgba(0,2,53,0.3)",
        showCancelButton: true,
        confirmButtonColor: "rgba(0,2,53,0.3)",
        cancelButtonColor: "rgba(0,2,53,0.5)",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.$store.commit("deleteFriend", index);
          Swal.fire("成功!", "已刪除好友星盤.", "success");
        }
      });
    },
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
  width: 150px;
}
.friend-block {
  padding: 30px;
  /* height: 200px; */
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.25);
}
.friend-block div {
  margin: 5px 0px;
}
.left-part {
  width: 30%;
}
.right-part {
  width: 60%;
}
.btn-c {
  padding: 10px;
  width: 100px;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.25);
  color: white;
}
.btn-c:hover {
  cursor: pointer;
  background: rgba(217, 217, 217, 0.5);
  /* width: 200px; */
}
</style>
