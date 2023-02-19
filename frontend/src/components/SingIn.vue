<template>
  <div>
    <div>Введите логин и пароль для входа</div>
    <nav>
      <input type="text" v-model="login" /> <input type="text" v-model="pass" />
    </nav>
    <nav>
      <button @click="SingIN">Войти</button>
      <button @click="$router.push({ name: 'AddAcount' })">
        Зарегистрироваться
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  name: "SingIn",
  data() {
    return {
      credentials: [],
      login: "",
      pass: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        const credentials = await fetch("http://localhost:5000/credentials");
        const data = await credentials.json();
        this.credentials = data;
      } catch (err) {
        console.log(err);
      }
    },
    SingIN() {
      console.log(this.credentials);
      for (let i in this.credentials) {
        if (
          this.credentials[i].Логин == this.login &&
          this.credentials[i].Пароль == this.pass
        ) {
          this.$router.push({ name: "AddAndViewTest" });
        } else {
          console.log("Данные не верны");
        }
        console.log(i);
      }
    },
  },
  mounted() {
    this.saveProduct();
  },
};
</script>

<style></style>
