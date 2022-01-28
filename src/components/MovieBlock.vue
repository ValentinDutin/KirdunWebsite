<template>
<div class="movie-block">
    <h3 class="title">
        {{title}}
    </h3>
    <iframe class="movie"
        :src="moviePath"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >
    </iframe>
</div>
</template>

<script>
export default {
  name: 'MovieBlock',
  props: {
    title: String,
    moviePath: String
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.movie-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: center;
    border-radius: 15px;
    background: white;
    height: auto;
    width: 330px;
    margin: auto;
    transition: 0.5s;
}
.title{
    display: flex;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 0;
    width: auto;
    color: inherit;
    font-family: "Trebuchet MS", sans-serif;
    font-weight: 550;
    color: inherit;
    font-size: 16px;
    text-align: start;
}
.movie{
    display: flex;
    width: auto;
    height: 170px;
    margin: 15px;
    margin-top: 10px;
    border-radius: 10px;
}
</style>
