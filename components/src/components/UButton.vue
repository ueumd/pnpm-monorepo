<template>
  <div class="btn" @click="showMsg">{{ msg }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  msg?: string;
}>();

const emits = defineEmits<{
  (e: "confirm", msg: string): void;
}>();

const showMsg = () => {
  emits("confirm", props.msg);
};
</script>

<style scoped>
.btn {
  margin: 8px;
  padding: 4px 8px;
  border-radius: 10px;
  background-color: skyblue;
  border: 1px solid skyblue;
  text-align: center;
  color: #ffffff;
}
</style>
