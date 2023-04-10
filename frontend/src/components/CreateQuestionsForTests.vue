<template>
  <div>
    <input
      placeholder="Введите текст вопроса"
      type="text"
      v-model="TextQuestion"
    />
    <input
      placeholder="Введите айди теста, которому нужно добавить вопрос"
      type="text"
      v-model="test_id"
    />
    <input placeholder="Введите вариант ответа" type="text" v-model="Answer1" />
    <input placeholder="Введите вариант ответа" type="text" v-model="Answer2" />
    <input placeholder="Введите вариант ответа" type="text" v-model="Answer3" />
    <input
      placeholder="Введите правильный ответ"
      type="text"
      v-model="AnswerQuestion"
    />
    <button @click="saveQuestions">Сохранить вопрос</button>
    <button>Добавить вопрос</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      AnswerQuestion: "",
      TextQuestion: "",
      Answer1: "",
      Answer2: "",
      Answer3: "",
      test_id: "",
    };
  },
  methods: {
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
        this.test_id = "";
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
