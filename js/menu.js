loadMenu();

function loadMenu() {
  let t = document.getElementsByClassName("pMenu")[0];
  t.innerHTML = ` <div class="logo"> 
           <a href="index.html">
          <img src="imgs/logo.jpeg" /></a></div>
        <div class="menu">
          <ul class="menuTop">
            <li>
              <a href="#" class="Menu2">MEN </a>
              <ul class="subMenu2">
                <li><a href="#">INNERWEAR & UNDERWEAR</a></li>
                <li><a href="#">T-SHIRTS, SWEAT & FLEECE</a></li>
                <li><a href="#">T-SHIRTS, SWEAT & FLEECE</a></li>
                <li><a href="#">SWEATERS & KNITWEAR</a></li>
                <li><a href="#">LOUNGEWEAR & HOMEWEAR</a></li>
              </ul>
            </li>
            <li><a href="thoigianKM.html">Thời gian khuyến mãi</a></li>
            <li><a href="#">KIDS</a></li>
            <li><a href="#">BABY</a></li>
          </ul>
        </div>
        <div class="DangNhapGioHangTongSL">
          <div class="DangNhap">
            <i class="fa-regular fa-user"></i>
          </div>
          <div class="GioHang">
            <a href="giohang.html" class="fa-solid fa-cart-shopping"></a> 
          </div>
          <div class="TongSL">
            0
          </div>
        </div>`;
}
