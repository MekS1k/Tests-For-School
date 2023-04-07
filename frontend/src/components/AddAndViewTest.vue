<template>
  <div>
    <button @click="createTest()">Создать тест</button>
    <label>Список всех тестов</label>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    createTest() {
      this.$router.push({ name: "CreateTests" });
    },
  },
};
</script>

<style></style>
