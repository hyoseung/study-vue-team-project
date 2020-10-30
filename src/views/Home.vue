<template>
  <div class="home">
    <h1>Team Members</h1>
    <MemberCard :cards="members"></MemberCard>      
  </div>
</template>

<script>
import MemberCard from '@/components/home/MemberCard.vue';

export default {
  name: 'Home',
  components: {
    MemberCard
  },
  data: () => ({
    members: [
      {name: '탁남수', position: '차장', src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'},
      {name: '천금재', position: '과장', src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'},
      {name: '장지훈', position: '대리', src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'},
      {name: '서효승', position: '사원', src: 'https://cdn.vuetifyjs.com/images/cards/cooking.png'}
    ]
  })
}
</script>
