<template>
<div class="description-container">
        <h1 class="title">
            Список предоставляемых нами услуг
        </h1>
    <div class="snippet">
        <service-list />
    </div>
</div>
</template>

<script>
import ServiceList from '../components/ServiceList.vue'
export default {
  components: {
    ServiceList
  },
  name: 'ServicesView'
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.description-container{
  display: flex;
  flex-direction: column;
  // -webkit-box-pack: start;
  justify-content: space-between;
  align-items: center;
  // margin-right: 20px;
  // margin-bottom: 0;
  margin: auto;
  padding: 20px 0;
  // width: 100%;
  width: auto;
  max-width: 1120px;
  height: auto;
  // background: white;
  // border-radius: 15px;
  // h1{
  //   text-align: center;
  //   background: white;
  //   padding: 25px 35px;
  //   // padding: 25px 0;
  //   border-radius: 15px;
  // }
}
.snippet{
  display: flex;
  justify-content: start;
  flex-direction: row;
}
.title{
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 21px;
    margin-bottom: 44px;
    width: auto;
    color: black;
    font-size: 32px;
    line-height: 38px;
    font-weight: 700;
    text-align: left;
    text-align: center;
    background: white;
    padding: 25px 35px;
    // padding: 25px 0;
    border-radius: 15px;
}
</style>
