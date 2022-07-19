<template>
  <UBtn @confirm="handler" :msg="msg"></UBtn>
  <div>date: {{ formatToDateTime(new Date()) }}</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { userApi } from "@ueumd/apis";
import { arrayUtil, formatToDateTime } from "@ueumd/utils";

import { UBtn } from "@ueumd/components";

const msg = ref("Hello");

const handler = (msg: string) => {
  console.log("msg: ", msg);
};

const callApi = () => {
  userApi.getUser(18).then((res) => {
    console.log(18, res);
  });

  userApi.getUserByUid("2022-uid").then((res) => {
    console.log("uid: ", res);
  });
};

const testArray = () => {
  const list = ["vue", "react", "pnina"];
  console.log("index: ", arrayUtil.findIndex("react", list)); // 1
  console.log("index: ", arrayUtil.findIndex("angular", list)); // -1
};

onMounted(() => {
  // callApi();
  testArray();
});
</script>
