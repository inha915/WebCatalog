<template>
  <div class="layout">
    <navigationBar />

    <figure class="image-container">
      <img
        alt="Digital Twin Background"
        src="@/assets/img/Digital/BackGround.jpg"
        class="custom-image"
      />
      <div class="overlay-content">
        <slot></slot>
        <!-- 카드 콘텐츠를 여기에 받을 수 있습니다 -->
      </div>
    </figure>
  </div>
</template>

<script>
import NavigationBar from "@/views/navigationBar.vue";

export default {
  name: "CategoryLayout",
  components: {
    NavigationBar,
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
  margin-top: 0px;
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
}

.custom-image {
  width: 100%;
  margin-top: 0px;
  height: auto;
  display: block;
}

.overlay-content {
  margin-top: 0px;
  position: absolute; /* 이미지를 가리지 않도록 조정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center; /* 중앙 정렬 */
  align-items: center; /* 수직 중앙 정렬 */
}
</style>
