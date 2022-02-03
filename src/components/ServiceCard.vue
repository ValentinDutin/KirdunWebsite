<template>
<div class="service-card">
    <img :src="imagePath" :alt="name">
    <router-link
        class="@link-item"
        :to="routePath"
    >
        {{name}}
    </router-link>
</div>
</template>

<script>
export default {
  name: 'ServiceCard',
  props: {
    name: {
      type: String,
      required: true
    },
    routePath: {
      type: String,
      required: true
    },
    imgPath: {
      type: String,
      required: true,
      default: 'https://bipbap.ru/wp-content/uploads/2020/03/skvishi-16-800x800-1-640x640.jpg'
    }
  },
  computed: {
    imagePath () {
      return require('../assets/icons/' + this.imgPath + '.png')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.service-card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    // margin: 20px 0 0 20px;
    border-radius: 15px;
    background: white;
    height: 200px;
    width: 330px;
    // margin: auto;
    transition: 0.5s;
    img{
        margin-left: 115px;
        height: 100px;
        width: 100px;
    }
    a{
        text-align: center;
        text-decoration: none;
        font-size: 25px;
        color: inherit;
        padding-bottom: 10px;
    }
}
</style>
