<template>
  <div class="header-container" :style="headerStyle">
    <div class="container">
      <div class="header-logo">
        <div class="logo-img">
          <img class="p-img-responsive" src="/lib/images/logo.png" alt="">
        </div>
        <div class="logo-text">PicoGo</div>
      </div>
      <div class="header-search hidden-sm-and-down">
        <el-input class="search-input" v-model="serach" prefix-icon="el-icon-search" />
      </div>
      <div class="header-menu hidden-sm-and-down">
        <ul class="menu-wrap">
          <li class="menu-item active">About</li>
          <li class="menu-item">How it works</li>
          <li class="menu-item">FAQ</li>
          <li class="menu-item menu-icon">
            <img class="p-img-responsive" src="/lib/images/menu_icon.png" alt="">
          </li>
        </ul>
      </div>
      <div class="header-menu-sm hidden-md-and-up">
        <div class="menu-sm-icon" @mouseenter="isHover=true" @mouseleave="isHover=false">
           <img class="p-img-responsive" src="/lib/images/menu_icon.png" alt="">
        </div>
        <ul class="menu-sm-wrap">
          <li class="header-search menu-sm-item">
            <el-input class="search-input" v-model="serach" prefix-icon="el-icon-search" />
          </li>
          <li class="menu-sm-item active">About</li>
          <li class="menu-sm-item">How it works</li>
          <li class="menu-sm-item">FAQ</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      serach: '',
      scrollTop: 0,
      isHover: false
    }
  },
  computed: {
    headerStyle () {
      const { isHover, scrollTop } = this
      const defaultStyle = { backgroundColor: 'rgba(255, 255, 255, 0.3)' }
      const scrollStyle = {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 3px 17px 0px rgba(0, 0, 0, 0.1)'
      }
      return scrollTop > 70 || isHover ? scrollStyle : defaultStyle
    }
  },
  methods: {
    getscrollTop () {
      window.addEventListener('scroll', () => {
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
        this.scrollTop = scrollTop
      }, false)
    }
  },
  mounted () {
    this.getscrollTop()
  }
}
</script>
