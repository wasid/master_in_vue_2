<template>
  <div class="col-md-offset-4">
      <div class="col-md-6">
      <h3>Signin Form</h3>
      <form>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" placeholder="email" v-model="email">{{email}}
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" placeholder="password" v-model="password">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>