<template>
  <div class="col-md-6">
    <div class="joke-card">
      <p><u>{{joke.setup}}</u></p>
      <p><em>{{joke.punchline}}</em></p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['joke']
}

</script>
