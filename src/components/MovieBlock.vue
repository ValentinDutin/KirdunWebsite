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
    align-items: center;
    border-radius: 15px;
    background: white;
    height: auto;
    // width: 330px;
    width: 330px;
    margin: auto;
}
.title{
    display: flex;
    // flex-direction: row;
    // -webkit-box-pack: start;
    // justify-content: flex-start;
    // align-items: flex-start;
    margin-top: 10px;
    margin-left: 20px;
    margin-right: 10px;
    margin-bottom: 0;
    // margin-bottom: 24px;
    width: auto;
    color: black;
    font-size: 18px;
    // line-height: 38px;
    // font-weight: 500;
    // text-align: left;
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
