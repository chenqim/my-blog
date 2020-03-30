<template>
  <div class="m-container">
    <div class="m-content mt20">
      <el-row :gutter="62">
        <el-col :span="8" v-for="(item, index) in images" :key="index" style="margin-bottom: 40px;">
          <!-- <div :id="`img-div-${index}`">
            <img :src="item.src" class="img" alt="">
          </div> -->
          <div class="hovereffect" style="border-radius: 2px; cursor: pointer;">
            <img class="img-responsive img" :src="item.src" alt="">
            <div class="overlay">
              <h2>Hover effect 1</h2>
              <a class="info" href="#">link here</a>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      images: [
        { src: require('../../assets/carousel-item-1.jpg') },
        { src: require('../../assets/carousel-item-2.jpg') },
        { src: require('../../assets/carousel-item-3.jpg') },
        { src: require('../../assets/carousel-item-4.jpg') },
        { src: require('../../assets/carousel-item-1.jpg') },
        { src: require('../../assets/carousel-item-2.jpg') },
        { src: require('../../assets/carousel-item-3.jpg') },
        { src: require('../../assets/carousel-item-4.jpg') },
        { src: require('../../assets/carousel-item-1.jpg') },
        { src: require('../../assets/carousel-item-2.jpg') },
        { src: require('../../assets/carousel-item-3.jpg') },
        { src: require('../../assets/carousel-item-4.jpg') }
      ]
    }
  },
  mounted () {
    // let img = document.getElementById('img-div-0')
    // let width = img.clientWidth || img.offsetWidth
    // let height = img.clientHeight || img.offsetHeight
    // console.log('width', width)
    // console.log('height', height)
    // img.onmousemove = function (event) {
    //   var e = event || window.event
    //   console.log(e.offsetX, e.offsetY)
    // }
    // img.onclick = function (event) {
    //   console.log(event)
    // }
  }
}
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 252px;
  transition: 0.5s;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    // transform: perspective(1000px) rotateX(-10deg) rotateY(6deg) scale3d(1.2, 1.2, 1.2);
  }
}
.hovereffect {
width:100%;
height:100%;
float:left;
overflow:hidden;
position:relative;
text-align:center;
cursor:default;
}

.hovereffect .overlay {
width:100%;
height:100%;
position:absolute;
overflow:hidden;
top:0;
left:0;
opacity:0;
background-color:rgba(0,0,0,0.5);
-webkit-transition:all .4s ease-in-out;
transition:all .4s ease-in-out
}

.hovereffect img {
display:block;
position:relative;
-webkit-transition:all .4s linear;
transition:all .4s linear;
}

.hovereffect h2 {
text-transform:uppercase;
color:#fff;
text-align:center;
position:relative;
font-size:17px;
background:rgba(0,0,0,0.6);
-webkit-transform:translatey(-100px);
-ms-transform:translatey(-100px);
transform:translatey(-100px);
-webkit-transition:all .2s ease-in-out;
transition:all .2s ease-in-out;
padding:10px;
}

.hovereffect a.info {
text-decoration:none;
display:inline-block;
text-transform:uppercase;
color:#fff;
border:1px solid #fff;
background-color:transparent;
opacity:0;
filter:alpha(opacity=0);
-webkit-transition:all .2s ease-in-out;
transition:all .2s ease-in-out;
margin:50px 0 0;
padding:7px 14px;
}

.hovereffect a.info:hover {
box-shadow:0 0 5px #fff;
}

.hovereffect:hover img {
-ms-transform:scale(1.2);
-webkit-transform:scale(1.2);
transform:scale(1.2);
}

.hovereffect:hover .overlay {
opacity:1;
filter:alpha(opacity=100);
}

.hovereffect:hover h2,.hovereffect:hover a.info {
opacity:1;
filter:alpha(opacity=100);
-ms-transform:translatey(0);
-webkit-transform:translatey(0);
transform:translatey(0);
}

.hovereffect:hover a.info {
-webkit-transition-delay:.2s;
transition-delay:.2s;
}
</style>
