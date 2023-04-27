<template>
  <div>
    <div v-if="teacher">
      <button @click="createTest()">Создать тест</button>
    </div>
    <label>Список всех тестов</label>
    <div v-for="test in test" :key="test.id">
      <div v-if="test.TestCreator == userID || test.Tested == userID">
        <button @click="getTestID(test.idTest)">{{ test.TestName }}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      test: [],
      teacher: true,
      userID: this.$store.state.UserID,
    };
  },
  methods: {
    createTest() {
      this.$router.push({ name: "CreateDataTests" });
    },

    getTestID(testID) {
      this.$store.state.testID = testID;
      console.log(this.$store.state.testID);
      this.$router.push({ name: "ViewQuestions" });
    },

    async viewTest() {
      try {
        const test = await fetch("http://localhost:5000/Tests");
        const testJson = await test.json();
        console.log(testJson);
        this.test = testJson;
        this.$store.state.AllTests = this.test;
      } catch (err) {
        console.log(err);
      }
    },

    checkTeacher() {
      if (this.$store.state.roleForUnderstande == 2) {
        this.teacher = false;
      }
    },
  },
  mounted() {
    this.viewTest();
    this.checkTeacher();
    console.log(this.$store.state.UserID);
  },
};
</script>

<style></style>
