<template>
<div class="description-container">
    <div class="snippet">
        <h1 class="title">
            Список предоставляемых услуг
        </h1>
        <ul class="services-list">
              <li><router-link class="list-item" to="/services/accounting-services">Бухгалтерские услуги</router-link></li>
              <li><router-link class="list-item" to="/services/legal-services">Юридческие услуги</router-link></li>
              <li><router-link class="list-item" to="/services/liquidation">Ликвидация</router-link></li>
              <li><router-link class="list-item" to="/services/creating-le">Создание юр. лиц</router-link></li>
              <li><router-link class="list-item" to="/services/supporting">Сопровождение бизнеса</router-link></li>
              <li><router-link class="list-item" to="/services/consultation">Консультация</router-link></li>
            </ul>
    </div>
</div>
</template>

<script>
export default {
  name: 'ServicesView'
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.description-container{
  display: flex;
  flex-direction: column;
  -webkit-box-pack: start;
  justify-content: flex-start;
  align-items: flex-start;
  // margin-right: 20px;
  // margin-bottom: 0;
  margin: auto;
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
.services-list{
    list-style-type: none;
    margin: 16px 0px;
    width: auto;
    font-size: 22px;
    font-weight: 400;
    text-align: left;
    line-height: 28px;
}
.list-item{
  color: black;
  text-decoration: none;
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
