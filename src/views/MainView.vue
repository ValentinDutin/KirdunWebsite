<template>
  <div class="main-container">
    <div class="description-container">
      <text-snippet
      title="Вас привествует ООО Бернаст!"
      text="Мы занимаемся юридическими услугами более  10 лет. Мы профессионалы своего дела!
      vfjkhvdf jkhkdfsbvjhdfbv jdfbkvbvkdsbvsvdsbvdsbvjsdbv jdsbjsdvsdbvdsbvjds fvbdsvbsd fvbsdfvsdk
      dfvnjds fvkfvnksdfvsdfvk jbksdbvksdbsdv bdsfvbdsfvsdfjvbdjfv bdfsvbsdfjvbsdfbv sdjfbvjsdf vbjdsfvb
      sbsfbsfd vfsdvsdfvsdfvs fvsfvsdfvs
      fsfvsdfvs fvsfsfbrbrs bdbg rsfvbdgf sdfvgb ggfsdv
      dgfsfdfgdb dfsgdbfvfgb fdfsgdfvfsgdf gfsgdf fsdhfg
      gs dfgffsgdb fbfgsbdfvd gfsdbfbdfgdfb dfgsbf sfgdfdhfsg dfgdfsgf
      gcv dfgsdfbvf sgdhfgfsgb dfvdgfsdvdfgs dbvdfg sdbfvdgfsg dfvbdfgsbdfg sbdfv
      dfgb vfngbffsg bdfgnhgfjg hngfghfjhjmhf ghdhgf hgfjghfgfh fjfkhjghgfgf hhjghgf
      hhjgh gfhgfhjhf gfhfdhgdgh fgsrdghfgfghd dghfjf dhfhfdhfgh fgfhgjfdhjhf hgsfdhghfh gsfhdhghf
      jhfjgh jdkdhghfs jfdffahsdg shsjhddhghgsf gjdhgh jhkgjdhghj hkjfhjgjhkjf dhjghsjjdh jgsjhdkjdhjghjh
      jhsghjdh sghhdhsg hsjddhsghj hddhshjhkjfdh shjdkj gshjhshgsj
      jfsghgh ddhhjkhhgg jjgdhgsdjghjf"
      />
    </div>
    <movie-list v-show="!mobile"/>
  </div>
</template>

<script>
import MovieList from '../components/MovieList.vue'
import TextSnippet from '../components/TextSnippet.vue'
export default {
  components: {
    TextSnippet,
    MovieList
  },
  name: 'main-view',
  data () {
    return {
      mobile: null,
      windowWidth: null
    }
  },
  created () {
    window.addEventListener('resize', this.cheeckScreen)
    this.cheeckScreen()
  },
  methods: {
    cheeckScreen () {
      this.windowWidth = window.innerWidth
      if (this.windowWidth <= 750) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.main-container{
  display: flex;
  justify-content: center;
  flex-direction: row;
}
.description-container{
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 20px;
  margin-bottom: 0;
  padding-top: 40px;
  padding-bottom: 120px;
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
  max-width: 720px;
  height: auto;
  background: white;
  border-radius: 15px;
}
@media (max-width: 750px) {
  .description-container {
    margin-right: 0;
  }
}
</style>
