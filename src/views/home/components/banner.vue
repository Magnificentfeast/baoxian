<template>
  <div class="home-banner">
    <p-header />
    <div class="container">
      <div class="task-wrap">
        <div class="task-title">Task publishing platform for Web 3.0</div>
        <el-row class="task-content" type="flex" :gutter="50">
          <el-col class="task-content-left" :sm="24" :md="10">
            <div class="task-content-left_t">
              <p class="task-content-text">PicoGo will build a decentralized multi-network Internet. Based on the DPOS consensus mechanism PicoGo has launched a web3-oriented decentralized task publishing platform. and issued the token PICO. aiming to give users full control to create an ecosystem that supports multi-chain. through an autonomous communit</p>
              <div class="task-btn-group">
                <span class="task-btn primary">Start PicoGoSwap</span>
                <span class="task-btn default el-icon-download"> White Paper</span>
              </div>
            </div>
          </el-col>
          <el-col class="task-content-right" :sm="24" :md="{span:13,offset:1}">
            <div class="task-content-img">
              <!-- <img class="p-img-responsive" src="/lib/images/banner_task.png" alt=""> -->
              <video class="p-img-responsive" src="http://www.picogo.io/1570x1080.mp4" muted="muted" controls="controls" autoplay="autoplay" controlsList="nodownload"></video>
            </div>
            <div class="task-content-left_b">
              <p class="swap-text">Available on:</p>
              <div class="task-swap-wrap">
                <div class="swap-btn">
                  <div class="swap-btn-icon">
                    <img class="p-img-responsive" src="/lib/images/swap_icon_2.png" alt="">
                  </div>
                  <p class="swap-btn-text">PancakeSwap</p>
                </div>
                <div class="swap-btn">
                  <div class="swap-btn-icon">
                    <img class="p-img-responsive" src="/lib/images/swap_icon_1.png" alt="">
                  </div>
                  <p class="swap-btn-text">Uniswap</p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="partners-wrap">
        <div class="partners-swiper swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide ">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_1.png">
                <p class="slide-text">Brief Introduction</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_2.png">
                <p class="slide-text">revers</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_3.png">
                <p class="slide-text">revers</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_4.png">
                <p class="slide-text">revers</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_5.png">
                <p class="slide-text">revers</p>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="slide-content hover-hand">
                <img class="slide-img" src="/lib/images/partners_6.png">
                <p class="slide-text">revers</p>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev swiper-navigation">
            <i class="el-icon-back"></i>
          </div>
          <div class="swiper-button-next swiper-navigation">
            <i class="el-icon-right"></i>
          </div>
        </div>
      </div>
      <div class="drops-wrap">
        <h3 class="home-common-title">First NFT drops are now live!</h3>
        <div class="drops-btn-group">
          <span class="drops-btn">Go to all <i class="el-icon-caret-right"></i></span>
        </div>
        <!-- <el-row :gutter="10" class="drops-content"> -->
        <el-row :gutter="20">
          <el-col :span="24" :sm="12" :md="8">
            <div class="drops-item hover-hand">
              <h3 class="drops-item-title">Ends in 6 days</h3>
              <div class="drops-item-img">
                <span class="Signtime">Signup: 2022/03/22</span>
                <img class="p-img-responsive" src="/lib/images/drops_1.png" alt="">
                <p class="drops-item-img-text">Holiday of God <span class="drops-item-span">Defi Dapp</span> </p>
              </div>
              <p class="drops-item-text">A series of 10,000 sexy, strong female warriors called to action</p>
              <div class="drops-item-icon">
                <img class="usericon" src="/lib/images/userIcon30-2.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-1.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-3.png" alt="">
              </div>
              <div class="drops-item-link">
                <div class="drops-items">
                  <div class="price-icon">
                    <img class="p-img-responsive" src="/lib/images/price_icon.png" alt="">
                  </div>
                  <p class="pirce-text">https://attrace.com/app/nft-referrals</p>
                </div>
              </div>
              <div class="drops-footer">
                <!-- <div class="footer-top">Extra rewards 1% wETH</div>
                <div class="footer-bottom">
                  <p class="footer-bottom_l"><span>Promoter's</span>8% wETH</p>
                  <div class="footer-bottom_r">
                    <p class="r-text"><span>Participant</span> 8% wETH</p>
                    <p class="r-btn">Go<i class="el-icon-arrow-right"></i></p>
                  </div>
                </div> -->
                <el-row :gutter="20" style="margin-bottom:0">
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-green"></span> task register</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Promoter</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-blue"></span> task bounty</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Participant</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="12" :md="8">
            <div class="drops-item hover-hand">
              <h3 class="drops-item-title">Ends in 6 days</h3>
              <div class="drops-item-img">
                <span class="Signtime">Signup: 2022/03/22</span>
                <img class="p-img-responsive" src="/lib/images/drops_2.png" alt="">
                <p class="drops-item-img-text">Holiday of God <span class="drops-item-span">Defi Dapp</span> </p>
              </div>
              <p class="drops-item-text">A series of 10,000 sexy, strong female warriors called to action</p>
              <div class="drops-item-icon">
                <img class="usericon" src="/lib/images/userIcon30-3.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-1.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-2.png" alt="">
              </div>
              <div class="drops-item-link">
                <div class="drops-items">
                  <div class="price-icon">
                    <img class="p-img-responsive" src="/lib/images/price_icon.png" alt="">
                  </div>
                  <p class="pirce-text">https://attrace.com/app/nft-referrals</p>
                </div>
              </div>
              <div class="drops-footer">
                <!-- <div class="footer-top">Extra rewards 1% wETH</div>
                <div class="footer-bottom">
                  <p class="footer-bottom_l"><span>Promoter's</span>8% wETH</p>
                  <div class="footer-bottom_r">
                    <p class="r-text"><span>Participant</span> 8% wETH</p>
                    <p class="r-btn">Go<i class="el-icon-arrow-right"></i></p>
                  </div>
                </div> -->
                <el-row :gutter="20" style="margin-bottom:0">
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-green"></span> task register</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Promoter</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-blue"></span> task bounty</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Participant</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <el-col :span="24" :sm="12" :md="8">
            <div class="drops-item hover-hand">
              <h3 class="drops-item-title">Ends in 6 days</h3>
              <div class="drops-item-img">
                <span class="Signtime">Signup: 2022/03/22</span>
                <img class="p-img-responsive" src="/lib/images/drops_3.png" alt="">
                <p class="drops-item-img-text">Holiday of God <span class="drops-item-span">Defi Dapp</span> </p>
              </div>
              <p class="drops-item-text">A series of 10,000 sexy, strong female warriors called to action</p>
              <div class="drops-item-icon">
                <img class="usericon" src="/lib/images/userIcon30-1.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-2.png" alt="">
                <img class="usericon" src="/lib/images/userIcon30-3.png" alt="">
              </div>
              <div class="drops-item-link">
                <div class="drops-items">
                  <div class="price-icon">
                    <img class="p-img-responsive" src="/lib/images/price_icon.png" alt="">
                  </div>
                  <p class="pirce-text">https://attrace.com/app/nft-referrals</p>
                </div>
              </div>
              <div class="drops-footer">
                <!-- <div class="footer-top">Extra rewards 1% wETH</div>
                <div class="footer-bottom">
                  <p class="footer-bottom_l"><span>Promoter's</span>8% wETH</p>
                  <div class="footer-bottom_r">
                    <p class="r-text"><span>Participant</span> 8% wETH</p>
                    <p class="r-btn">Go<i class="el-icon-arrow-right"></i></p>
                  </div>
                </div> -->
                <el-row :gutter="20" style="margin-bottom:0">
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-green"></span> task register</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Promoter</div>
                  </el-col>
                  <el-col :span="12">
                    <div class="footer-item">
                      <div class="item-title"><span class="bg-blue"></span> task bounty</div>
                      <div class="item-content">
                        <span class="num">2K</span>
                        <span class="progress">30%</span>
                      </div>
                    </div>
                    <div class="footer-btn">Participant</div>
                  </el-col>
                </el-row>
              </div>
            </div>
          </el-col>
          <!-- <el-col :span="24" :sm="12" :md="6">
            <div class="drops-item hover-hand">
              <h3 class="drops-item-title">Ends in 6 days</h3>
              <div class="drops-item-img">
                <img class="p-img-responsive" src="/lib/images/drops_1.png" alt="">
                <p class="drops-item-img-text">Holiday of God</p>
              </div>
              <p class="drops-item-text">A series of 10,000 sexy, strong female warriors called to action</p>
              <div class="drops-item-icon">
                <img class="p-img-responsive" src="/lib/images/drops_icon.png" alt="">
              </div>
              <div class="drops-price">
                <div class="price-icon">
                  <img class="p-img-responsive" src="/lib/images/price_icon.png" alt="">
                </div>
                <p class="pirce-text">3.09 wETH in bounty vault</p>
              </div>
              <div class="drops-footer">
                <div class="footer-top">Extra rewards 1% wETH</div>
                <div class="footer-bottom">
                  <p class="footer-bottom_l"><span>Promoter's</span>8% wETH</p>
                  <div class="footer-bottom_r">
                    <p class="r-text"><span>Participant</span> 8% wETH</p>
                    <p class="r-btn">Go<i class="el-icon-arrow-right"></i></p>
                  </div>
                </div>
              </div>
            </div>
          </el-col> -->
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import pHeader from '@/components/header/header'
export default {
  data () {
    return {
      partnersSwiper: null
    }
  },
  methods: {
    initSwiper () {
      const clientWidth = document.body.clientWidth
      const slidesPerView = clientWidth < 992 ? 3 : 5
      this.partnersSwiper = new window.Swiper('.partners-swiper', {
        loop: true,
        speed: 2500,
        slidesPerView,
        spaceBetween: 0,
        centeredSlides: true,
        watchSlidesProgress: true,
        on: {
          setTransition: function (transition) {
            for (var i = 0; i < this.slides.length; i++) {
              var slide = this.slides.eq(i)
              slide.transition(transition)
            }
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  },
  mounted () {
    this.initSwiper()
    window.addEventListener('resize', () => {
      this.initSwiper()
    })
  },
  components: { pHeader }
}
</script>

<style lang="scss">
  .bg-green{
    background:#0BCB74
  }
  .bg-blue{
    background:#688CFD
  }
</style>