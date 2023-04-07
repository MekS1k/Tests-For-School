<template>
  <div>
    <div v-for="question in questions" :key="question.id">
      <p>{{ question.TextQuestion }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingIn",
  data() {
    return {
      questions: [],
    };
  },
  methods: {
    async ViewQuestions() {
      try {
        const questions = await fetch("http://localhost:5000/questions");
        const data = await questions.json();
        this.questions = data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  mounted() {
    this.ViewQuestions();
  },
};
</script>

<style></style>
