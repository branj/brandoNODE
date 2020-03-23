<template>
    <div class='content'>
        <div class='content' v-for="c in content" :key="c.title">
            <hr :id="c.href" />
            <component :is="c.component"></component>  
        </div>
    </div>
</template>

<script>

import About from './pages/About.vue'
import Resume from './pages/Resume.vue'
import Services from './pages/Services.vue'
import Portfolio from './pages/Portfolio.vue'
import Blog from './pages/Blog.vue'
import Pricing from './pages/Pricing.vue'
import Clients from './pages/Clients.vue'
import Contact from './pages/Contact.vue'

const CONTENT = [
    {title : 'Whomami', href : 'about', content : 'My name is brandon and I do stuff', component: 'About'},
    {title : 'Resume', href : 'resume', content : 'My to my resume', component: 'Resume'},
    {title : 'Portfolio', href : 'portfolio',  content : 'Portofilio Pieces here',  component: 'Portfolio'},
    {title : 'Services',href:'services',  content : 'Interaction Meets', component: 'Services'},
    {title : 'Blog', href : 'blog',  content : 'A list of blog articles', component: 'Blog'},
    //{title : 'Pricing', href : 'pricing', content : 'A list of pricing tables', component: 'Pricing'},
    //{title : 'Clients', href : 'clients', content: 'client testimonials', component: 'Clients'},
    {title : 'Contact', href : 'contact', content: 'Email: Brandonleejennings@gmail.com', component: 'Contact'},
]
// ES6 import
//import simpleParallax from 'simple-parallax-js';

export default {
  name: 'Content',
  data : function() {
      return {content : CONTENT}
  },
  props: {
    active: String,
  },
  components: {
      'About' : About,
      'Resume' : Resume,
      'Portfolio' : Portfolio,
      'Services' : Services,
      'Blog' : Blog,
      'Clients' : Clients,
      'Contact' : Contact,
      'Pricing' : Pricing,
  }
}

//var images = document.getElementsByClassName('parrallax');
//new simpleParallax(images);

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .content {
        margin: '16px 8px';
        width: 100%;
        display: inline-block;
        height: 100%;
        
    }
</style>