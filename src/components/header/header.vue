<template>
  <div class="header-container" :style="headerStyle">
    <div class="container">
      <div class="header-logo hover-hand">
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
          
            <el-dropdown trigger="click">
              <img class="p-img-responsive" src="/lib/images/menu_icon.png" alt="">
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <div class="language-box">
                    <div class="lable">
                      <img  src="/lib/images/language.png" alt="">
                      <i>language</i>
                    </div>
                    <el-select placeholder="English">
                      <el-option>English</el-option>
                      <el-option>Chinese</el-option>
                    </el-select>
                  </div>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
      <div class="header-menu-sm hidden-md-and-up">
        <div class="menu-sm-icon">
           <img class="p-img-responsive" @mouseenter="isHover=true" @mouseleave="isHover=false" src="/lib/images/menu_icon.png" alt="">
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

<style>

.language-box{
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #FFF;
  width: 200px;
  padding: 10px 10px;
  font-size: 16px;
  color: #666;
}
.lable{
  display: flex;
  align-items: center;
  justify-content: center;
}

.lable img{
  width: 20px;
  height: 20px;
  margin-right: 5px;
}
.el-input__inner{
  border: none;
}
</style>