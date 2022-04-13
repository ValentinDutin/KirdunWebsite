<template>
<div class="movie-block">
    <h3 class="title">
        {{title}}
    </h3>
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
    movieId: String
  },
  data () {
    return {
      srcdoc: {
        type: String
      },
      moviePath: {
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
      console.log(this.moviePath)
      this.moviePath = 'https://www.youtube.com/embed/' + this.movieId
      console.log(this.moviePath)
      this.moviePath.concat('?autoplay=1')
      this.srcdoc = `
        <style>*{padding:0;margin:0;overflow:hidden;}
        img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
        svg{ width: 68px; text-align:center;color:rgba(30, 30, 30, 0.8);}
        span{height:1.5em;text-align:center;font:45px/1.5 sans-serif;}</style>
        <a href="` + this.moviePath + `">
            <img src="${this.createImgPath()}"
            alt="` + this.title + `"
        >
          <span>
            <svg height="100%" viewBox="0 0 68 48" width="100%">
              <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="currentColor">
              </path>
              <path d="M 45,24 27,14 27,34" fill="#fff">
              </path>
            </svg>
          </span>
        </a>
      `
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
