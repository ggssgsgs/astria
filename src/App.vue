<script setup>
import {RouterLink, RouterView} from "vue-router";
</script>

<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            alt="Astria logo"
            src="@/assets/logo.png"
            width="30"
            height="30"
          />
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
          >
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-secondary" type="submit">
              Search
            </button>
          </form>
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
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
                  <RouterLink to="/logIn" class="dropdown-item"
                    >登入</RouterLink
                  >
                </li>
                <li @click="logOut" class="dropdown-item">
                  登出
                  <!-- <RouterLink to="/"  class="dropdown-item"
                    ></RouterLink
                  > -->
                </li>
                <li>
                  <RouterLink to="/signUp" class="dropdown-item"
                    >註冊</RouterLink
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <RouterLink to="/myInfo" class="dropdown-item"
                    >我的帳號</RouterLink
                  >
                </li>
                <li>
                  <RouterLink to="/myOrders" class="dropdown-item"
                    >我的預約</RouterLink
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>

  <RouterView />
</template>
<script>
export default {
  methods: {
    logOut() {
      localStorage.removeItem("token");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
<style>
* {
  margin: 0px;
  padding: 0px;
  color: gray;
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
</style>
