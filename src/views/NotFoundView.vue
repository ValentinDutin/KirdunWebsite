<template>
  <div class="not-found">
    <h1 class="error-404">
        404
    </h1>
    <h1 class="message">Извините, данная страница не найдена</h1>
  </div>
</template>

<script>
export default {
  name: 'not-found-view'
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
    .not-found {
        display: flex;
        position: relative;
        flex-direction: column;
        width: 100%;
        margin: auto;
        max-width: 1220px;
        height: auto;
        padding: 60px;
    }
    .error-404 {
        font-size: 6.875em;
        font-weight: 600;
        color: #bb4d2c;
        margin: auto;
    }
    .message {
        margin: auto;
    }
</style>
