<template>
  <div>
    <div v-for="question in questions" :key="question.id">
      <div v-if="testID == question.test_id">
        <p class="quest">{{ question.TextQuestion }}</p>
        <div class="check">
          <p class="quest">{{ question.Answer1 }}</p>
          <input type="checkbox" :id="'Answer1-' + question.id" name="scales" />
        </div>

        <div class="check">
          <p class="quest">{{ question.Answer2 }}</p>
          <input type="checkbox" :id="'Answer2-' + question.id" name="scales" />
        </div>
        <div class="check">
          <p class="quest">{{ question.Answer3 }}</p>
          <input type="checkbox" :id="'Answer3-' + question.id" name="scales" />
        </div>
        <div class="check">
          <p class="quest">{{ question.AnswerQuestion }}</p>
          <input
            @click="TestResult"
            type="checkbox"
            :id="'TrueAnswer-' + question.id"
            name="scales"
          />
        </div>
      </div>
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
    };
  },
  methods: {
    async ViewQuestions() {
      try {
        const questions = await fetch("http://localhost:5000/questions");
        const data = await questions.json();
        this.questions = data;
        console.log(this.questions);
      } catch (err) {
        console.log(err);
      }
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
    },
  },
  mounted() {
    this.ViewQuestions();
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
