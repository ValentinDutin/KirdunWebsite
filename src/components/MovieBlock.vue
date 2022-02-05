<template>
<div class="movie-block">
    <h3 class="title">
        {{title}}
    </h3>
    <!-- <iframe class="movie"
        :src="moviePath"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    >
    </iframe> -->
    <!-- allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" -->
    <iframe class="movie"
      :src="moviePath"
      :srcdoc="srcdoc"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      :title="title"
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
  },
  data () {
    return {
      srcdoc: {
        type: String
      }
    }
  },
  created () {
    this.createSrcdoc()
  },
  methods: {
    createImgPath () {
      var tpmPath = this.moviePath
      console.log(this.moviePath)
      var imgPath = ''
      var tmp = tpmPath.split('/')
      imgPath = 'https://i.ytimg.com/vi/' + tmp[tmp.length - 1] + '/hqdefault.jpg'
      console.log(tmp[0])
      return imgPath
    },
    createSrcdoc () {
      this.moviePath.concat('?autoplay=1')
      this.srcdoc = `<style>*{padding:0;margin:0;overflow:hidden;}
        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
        span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style>
        <a href="` + this.moviePath + `">
        <img src="${this.createImgPath()}"
        alt="` + this.title + `"
        >
        <span>▶</span>
        </a>`
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.movie-block{
    display: flex;
    flex-direction: column;
    justify-content: center;
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
