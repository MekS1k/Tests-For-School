<template>
  <div>
    <button @click="createTest()">Создать тест</button>
    <label>Список всех тестов</label>
    <div v-for="test in test" :key="test.id">
      <button>{{ test.TestName }}</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
    };
  },
  methods: {
    createTest() {
      this.$router.push({ name: "CreateDataTests" });
    },

    async viewTest() {
      try {
        const test = await fetch("http://localhost:5000/Tests");
        const testJson = await test.json();
        console.log(testJson);
        this.test = testJson;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.viewTest();
  },
};
</script>

<style></style>
