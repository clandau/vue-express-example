<template>
  <div>
    <h1>Register page</h1>
    <form action="" method="get" class="form-example">
      <div class="form-example">
        <label for="email">Enter your email: </label>
        <input type="email" name="email" id="email" v-model="email" required />
      </div>
      <br />
      <div class="form-example">
        <label for="password">Enter your password: </label>
        <input
          type="password"
          name="password"
          id="password"
          v-model="password"
          required
        />
      </div>
      <br />
      <div class="form-example">
        <input type="submit" value="Subscribe!" @click="register" />
      </div>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    async register() {
      const res = await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
      console.log(res);
    },
  },
};
</script>

<style lang="scss" scoped></style>
