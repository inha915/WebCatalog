<template>
  <div class="layout">
    <navigationBar />

    <!-- 첫 번째 이미지 -->
    <figure class="image-container">
      <img
        alt="First Image"
        src="@/assets/img/image.png"
        class="custom-image"
      />
      <div class="overlay-content">
        <div class="left-content">
          <TitleCont />
        </div>
        <div class="right-content">
          <RectGrid />
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
import NavigationBar from "@/views/navigationBar.vue";
import TitleCont from "@/components/TitleCont.vue";
import RectGrid from "@/views/RectGrid.vue";

export default {
  name: "MainLayout",
  components: {
    NavigationBar,
    TitleCont,
    RectGrid,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.image-container {
  position: relative; /* 자식 요소가 이미지 위에 겹칠 수 있도록 relative로 설정 */
  width: 100%;
  display: flex;
  justify-content: center;
}

.custom-image {
  width: 100%;
  height: auto;
  display: block; /* 이미지가 전체 너비를 차지하도록 설정 */
}

.overlay-content {
  position: absolute; /* 이미지 위에 겹치도록 설정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between; /* 왼쪽과 오른쪽으로 나누기 */
  align-items: center;
  padding: 20px;
}

.left-content {
  width: 50%; /* TitleCont가 절반을 차지 */
}

.right-content {
  width: 70%; /* RectGrid가 절반을 차지 */
  height: 95%;
}
</style>
