<template>
  <div>
    <input
      placeholder="Введите текст вопроса"
      type="text"
      v-model="TextQuestion"
    />
    <select v-model="selected" @change="getTestID(selected)" name="" id="">
      <option value="">Выберите тест, которому нужно добавить вопрос</option>

      <option
        v-for="testName in filteredTests"
        :key="testName.id"
        :value="testName.idTest"
      >
        {{ testName.TestName }}
      </option>
    </select>

    <input placeholder="Введите вариант ответа" type="text" v-model="Answer1" />
    <input placeholder="Введите вариант ответа" type="text" v-model="Answer2" />
    <input placeholder="Введите вариант ответа" type="text" v-model="Answer3" />
    <input
      placeholder="Введите правильный ответ"
      type="text"
      v-model="AnswerQuestion"
    />
    <button @click="saveQuestions">Сохранить вопрос</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "",
      AnswerQuestion: "",
      TextQuestion: "",
      Answer1: "",
      Answer2: "",
      Answer3: "",
      test_id: "",
      AllTests: [],
      userID: this.$store.state.UserID,
    };
  },
  methods: {
    async viewTest() {
      try {
        const testResponse = await axios.get("http://localhost:5000/Tests");
        const allTests = testResponse.data;
        this.AllTests = allTests.map((test) => ({
          id: test.id,
          TestCreator: test.TestCreator,
          idTest: test.idTest,
          TestName: test.TestName,
        }));
      } catch (err) {
        console.log(err);
      }
    },

    async saveQuestions() {
      try {
        await axios.post("http://localhost:5000/Questions", {
          AnswerQuestion: this.AnswerQuestion,
          TextQuestion: this.TextQuestion,
          Answer1: this.Answer1,
          Answer2: this.Answer2,
          Answer3: this.Answer3,
          test_id: this.test_id,
        });
        this.AnswerQuestion = "";
        this.TextQuestion = "";
        this.Answer1 = "";
        this.Answer2 = "";
        this.Answer3 = "";
      } catch (err) {
        console.log(err);
      }
    },

    getTestID(id) {
      this.test_id = id;
    },
  },
  computed: {
    filteredTests() {
      return this.AllTests.filter((test) => test.TestCreator == this.userID);
    },
  },
  mounted() {
    this.viewTest();
  },
};
</script>

<style></style>
