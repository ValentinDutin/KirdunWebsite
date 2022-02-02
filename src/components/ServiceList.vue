<template>
    <ul class="service-list">
      <li v-for="(item, index) in serviceList" :key="index">
        <service-card
            :name="item.name"
            :routePath="item.routePath"
            :imgPath="item.imgPath"
        />
      </li>
    </ul>
</template>

<script>
import ServiceCard from './ServiceCard.vue'
export default {
  components: {
    ServiceCard
  },
  name: 'ServiceList',
  data () {
    return {
      serviceList: [
        {
          imgPath: 'accounting-services-1',
          routePath: '/services/accounting-services',
          name: 'Бухгалтерские услуги'
        },
        {
          imgPath: 'legal-services-1',
          routePath: '/services/legal-services',
          name: 'Юридческие услуги'
        },
        {
          imgPath: 'liquidation-1',
          routePath: '/services/liquidation',
          name: 'Ликвидация'
        },
        {
          imgPath: 'creating-le',
          routePath: '/services/creating-le',
          name: 'Создание юр. лиц'
        },
        {
          imgPath: 'supporting',
          routePath: '/services/supporting',
          name: 'Сопровождение бизнеса'
        },
        {
          imgPath: 'consultation',
          routePath: '/services/consultation',
          name: 'Консультация'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';

.service-list{
  list-style-type: none;

  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  :hover{
        transform: scale(1.02);
    }
  // :last-child{
  //     padding-bottom: 0;
  //   }
  li{
    //padding-bottom: 10px;
    :hover{
        transform: none;
    }
  }
}
</style>
