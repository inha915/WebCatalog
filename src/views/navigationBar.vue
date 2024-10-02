<template>
  <div class="nav" :style="{ backgroundColor: navColor }">
    <nav class="breadcrumb-container" aria-label="breadcrumbs">
      <div class="flex justify-between items-center">
        <div
          class="flex items-center space-x-2"
          @click="goHome"
          style="cursor: pointer"
        >
          <img
            src="@/assets/img/Logo_orange.png"
            alt="STNI Logo"
            class="logo"
          />
          <div
            class="flex flex-col all-text"
            :style="{ color: computedTextColor }"
          >
            <span class="font-bold text-lg">에스티앤아이</span>
            <span class="text-small">Smart Technology & Innovation</span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {
    navColor: {
      type: String,
      default: "rgba(212, 209, 209, 0.861)", // 기본 회색 배경
    },
  },
  computed: {
    computedTextColor() {
      // navText가 회색이면 검정색text, 남색이면 흰색text로 조건부 설정
      return this.navColor === "#030320" ? "white" : "black";
    },
  },
  methods: {
    goHome() {
      // 현재 경로와 목표 경로를 비교하여 중복 라우팅 방지
      if (this.$route.name !== "Home") {
        // 'Home'은 라우터 설정에 따라 맞춰주세요.
        this.$router.push({ name: "Home" });
      }
    },
  },
};
</script>

<style scoped>
.breadcrumb-container {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav {
  margin-top: 0;
  width: 100%;
}
.text-small {
  font-size: 7.5px;
  font-weight: 900px;
}
.logo {
  height: 30px;
  margin-left: 20px;
}
.all-text {
  line-height: 1;
}
</style>
