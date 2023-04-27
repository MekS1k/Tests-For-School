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
    <!-- Тестирующихся может быть много - доработать -->
    <select v-model="selected" @change="getRoleID(selected)" name="" id="">
      <option value="">Выберите того, кто будет проходить тест</option>
      <option
        v-for="RoleName in allRole"
        :key="RoleName.id"
        :value="RoleName.ID"
      >
        {{ RoleName.roule_name }}
      </option>
    </select>
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
      selected: "",
      allRole: this.$store.state.role,
      UserID: this.$store.state.UserID,
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
          TestCreator: this.UserID,
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

    getRoleID(id) {
      this.Tested = id;
      console.log(this.Tested);
    },
  },
};
</script>

<style></style>
