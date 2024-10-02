<template>
  <div class="flex justify-between items-center">
    <!-- 로고를 왼쪽에 배치 -->
    <div class="flex items-center space-x-2">
      <img src="@/assets/img/Logo_orange.png" alt="STNI Logo" class="logo" />
      <div class="flex flex-col all-text">
        <span class="font-bold text-lg">에스티앤아이</span>
        <span class="text-small">Smart Technology & Innovation</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-small {
  font-size: 7.5px;
  font-weight: 900;
}

.logo {
  height: 40px; /* 로고 크기 조정 */
  margin-left: 7px;
}

.all-text {
  margin-left: 0px; /* 텍스트와 로고 사이의 간격을 최소화 */
  line-height: 1;
}
</style>
