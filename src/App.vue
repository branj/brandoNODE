<template>
    <div id="app-container" class="container">
      <div class="row" style="height: 100%">
          <div class="col-3 left shadow-sm p-3">
                <div id="card" class="card">
                  <h3 class="card-header">brandoNODE</h3>
                  <div class="card-body">
                    <h5 class="card-title">Home of Brandon Jennings</h5>
                    <h6 class="card-subtitle text-muted">Portland OR Software Engineer</h6>
                  </div>
                    
                    <Links active={2}></Links>

                    <div class="card-body">
              
                    <p class="card-text bio">
                       Mix two parts tecnhical, with one part creative, and finish with a splash of empathy 
                    </p>
                    
                    <hr/>

                    <ul class="social-list list-inline py-2 mx-auto">
                      <li class="list-inline-item"><a href="https://www.linkedin.com/in/brandon-jennings-77051427/"><svg class="svg-inline--fa fa-linkedin-in fa-w-14 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i class="fab fa-linkedin-in fa-fw"></i> --></a></li>
                      <li class="list-inline-item"><a href="https://github.com/branj"><svg class="svg-inline--fa fa-github-alt fa-w-15 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 512" data-fa-i2svg=""><path fill="currentColor" d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"></path></svg><!-- <i class="fab fa-github-alt fa-fw"></i> --></a></li>
                      <li class="list-inline-item"><a href="https://stackoverflow.com/users/13113329/brandon-l-jennings"><svg class="svg-inline--fa fa-stack-overflow fa-w-12 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="stack-overflow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"></path></svg><!-- <i class="fab fa-stack-overflow fa-fw"></i> --></a></li>
                      <li class="list-inline-item"><a href="https://codepen.io/branj"><svg class="svg-inline--fa fa-codepen fa-w-16 fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="codepen" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"></path></svg><!-- <i class="fab fa-codepen fa-fw"></i> --></a></li>
                    </ul>
                    
                    <hr/>
                    
                  </div>
                  
                </div>
                  
          </div>
          <div class="col-9 right">
              <router-view></router-view>
          </div>
       </div>
    </div>
</template>

<script>

import Links from './components/Links.vue'

export default {
  name: 'App',
  components : {
    'Links': Links,
  }
}
</script>

<style>

#app, html,body, #app-table {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding:0px;
  margin: 0px;
  height: 100%;
  width: 100%;
 
}
#app-container {
  border-top: solid medium #00bc8c;
  border-bottom: solid medium #00bc8c;
  max-width: 100%;
  height: 100%;
}

#logo-header{
  margin:0px;
  padding: '0';
  background-color: gray ;
}
#logo-image{
    width: 100%;
    margin: 50px 0px;
    border-top: solid medium;
    border-color: lightgray;
}

.left,.right{
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin: 0;
  height: 100%;
}
.right {
  overflow: scroll;
}
.social-list {
  width: 100%;
  text-align: center;
}
.social-list a {
    width: 24px;
    height: 24px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
    background-color: none;
    font-size: 8px;
    margin-right: 16px;
}
 .site-name {
    font-weight: bold;
    font-size: 1.5rem;
    text-align: center;
    margin-top: 8xp;
}
.bio {
    font-size: 0.875rem;
}

#card {
  display: inline-block;
}

</style>
