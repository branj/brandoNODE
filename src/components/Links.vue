<template>  
    <ul class="list-group list-group-flush">
         <li v-for="link in links" :key="link.title" class="list-group-item"><router-link  :key="link.title" :to="link.href">{{link.title}}</router-link></li>
    </ul>
</template>

<script>

const LINKS = [
    {title : 'About', href : 'about'},
    {title : 'Resume', href : 'resume'},
    //{title : 'Portfolio', href : '#portfolio'},
    //{title : 'Services',href:'services'},
    //{title : 'Blog', href : 'blog'},
    //{title : 'Pricing', href : '#pricing'},
    //{title : 'Clients', href : '#clients'},
    {title : 'Contact', href : 'contact'},
]

export default {
  name: 'Links',
  data : function() {
      return {links : LINKS}
  },
  props: {
    active: String,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
