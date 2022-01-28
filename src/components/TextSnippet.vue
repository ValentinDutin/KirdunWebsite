<template>
<div class="snippet">
    <h1 class="title">
        {{title}}
    </h1>
    <h3 class="description-text">
        {{text}}
    </h3>
</div>
</template>

<script>
export default {
  name: 'AppFooter',
  props: {
    title: String,
    text: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.title{
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 21px;
    margin-bottom: 24px;
    width: auto;
    color: black;
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    text-align: left;
}
.description-text{
    margin: 16px 0px;
    width: auto;
    color: black;
    font-size: 18px;
    font-weight: 400;
    text-align: left;
    line-height: 28px;
}
</style>
