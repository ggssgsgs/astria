<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <div class="nav-fixed">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <RouterLink to="/" class="nav-link"
            ><img
              alt="Astria logo"
              src="@/assets/logo.png"
              width="30"
              height="30"
          /></RouterLink>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <form
            class="d-flex me-auto mb-sm-3 mt-sm-3 mb-md-0 mt-md-0"
            role="search"
          ></form>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink @click="home" to="/" class="nav-link"
                >Home</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">關於我們</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/myChart" class="nav-link">我的星盤</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/charts" class="nav-link">好友星盤</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/products" class="nav-link">預約占卜</RouterLink>
            </li>

            <li class="nav-item">
              <a class="nav-link disabled">雙人合盤</a>
            </li>
          </ul>

          <div class="navbar-nav mb-2 mb-lg-0">
            <div class="nav-item dropdown">
              <a
                @click="updateStatus"
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Account
              </a>
              <ul class="dropdown-menu dropdown-menu-lg-end">
                <li>
                  <RouterLink
                    to="/logIn"
                    class="dropdown-item"
                    v-show="!storeIsLogIn"
                    >登入</RouterLink
                  >
                </li>
                <li @click="logOut" class="dropdown-item" v-show="storeIsLogIn">
                  登出
                  <!-- <RouterLink to="/"  class="dropdown-item"
                    ></RouterLink
                  > -->
                </li>
                <li>
                  <RouterLink
                    to="/signUp"
                    class="dropdown-item"
                    v-show="!storeIsLogIn"
                    >註冊</RouterLink
                  >
                </li>
                <li v-show="storeIsLogIn"><hr class="dropdown-divider" /></li>
                <li>
                  <RouterLink
                    to="/myInfo"
                    class="dropdown-item"
                    v-show="storeIsLogIn"
                    >我的帳號</RouterLink
                  >
                </li>

                <li>
                  <RouterLink
                    to="/myInfo"
                    class="dropdown-item"
                    v-show="!isPro && storeIsLogIn"
                    >成為占卜師</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
  <div class="top-blank"></div>

  <RouterView />
  <footer>
    <div class="container">
      <div class="row py-5">
        <div class="col-2 d-flex justify-content-center">
          <div class="my-2">
            <img
              alt="Astria logo"
              src="@/assets/logo.png"
              width="80"
              height="80"
            />
          </div>
        </div>
        <div class="col-6 d-flex flex-column justify-content-between">
          <div>
            <button type="button" class="btn btn-primary mx-2 ms-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path
                  d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"
                ></path>
              </svg>
            </button>
            <button type="button" class="btn btn-success mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-line"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z"
                ></path>
              </svg>
            </button>
            <button type="button" class="btn btn-secondary mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                ></path>
              </svg>
            </button>
            <button type="button" class="btn btn-danger mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"
                ></path>
              </svg>
            </button>
            <span class="mx-2">隱私條款</span>
            <span class="mx-2">問題回報</span>
          </div>
          <div>
            <div>藏星，把星星藏進口袋</div>
            <div>© 2022 Astria. All Rights Reserved.</div>
          </div>
        </div>

        <div class="col-4"></div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  beforeMount() {},

  mounted() {
    if (localStorage.getItem("token") === "ImLogin") {
      this.$store.state.isLogIn = true;
      this.$store.state.myEmail = localStorage.getItem("myemail");
      this.$store.dispatch("getAccountInfo", this.$store.state.myEmail);

      //需要密碼
      //this.$store.dispatch("getLoginInfo", this.$store.state.myEmail);
    } else {
      this.$store.state.isLogIn = false;
    }
    this.$store.state.myEmail = localStorage.getItem("myemail");
    // window.setInterval(() => {
    //   this.updateStatus();
    // }, 100);
  },

  // computed: {
  //   isLogin: () => {
  //     if (localStorage.getItem("token") === "ImLogin") {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   },
  // },
  data() {
    return {
      storeIsLogIn: this.$store.state.isLogIn,
      //isLogIn: true,
    };
  },
  computed: {
    gender() {
      if (this.$store.state.myGender == 1) {
        return "male";
      } else if (this.$store.state.myGender == 2) {
        return "female";
      } else if (this.$store.state.myGender == 0) {
        return "others";
      }
    },
    // isLogIn() {
    //   if (localStorage.getItem("token") === "ImLogin") {
    //     return true;
    //   } else {
    //     return false;
    //   }
    // },
    isPro() {
      return this.$store.state.isPro == true ? true : false;
    },
  },
  methods: {
    updateStatus() {
      if (localStorage.getItem("token") === "ImLogin") {
        this.storeIsLogIn = true;
      } else {
        this.storeIsLogIn = false;
      }
    },
    logOut() {
      localStorage.removeItem("token");
      this.$store.commit("logOut");
      this.$router.push("/");
      location.reload();
    },
  },
};
</script>

<style scoped></style>
<style>
* {
  margin: 0px;
  padding: 0px;
  color: #eee;
}
input {
  border: none;
  outline: none;
}
button {
  border: none;
}
.bgGray {
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  width: 100vw;
}
.BG {
  background: rgb(0, 2, 53);
  display: flex;
  justify-content: center;
  width: 100vw;
}
p {
  color: white;
}
h1 {
}
footer {
  background: #001055;
}
.nav-link:hover {
  background: #f5f5f5;
}
.navbar-brand:hover {
  background: #f5f5f5;
}
.nav-fixed {
  width: 100vw;
  z-index: 3;
  position: fixed;
}
.top-blank {
  height: 58.28px;
}
</style>
