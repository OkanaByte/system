<template>
  <div class="row">
    <div class="col-md-6">
      <form class="form-signin" @submit.prevent="login">
        <h2 class=" form-signin-heading ">Login</h2>
        <label for="inputEmail" class="sr-only " >Email address</label>
        <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword " class="sr-only ">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required  v-model="password" >
        <button class="btn btn-lg btn-primary btn-block " type="submit">Sign in</button>
      </form>
    </div>
  </div>
</template>
<script>
import {loginUrl} from './../../config/index.js'
import { ClientId, ClientSecret } from './../../env.js'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      const postData = {
        grant_type: 'password',
        client_id: ClientId,
        client_secret: ClientSecret,
        username: this.email,
        password: this.password,
        scope: ''
      }
      this.$http.post(loginUrl, postData)
      .then(response => {
        this.$auth.setToken(response.body.access_token, response.body.expires_in + Date.now())
        this.$router.push('/feed')
      })
    }
  }
}
</script>
<style>

</style>
