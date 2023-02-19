<template>
  <div>
    <div class="field">
      <label class="label">Логин</label>
      <div class="control">
        <input class="input" type="text" v-model="login" />
      </div>
    </div>

    <div class="field">
      <label class="label">Пароль</label>
      <div class="control">
        <input class="input" type="text" v-model="pass" />
      </div>
    </div>
    <div class="field">
      <label class="label">Имя</label>
      <div class="control">
        <input class="input" type="text" v-model="name" />
      </div>
    </div>
    <div class="field">
      <label class="label">Фамилия</label>
      <div class="control">
        <input class="input" type="text" v-model="SecondName" />
      </div>
    </div>
    <div class="field">
      <label class="label">Отчество(при наличии)</label>
      <div class="control">
        <input class="input" type="text" v-model="DadName" />
      </div>
    </div>
    <div class="field">
      <label class="label">Почта</label>
      <div class="control">
        <input class="input" type="text" v-model="Email" />
      </div>
    </div>
    <div class="field">
      <label class="label">Роль</label>
      <div class="control">
        <input class="input" type="text" v-model="Role" />
      </div>
    </div>

    <div class="control">
      <button class="button is-success" @click="saveProduct">Сохранить</button>
    </div>
  </div>
</template>

<script>
// import axios
import axios from "axios";

export default {
  name: "AddProduct",
  data() {
    return {
      login: "",
      pass: "",
      name: "",
      SecondName: "",
      DadName: "",
      Email: "",
      Role: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        await axios.post("http://localhost:5000/credentials", {
          Логин: this.login,
          Пароль: this.pass,
          Имя: this.name,
          Фамилия: this.SecondName,
          Отчество: this.DadName,
          Почта: this.Email,
          IDРоли: this.Role,
        });
        this.login = "";
        this.pass = "";
        this.name = "";
        this.SecondName = "";
        this.DadName = "";
        this.Email = "";
        this.Role = "";
        this.$router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>
