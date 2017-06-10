<template>
<div class="col-md-4">
  <div class="event-card">
    <h4 class="card-title">{{eventing.title}}</h4>
    <p class="card-text">{{eventing.description}}</p>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Date: {{eventing.date}}</li>
      <li class="list-group-item">Location: {{eventing.location}}</li>
      <li class="list-group-item">Host: {{eventing.email}}</li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['eventing']
}
</script>