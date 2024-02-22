<script lang="ts">
  const currentTime = new Date()
  const currentHour = currentTime.getHours()

  let greeting = ''

  if(currentHour < 12) {
    greeting = 'Good morning!'
  } else if(currentHour < 18) {
    greeting = 'Good afternoon!'
  } else {
    greeting = 'Good night!'
  }
</script>

<h1 class="text-4xl py-6 px-3 font-bold">{greeting}</h1>