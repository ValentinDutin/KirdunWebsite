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
  overflow: hidden;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  padding: 20px 0;
  width: auto;
  max-width: 1120px;
  height: auto;
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
    // text-align: left;
    text-align: center;
    background: white;
    padding: 25px 35px;
    border-radius: 15px;
}
@media (max-width: 716px){
  .title {
    width: 330px;
    padding: 25px 0;
  }
}
</style>
