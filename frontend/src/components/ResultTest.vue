<template>
  <div>
    <h2>Вы набрали: {{ score }}%</h2>
    <h1>Ваша оценка: {{ grade }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TestResult: this.$store.state.TestResult,
      AllQuestions: this.$store.state.AllQuestions,
      score: 0,
      grade: 0,
    };
  },
  methods: {
    ShowResultTest() {
      this.score = 0;
      this.grade = 0;
      this.score = (this.TestResult / this.AllQuestions.length) * 100;

      if (this.score <= 100 && this.score >= 80) {
        this.grade = 5;
      } else if (this.score <= 70 && this.score >= 60) {
        this.grade = 4;
      } else if (this.score <= 50 && this.score >= 40) {
        this.grade = 3;
      } else {
        this.grade = 2;
      }
    },
  },
  mounted() {
    this.score = 0;
    this.grade = 0;
    this.ShowResultTest();
  },
};
</script>

<style></style>
