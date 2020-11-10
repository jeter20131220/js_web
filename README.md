# js_web
js實作應用

<!-- data-slider-duration="2000"  自動撥放時間-->
<!-- 輪播圖項目：根據需求複製貼上 active 只有一組 -->
<div id="slider" data-slider-duration="2000">

        <div class="slider-item slider-active">
            <img class="img" src="./img/1.jpg" alt="">
            <h1>AUDI</h1>
        </div>
        <div class="slider-item">
            <img src="./img/2-1.jpg" alt="">
            <h1>TESLA</h1>
            <!-- <div id="icontesla"><img src="./img/icontesla.png" alt="" id="icon"></div> -->
        </div>
        <div class="slider-item">
            <img src="./img/3.jpg" alt="">
            <h1>PORSCHE</h1>
        </div>

        <div id="slider-prev"><img src="./img/left1.png" alt=""></div>
        <div id="slider-next"><img src="./img/right.png" alt=""></div>

        <div id="slider-button">
            <div class="slider-buttons slider-button-active" data-slider-item="1"></div>
            <div class="slider-buttons" data-slider-item="2"></div>
            <div class="slider-buttons" data-slider-item="3"></div>
        </div>