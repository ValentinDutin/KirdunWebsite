<template>
    <ul class="movie-list">
      <li v-for="(item, index) in movieList" :key="index">
        <movie-block
            :title="item.title"
            :moviePath="item.moviePath"
        />
      </li>
    </ul>
</template>

<script>
import MovieBlock from './MovieBlock.vue'
export default {
  components: {
    MovieBlock
  },
  name: 'movie-list',
  data () {
    return {
      movieList: [
        {
          title: 'Нарушили процедуру продажи авто? Последствия и варианты действий',
          moviePath: 'https://www.youtube.com/embed/-sk0OzflGCQ'
        },
        {
          title: 'Выселение из жилого помещения',
          moviePath: 'https://www.youtube.com/embed/osPKqll1pfg'
        },
        {
          title: 'Дробление бизнеса и уклонение от уплаты налогов',
          moviePath: 'https://www.youtube.com/embed/RT6IZN7D3q4'
        },
        {
          title: 'Кейс. Оформление договора купли-продажи автомобиля. Проблемы',
          moviePath: 'https://www.youtube.com/embed/_DyVoGX6-vk'
        },
        {
          title: 'Медиация в уголовном процессе. Переговоры потерпевшего и обвиняемого',
          moviePath: 'https://www.youtube.com/embed/e0Z5pPU7qkA'
        },
        {
          title: 'Кейс. Незадекларирование наличных денежных средств. Административное дело. Статья 15.5 КоАП',
          moviePath: 'https://www.youtube.com/embed/91Wzu-8Zf2g'
        },
        {
          title: 'Взыскание алиментов с детей на родителей',
          moviePath: 'https://www.youtube.com/embed/j6KwWikeyeE'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import '../assets/layouts/index';
.movie-list{
  list-style-type: none;
  padding: 0;
  margin: 0;
  :hover{
        transform: scale(1.02);
    }
  :last-child{
      padding-bottom: 0;
    }
  li{
    transition: 0.1s ease all;
    padding-bottom: 10px;
    :hover{
        transform: none;
    }
  }
}
</style>
