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
        v-for="testName in AllTests"
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
      AllTests: "",
    };
  },
  methods: {
    async viewTest() {
      try {
        const test = await fetch("http://localhost:5000/Tests");
        const testJson = await test.json();
        this.AllTests = testJson;
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
  mounted() {
    this.viewTest();
  },
};
</script>

<style></style>
