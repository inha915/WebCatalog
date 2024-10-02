<template>
  <div class="card-container" style="cursor: pointer">
    <div class="card">
      <img :src="image" alt="Card Image" class="card-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "CardRect",
  props: {
    image: {
      type: String,
      required: true, // 이미지 URL이 필수임을 명시
    },
  },
};
</script>

<style scoped>
.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 380px; /* 카드 너비 설정 */
  height: 290px; /* 카드 높이 설정 */
  padding: 10px;
  margin: 15px;
  background-color: rgb(212, 212, 214);
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease; /* 애니메이션 효과 */
}

.card-image {
  width: 100%; /* 카드 너비에 맞춤 */
  height: auto; /* 비율 유지 */
  border-radius: 8px; /* 위쪽 모서리 둥글게 */
  transition: transform 0.3s ease; /* 애니메이션 효과 */
}

/* 마우스 오버 시 이미지 확대 */
.card-container:hover .card-image {
  transform: scale(1.15); /* 이미지 크기를 5% 키움 */
}
</style>
