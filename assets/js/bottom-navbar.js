
var BottomNavComponent = Vue.component("bottom-nav-component", {
    data : () => ({
      activeIcon: 1,
      mobileView: false
    }),
    methods: {
      handleView(){
          this.mobileView = window.outerWidth >= 700;
          window.addEventListener('resize', this.handleView);
      }
    },
    created() {
      this.handleView();
      window.addEventListener('resize', this.handleView);
    },
    template: `
         <div class="content centered-elements">
          
                  <div class="bottom-nav" v-if="!mobileView">

                      <div class="case-icon" :class="activeIcon == 1 ? 'active' : 'inactive'" @click="activeIcon = 1">
  
                          <div class="icon-bg"></div>
  
                          <img class="icon" src="https://image.flaticon.com/icons/png/512/1946/1946488.png" alt="">
  
                          <span class="icon-title">Inicio</span>
  
                      </div>
  
                      <div class="case-icon" :class="activeIcon == 2 ? 'active' : 'inactive'" @click="activeIcon = 2">
  
                          <div class="icon-bg"></div>
  
                          <img class="icon" src="https://image.flaticon.com/icons/png/512/2983/2983803.png" alt="">
  
                          <span class="icon-title">Noticias</span>
  
                      </div>
  
                      <div class="case-icon" :class="activeIcon == 3 ? 'active' : 'inactive'" @click="activeIcon = 3">
  
                          <div class="icon-bg"></div>
  
                          <img class="icon" src="https://image.flaticon.com/icons/png/512/709/709592.png" alt="">
  
                          <span class="icon-title">Buscar</span>
  
                      </div>
  
                      <div class="case-icon" :class="activeIcon == 4 ? 'active' : 'inactive'" @click="activeIcon = 4">
  
                          <div class="icon-bg"></div>
  
                          <img class="icon" src="https://image.flaticon.com/icons/png/512/456/456283.png" alt="">
  
                          <span class="icon-title">Mi perfil</span>
  
                      </div>
  
                  </div>
  
      </div>

      export default Vue.component("bottom-nav-component")
    `
  });



  // Vue Instance
  new Vue({
      el: "#app",
      components: {
          "bottom-nav-component": BottomNavComponent
      }
  });

 