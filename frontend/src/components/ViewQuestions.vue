<template>
  <div>
    <div v-for="question in filteredQuestions" :key="question.id">
      <div v-if="testID == question.test_id">
        <p class="quest">{{ question.TextQuestion }}</p>
        <div
          class="check"
          v-for="answer in shuffle([
            question.Answer1,
            question.Answer2,
            question.Answer3,
            question.AnswerQuestion,
          ])"
          :key="answer"
        >
          <p class="quest">{{ answer }}</p>
          <input
            type="checkbox"
            :id="'Answer-' + question.id + '-' + answer"
            name="scales"
          />
        </div>
      </div>
    </div>
    <div>
      <router-link to="/ResultTest">Показать результаты</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingIn",
  data() {
    return {
      questions: [],
      testID: this.$store.state.testID,
      result: 0,
      filteredQuestions: [],
    };
  },

  methods: {
    async ViewQuestions() {
      try {
        const questions = await fetch("http://localhost:5000/questions");
        const data = await questions.json();
        this.questions = data;
        console.log(this.questions, "q");

        this.filteredQuestions = this.questions.filter(
          (question) => question.test_id == this.testID
        );
        this.$store.state.AllQuestions = this.filteredQuestions;
        console.log(this.$store.state.AllQuestions, "!!!");
      } catch (err) {
        console.log(err);
      }
    },
    beforeRouteLeave() {
      this.$store.state.TestResult = 0;
      this.$store.state.AllQuestions = [];
    },

    TestResult(event) {
      const rightCheck = event.target.checked;
      if (rightCheck) {
        this.result += 1;
        console.log(this.result);
      } else {
        this.result -= 1;
        console.log(this.result);
      }
      this.$store.state.TestResult = this.result;
    },

    shuffle(array) {
      let currentIndex = array.length;
      let temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    },
  },
  async mounted() {
    await this.ViewQuestions();
  },
};
</script>

<style>
.quest {
  margin: 0;
}
.check {
  display: flex;
  align-items: center;
  max-width: 210px;
  justify-content: space-between;
  margin: 30px 50px 30px 0;
}
#scales {
  width: 20px;
}
</style>
