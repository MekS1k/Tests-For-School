<template>
  <div>
    <input
      placeholder="Введите название теста"
      type="text"
      v-model="TestName"
    />
    <input placeholder="Введите айди теста" type="text" v-model="idTest" />
    <input
      placeholder="Введите дату создания теста"
      type="text"
      v-model="DateOfCreateTest"
    />
    <input
      placeholder="Введите дату окончания теста"
      type="text"
      v-model="DateOfFinishTest"
    />
    <input
      placeholder="Введите айди создателя теста"
      type="text"
      v-model="TestCreator"
    />
    <!-- Тестирующихся может быть много - доработать -->
    <input
      placeholder="Введите того, кто будет проходить тест"
      type="text"
      v-model="Tested"
    />
    <button @click="saveTest">Добавить вопросы</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      idTest: "",
      TestName: "",
      DateOfCreateTest: "",
      DateOfFinishTest: "",
      TestCreator: "",
      Tested: "",
    };
  },
  methods: {
    async saveTest() {
      try {
        await axios.post("http://localhost:5000/Tests", {
          idTest: this.idTest,
          TestName: this.TestName,
          DateOfCreateTest: this.DateOfCreateTest,
          DateOfFinishTest: this.DateOfFinishTest,
          TestCreator: this.TestCreator,
          Tested: this.Tested,
        });
        this.idTest = "";
        this.TestName = "";
        this.DateOfCreateTest = "";
        this.DateOfFinishTest = "";
        this.TestCreator = "";
        this.Tested = "";
        this.$router.push("/CreateQuestionsForTests");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
