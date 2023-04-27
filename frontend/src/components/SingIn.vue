<template>
  <div class="sing-in-login">
    <div class="all">
      <div class="container" id="container">
        <div class="form-container sign-in-container">
          <form action="#">
            <div class="duga"></div>
            <h1>Авторизация</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"
                ><i class="fab fa-google-plus-g"></i
              ></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <input type="text" v-model="login" placeholder="Логин" />
            <input type="text" v-model="pass" placeholder="Пароль" />
            <button @click="SingIN">Войти</button>
          </form>
        </div>
      </div>

      <footer></footer>
    </div>
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
      role: [],
      UserID: "",
    };
  },
  methods: {
    // Create New product
    async saveProduct() {
      try {
        const credentials = await fetch("http://localhost:5000/credentials");
        const data = await credentials.json();
        this.credentials = data;
        this.$store.state.users = this.credentials;
        console.log(this.$store.state.users);
      } catch (err) {
        console.log(err);
      }
    },

    async takeRole() {
      try {
        const role = await fetch("http://localhost:5000/role");
        const data = await role.json();
        this.role = data;
        this.$store.state.role = this.role;
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
          this.UserID = this.credentials[i].UserID;
          this.$store.state.roleForUnderstande = this.credentials[i].IDРоли;
          this.$store.state.UserID = this.UserID;
        } else {
          console.log("Данные не верны");
        }
      }
    },
  },
  mounted() {
    this.saveProduct();
    this.takeRole();
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,800");

.duga {
  height: 85px;
  width: 768px;
  background-color: #2bc3ff;
  margin: 0;
  border-bottom-right-radius: 100%;
  border-bottom-left-radius: 100%;
}
.form-container.sign-in-container {
  margin-left: 25%;
}
.all {
  background: #f6f5f7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  height: 100vh;
  margin: -20px 0 50px;
}

h1 {
  font-weight: bold;
  margin: 0;
}

h2 {
  text-align: center;
}

p {
  font-size: 14px;
  font-weight: 100;
  line-height: 20px;
  letter-spacing: 0.5px;
  margin: 20px 0 30px;
}

span {
  font-size: 12px;
}

a {
  color: #333;
  font-size: 14px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #ff4b2b;
  background-color: #2bc3ff;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button.ghost {
  background-color: transparent;
  border-color: #ffffff;
}

form {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
}

input {
  background-color: #eee;
  border: none;
  padding: 12px 15px;
  margin: 8px 0;
  width: 100%;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 768px;
  max-width: 100%;
  min-height: 480px;
}

.form-container {
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;
}

.sign-in-container {
  left: 0;
  width: 50%;
  z-index: 2;
}

.social-container {
  margin: 20px 0;
}
</style>
