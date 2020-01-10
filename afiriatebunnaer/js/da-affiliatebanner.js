(function(){
var atag = document.getElementsByClassName('da_affili_banner');
for(i=0;i<atag.length;i++){
  affilibanner_generate(i);
}

function affilibanner_generate() {
  // 目印のaタグからパラメータとってきたら消す
  var atag = document.getElementsByClassName('da_affili_banner');
  // 目印のaタグに番号をつけて変数に格納
  var affriatebannerloopid = i;
  // 目印のaタグのパラメーター取得して変数に格納
  var product_name = atag[i].text;;
  var product_image = atag[i].dataset.image;
  var product_price = atag[i].dataset.price;
  if(!product_price==""){
  var product_price = '<p class="price">'+product_price+'<span>円 (税込)</span></p>'
}else{
  var product_price = "";
};
  var product_url_da = atag[i].href;
  var product_my_shopname = atag[i].dataset.my_shopname;
  if(!product_my_shopname==""){
    var product_my_shop = function(){/*
<li>
            <a href="[product_url_da]" class="da_affili_link_da" target="_top">
              <span class="da_affili_icon_da"></span>
              [product_my_shopname]
            </a>
          </li>*/}.toString().replace(/\[product_url_da\]/g, product_url_da).replace(/\[product_my_shopname\]/g, product_my_shopname).split("\n").slice(1,-1).join("\n");
  }else{
  var product_my_shop = "";
  };
  var product_url_am = atag[i].dataset.url_amazon;
  if(!product_url_am==""){
    var product_url_am = function(){/*
<li>
            <a href="[product_url_am]" class="da_affili_link_amazon" target="_top">
              <span class="da_affili_icon_amazon"></span>
              Amazonで購入
            </a>
          </li>*/}.toString().replace(/\[product_url_am\]/g, product_url_am).split("\n").slice(1,-1).join("\n");
  }else{
  var product_url_am = "";
  };
  var product_url_ra = atag[i].dataset.url_rakuten;
  if(!product_url_ra==""){
    var product_url_ra = function(){/*
<li>
            <a href="[product_url_ra]" class="da_affili_link_rakuten" target="_top">
              <span class="da_affili_icon_rakuten"></span>
              楽天市場で購入
            </a>
          </li>*/}.toString().replace(/\[product_url_ra\]/g, product_url_ra).split("\n").slice(1,-1).join("\n");
  }else{
  var product_url_ra = "";
  };
  var product_url_ya = atag[i].dataset.url_yahooshop;
  if(!product_url_ya==""){
    var product_url_ya = function(){/*
<li>
            <a href="[product_url_ya]" class="da_affili_link_yahoo" target="_top">
              <span class="da_affili_icon_yahoo"></span>
              Yahoo!ショッピングで購入
            </a>
          </li>*/}.toString().replace(/\[product_url_ya\]/g, product_url_ya).split("\n").slice(1,-1).join("\n");
  }else{
  var product_url_ya = "";
  };
  atag[i].style.display = 'none';

  var iframe = document.createElement('iframe');
  iframe.scrolling = 'no';
  iframe.frameBorder = 0;
  iframe.marginWidth = 0;
  iframe.marginHeight = 0;
  iframe.width = '100%';
  iframe.id = 'da_affili_banner-widget'+affriatebannerloopid;

  // atagの隣にiframeを挿入
  atag[i].parentNode.insertBefore(iframe,atag[i]);

  // widgetの中身（ここに後で中身を書いていきます）
  var widget = '';
  widget += (function(){/*
  <div class="da_affili_banner">
    <div class="da_affili_img">
      <a href="[product_url_da]" class="trim" target="_top">
        <img src="[product_image]" alt="商品画像">
        [product_price]
      </a>
    </div>
    <div class="da_affili_product_info">
      <div class="da_affili_productname">
        <a href="[product_url_da]" target="_top">[product_name]</a>
      </div>
      <div class="da_affili_buttonarea">
        <ul>
          [product_my_shop]
          [product_url_am]
          [product_url_ra]
          [product_url_ya]
        </ul>
      </div>
    </div>
  </div>

  <style>
  html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:"";content:none}table{border-collapse:collapse;border-spacing:0}html{font-size:62.5%}body{font-size:1.6rem}body{height:100%}.da_affili_banner{background-color:#fff;line-height:1;margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;font-family:-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","Noto Sans Japanese","ヒラギノ角ゴ ProN W3",Meiryo,sans-serif}.da_affili_banner *{box-sizing:border-box;position:relative}.da_affili_banner{color:#333;border:solid 1px #333;border-radius:4px;max-width:800px;margin:0 auto;min-height:200px}.da_affili_banner::after{content:"";display:table;clear:both}.da_affili_banner .da_affili_img{position:relative;margin-bottom:-200px}.da_affili_banner .da_affili_img a{display:block;width:100%;max-width:200px;z-index:2}.da_affili_banner .da_affili_img a.trim{position:relative;overflow:hidden;background-color:inherit;border-radius:4px;background-color:#fff}.da_affili_banner .da_affili_img a.trim::before{content:"";display:block;padding-top:100%}.da_affili_banner .da_affili_img a.trim img{position:absolute;width:100%;height:auto;margin:auto;top:0;left:0;right:0;bottom:0}.da_affili_banner .da_affili_img a.trim .price{color:#ed1c24;font-size:20px;position:absolute;right:0px;bottom:0px;text-align:center;width:100%;padding:7px 0px 15px;text-shadow:0 0 6px #fff;background-color:rgba(255,255,255,0.4);background:-moz-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);background:-webkit-linear-gradient(top, rgba(255,255,255,0) 0%, #fff 100%);background:linear-gradient(to bottom, rgba(255,255,255,0) 0%, #fff 100%);filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=0 )}.da_affili_banner .da_affili_img a.trim .price span{display:inline-block;margin-right:-2px;font-size:12px}.da_affili_banner .da_affili_product_info{display:inline-block;width:calc(100% - 200px);width:100%;padding-left:210px}.da_affili_banner .da_affili_product_info .da_affili_productname{padding:20px 0px}.da_affili_banner .da_affili_product_info .da_affili_productname a{color:#0071E8;font-weight:bold;text-decoration:none;font-size:18px;line-height:1.5}.da_affili_banner .da_affili_product_info .da_affili_buttonarea{display:inline-block}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul{list-style:none;padding-left:5px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li{display:inline-block;width:100%;max-width:290px;margin-bottom:10px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"]{color:#333;font-weight:bold;font-size:15px;text-decoration:none;border:solid 2px #ccc;border-radius:4px;padding:10px 5px 10px 80px;display:inline-block;width:100%;max-width:280px;line-height:26px;position:relative;background-color:#fff}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"]:hover{background-color:#f5f5f5}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"].da_affili_link_da{border-color:#0071e8}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"].da_affili_link_amazon{border-color:#f90}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"].da_affili_link_rakuten{border-color:#B80100}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"].da_affili_link_yahoo{border-color:#EF4A4E}*[class^="da_affili_icon"]{width:66px;height:20px;display:inline-block;-webkit-background-size:contain;background-size:contain;position:absolute;left:5px;top:0;bottom:0;margin:auto}.da_affili_icon_da{width:40px;height:40px;margin-left:14px;background-repeat:no-repeat;background-position:center;background-image:url("http://amurant.com/assets/img/icon_mi_kifi.png");border-radius:50%}.da_affili_icon_amazon{height:20px;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%225766.335%2020475.018%2066%2019.891%22%3E%20%3Cdefs%3E%20%3Cstyle%3E%20.cls-1%2C.cls-2%7Bfill%3A%23f90%3Bfill-rule%3Aevenodd%7D.cls-2%7Bfill%3A%23221f1f%7D%20%3C%2Fstyle%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22Amazon.com-Logo%22%20transform%3D%22translate(5910.869%2019825.141)%22%3E%20%3Cg%20id%3D%22g1967%22%20transform%3D%22translate(-144.534%20649.877)%22%3E%20%3Cpath%20id%3D%22path8%22%20class%3D%22cls-1%22%20d%3D%22M-35.221%20761.459a25.142%2025.142%200%200%201-14.179%204.335%2025.661%2025.661%200%200%201-17.324-6.611c-.359-.325-.037-.767.394-.514A34.868%2034.868%200%200%200-49%20763.266a34.465%2034.465%200%200%200%2013.221-2.7c.649-.276%201.192.425.557.9%22%20transform%3D%22translate(76.166%20-745.905)%22%2F%3E%20%3Cpath%20id%3D%22path10%22%20class%3D%22cls-1%22%20d%3D%22M197.617%20754.029c-.488-.626-3.241-.3-4.476-.149-.376.046-.434-.282-.095-.517%202.192-1.543%205.789-1.1%206.208-.58s-.109%204.126-2.169%205.846c-.316.264-.618.123-.477-.227.463-1.155%201.5-3.743%201.008-4.373%22%20transform%3D%22translate(-155.078%20-740.3)%22%2F%3E%20%3Cpath%20id%3D%22path12%22%20class%3D%22cls-2%22%20d%3D%22M193.413%20647.349v-1.5a.37.37%200%200%201%20.379-.379h6.714a.374.374%200%200%201%20.388.379v1.284a2.113%202.113%200%200%201-.506.942l-3.479%204.967a7.412%207.412%200%200%201%203.83.822.683.683%200%200%201%20.356.583v1.6c0%20.218-.241.474-.494.342a7.734%207.734%200%200%200-7.093.012c-.233.126-.477-.126-.477-.345v-1.52a1.813%201.813%200%200%201%20.247-1.031l4.031-5.78H193.8a.371.371%200%200%201-.388-.376%22%20transform%3D%22translate(-155.263%20-645.177)%22%2F%3E%20%3Cpath%20id%3D%22path14%22%20class%3D%22cls-2%22%20d%3D%22M-46.543%20655.142h-2.043a.386.386%200%200%201-.365-.348v-10.483a.383.383%200%200%201%20.394-.376h1.9a.385.385%200%200%201%20.371.35v1.37h.037a2.7%202.7%200%200%201%202.689-1.942%202.7%202.7%200%200%201%202.652%201.942%202.9%202.9%200%200%201%202.821-1.942%202.9%202.9%200%200%201%202.364%201.146c.646.882.514%202.163.514%203.287v6.616a.386.386%200%200%201-.394.379h-2.04a.388.388%200%200%201-.368-.379v-5.556a13.122%2013.122%200%200%200-.057-1.965%201.064%201.064%200%200%200-1.2-.9%201.357%201.357%200%200%200-1.221.859%206.347%206.347%200%200%200-.19%202.008v5.556a.386.386%200%200%201-.394.379h-2.04a.386.386%200%200%201-.368-.379v-5.556c0-1.169.192-2.89-1.258-2.89-1.468%200-1.411%201.678-1.411%202.89v5.556a.386.386%200%200%201-.394.379%22%20transform%3D%22translate(60.201%20-643.613)%22%2F%3E%20%3Cpath%20id%3D%22path16%22%20class%3D%22cls-2%22%20d%3D%22M280.184%20643.714c3.031%200%204.671%202.6%204.671%205.912%200%203.2-1.813%205.734-4.671%205.734-2.976%200-4.6-2.6-4.6-5.846%200-3.264%201.64-5.8%204.6-5.8m.017%202.14c-1.505%200-1.6%202.051-1.6%203.33s-.02%204.016%201.583%204.016c1.583%200%201.658-2.206%201.658-3.551a9.692%209.692%200%200%200-.3-2.781%201.278%201.278%200%200%200-1.336-1.014%22%20transform%3D%22translate(-228.773%20-643.613)%22%2F%3E%20%3Cpath%20id%3D%22path18%22%20class%3D%22cls-2%22%20d%3D%22M376.489%20655.142h-2.034a.388.388%200%200%201-.368-.379v-10.486a.386.386%200%200%201%20.394-.342h1.893a.391.391%200%200%201%20.365.293v1.6h.037a2.779%202.779%200%200%201%202.784-2.117%202.68%202.68%200%200%201%202.385%201.235%206.663%206.663%200%200%201%20.534%203.264v6.6a.392.392%200%200%201-.394.33h-2.048a.387.387%200%200%201-.362-.33v-5.694c0-1.146.132-2.824-1.279-2.824a1.335%201.335%200%200%200-1.181.839%204.64%204.64%200%200%200-.325%201.985v5.645a.393.393%200%200%201-.4.379%22%20transform%3D%22translate(-316.476%20-643.613)%22%2F%3E%20%3Cpath%20id%3D%22path28%22%20class%3D%22cls-2%22%20d%3D%22M98.77%20649.318a4%204%200%200%201-.382%202.166%201.66%201.66%200%200%201-1.413.928c-.784%200-1.244-.6-1.244-1.48%200-1.741%201.56-2.057%203.04-2.057v.442m2.06%204.979a.427.427%200%200%201-.483.049%204.978%204.978%200%200%201-1.172-1.362%204.045%204.045%200%200%201-3.367%201.485%202.9%202.9%200%200%201-3.057-3.183%203.467%203.467%200%200%201%202.178-3.338%2014.153%2014.153%200%200%201%203.841-.71v-.264a2.605%202.605%200%200%200-.25-1.48%201.36%201.36%200%200%200-1.146-.531%201.554%201.554%200%200%200-1.64%201.227.427.427%200%200%201-.356.374l-1.979-.213a.36.36%200%200%201-.3-.428c.454-2.4%202.626-3.126%204.568-3.126a4.631%204.631%200%200%201%203.077%201.017c.994.928.9%202.166.9%203.514v3.183a2.794%202.794%200%200%200%20.77%201.893.386.386%200%200%201-.009.543c-.417.348-1.158.994-1.566%201.356v-.006%22%20transform%3D%22translate(-65.972%20-642.796)%22%2F%3E%20%3Cpath%20id%3D%22path30%22%20class%3D%22cls-2%22%20d%3D%22M-145.6%20649.318a4%204%200%200%201-.382%202.166%201.656%201.656%200%200%201-1.413.928c-.784%200-1.241-.6-1.241-1.48%200-1.741%201.56-2.057%203.037-2.057v.442m2.06%204.979a.427.427%200%200%201-.483.049%205.028%205.028%200%200%201-1.172-1.362%204.042%204.042%200%200%201-3.367%201.485%202.9%202.9%200%200%201-3.057-3.183%203.471%203.471%200%200%201%202.178-3.338%2014.153%2014.153%200%200%201%203.841-.71v-.264a2.628%202.628%200%200%200-.247-1.48%201.367%201.367%200%200%200-1.146-.531%201.557%201.557%200%200%200-1.643%201.227.427.427%200%200%201-.353.374l-1.982-.213a.362.362%200%200%201-.3-.428c.457-2.4%202.626-3.126%204.568-3.126a4.631%204.631%200%200%201%203.077%201.017c.994.928.9%202.166.9%203.514v3.183a2.794%202.794%200%200%200%20.77%201.893.384.384%200%200%201-.006.543c-.417.348-1.158.994-1.566%201.356l-.006-.006%22%20transform%3D%22translate(151.616%20-642.796)%22%2F%3E%20%3C%2Fg%3E%20%3C%2Fg%3E%3C%2Fsvg%3E")}.da_affili_icon_rakuten{height:22px;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%225642%2020414%2066%2021.828%22%3E%20%3Cpath%20d%3D%22M5685.626%2020424.915a10.529%2010.529%200%201%201-10.532-10.529%2010.532%2010.532%200%200%201%2010.532%2010.529%22%20fill%3D%22%23bf0000%22%2F%3E%20%3Cpath%20d%3D%22M5677.165%2020426.391a3.815%203.815%200%200%200-1.9-7.124h-3.634v11.3h2.15v-3.651h1.1c.094.125%202.633%203.651%202.633%203.651h2.637zm-3.384-4.975h1.483a1.673%201.673%200%200%201%200%203.345h-1.483v-3.345%22%20fill%3D%22%23fff%22%2F%3E%20%3Cpath%20d%3D%22M5708%2020417.008v-2.2h-21.752v2.2h9.468v3.23c0%20.844-.014%201.3-.056%201.9h-8.736v2.223h8.4c-.622%202.536-2.588%206.523-8.785%208.722l-.34.122v2.581l.695-.264c6.544-2.511%209-5.343%2010.174-8.934%201.41%203.661%204.773%206.6%2010.22%208.938l.716.3v-2.664l-.354-.115c-5.127-1.671-8.181-5.544-9.018-8.684h8.625v-2.223h-9.122a14.2%2014.2%200%200%201-.1-1.9v-3.231h9.973M5642.514%2020414.712v2.4l4.429%202.407v-2.407l-4.429-2.4%22%2F%3E%20%3Cpath%20d%3D%22M5663.273%2020426.457v-2.357l-4.439-2.411v2.4l4.346%202.362h-9.21v-.83h3.613v-9.956h-3.849l.511-1.671h-2.366l-.514%201.671h-3.168v9.956h3.553v.83h-9.139l4.332-2.351v-2.407l-4.422%202.4v4.512h7.423a20.665%2020.665%200%200%201-7.6%204.516l-.344.122v2.268l.684-.25a23.953%2023.953%200%200%200%209.066-5.372v5.94h2.223v-5.94a23.026%2023.026%200%200%200%209.108%205.339l.681.233v-2.261l-.354-.115a20.189%2020.189%200%200%201-7.635-4.474h7.5v-2.154zm-12.877-8.764h4.967v1.824h-4.967zm0%205.891v-2.074h4.967v2.074h-4.967%22%2F%3E%20%3Cpath%20d%3D%22M5663.272%2020417.116v-2.4l-.757.41-3.682%202v2.407l4.439-2.411%22%2F%3E%3C%2Fsvg%3E")}.da_affili_icon_yahoo{height:17px;background-image:url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%225879%2020514%2066%2016.637%22%3E%20%3Cdefs%3E%20%3Cstyle%3E%20.cls-1%7Bfill%3A%23ff0132%7D%20%3C%2Fstyle%3E%20%3C%2Fdefs%3E%20%3Cg%20id%3D%22Yahoo_Japan_Logo%22%20transform%3D%22translate(5874.1%2020508.801)%22%3E%20%3Cpath%20id%3D%22%E3%83%91%E3%82%B9_1448%22%20data-name%3D%22%E3%83%91%E3%82%B9%201448%22%20class%3D%22cls-1%22%20d%3D%22M47.3%2016.049a7.791%207.791%200%200%200-.949.316c0%20.542-.09%203.029-.09%203.029a2.543%202.543%200%200%201-1.853%202.441l-.5-.136c.633-.362.949-.723.995-.995a10.846%2010.846%200%200%200%20.181-2.758s0-1.175-.045-1.582c-.181-.045-.995-.226-1.266-.271v-.362c.5%200%201.673.045%202.079.045.452%200%20.995%200%201.447-.045v.316zm21.111.723a3.537%203.537%200%200%201-.633.136c0%20.407.045%203.345.045%204.023%200%20.09-.09.136-.226.045-.633-.633-2.667-2.938-3.345-3.752%200%20.542.045%202.622.045%202.984a6.741%206.741%200%200%200%20.949.226l.045.407h-2.212v-.407a3.543%203.543%200%200%201%20.633-.226c.045-.226.045-3.119.045-3.345-.181%200-.5-.045-.723-.045v-.5h1.627c.588.678%201.989%202.215%202.712%203.029%200-.678-.045-2.26-.045-2.532a5.67%205.67%200%200%201-.678-.09l-.045-.407c.136%200%20.9.045%201.04.045s.768-.045.9-.045zm-12.022%201.221c0%20.542-.5.768-1.085.859v.407c1.175-.136%201.944-.588%201.944-1.311V17.9c0-.814-.542-1.537-1.808-1.537H53l.09.452a4.385%204.385%200%200%200%20.768.045c0%20.542.09%202.848.045%203.526-.136.045-.588.136-.768.181l-.045.407h2.8v-.314a8.651%208.651%200%200%200-.949-.181c0-.136-.045-3.39-.045-3.571a5.48%205.48%200%200%201%20.9.045.956.956%200%200%201%20.633.995M23.253%207.551c-.316.045-1.673.316-2.125.407-.5.136-5.108%203.752-5.425%204.611-.045.271%200%203.436%200%203.436l2.622.181-.09.859c-.362-.045-2.8%200-4.34%200-.768%200-3.119.09-3.933.045l.09-.814a5.423%205.423%200%200%200%201.718-.181c.452-.136.814-.316.814-.768v-2.713a45.472%2045.472%200%200%200-5.018-6.1C7.3%206.421%205.352%206.195%204.9%206.1l.09-.814h8.815l-.136.768c-.407.09-2.26.136-2.758.271%201.266%201.853%203.255%204.295%203.888%205.2.362-.5%203.752-2.893%203.842-3.616-.5-.09-2.079-.316-2.351-.316l-.136-.814h7.595l-.5.768zM42.059%2014.6c-1.4-.09-3.842-.045-5.244%200l.09-.723c.226%200%201.356-.181%201.627-.226v-2.529c-.678%200-4.566.09-5.153.226v2.26s1.673.181%202.034.226l-.09.769c-1.492-.09-4.521-.09-5.967%200l.09-.814c.452%200%201.673-.136%201.944-.181.045-.542.045-1.447.045-2.351v-1.13c0-.407%200-1.492-.045-1.9-.316%200-1.718-.136-2.079-.136l.09-.723c1.266.09%205.108.09%206.148%200l-.09.678c-.316%200-1.673.226-2.079.226v1.989h5.153V7.325c-.362-.045-1.311-.226-1.718-.271l.09-.678c.859.045%204.295.045%205.2%200l-.045.723c-.271%200-1.266.181-1.627.226v6.419s1.447.181%201.763.226l-.136.633zm25.993.768l-.949.045.181-1.627.949.045.9-.045-.181%201.582zm1.085-2.893h-1.4V5.2H70.9l-.271%201.085z%22%2F%3E%20%3Cpath%20id%3D%22%E3%83%91%E3%82%B9_1449%22%20data-name%3D%22%E3%83%91%E3%82%B9%201449%22%20class%3D%22cls-1%22%20d%3D%22M65.222%2014.711H64.5c-1.175-.045-3.436-.678-3.436-2.712v-.181c0-1.989%202.26-2.667%203.436-2.712h.723c1.175.045%203.436.678%203.436%202.712V12c0%201.989-2.26%202.667-3.436%202.712m5.425-2.848c0-2.305-2.215-3.707-5.605-3.8h-.362c-3.571.09-5.56%201.492-5.56%203.8v.09c0%202.17%202.17%203.707%205.56%203.8h.362c3.39-.09%205.56-1.537%205.605-3.8v-.09m7.323%202.079h-.995c-1.266-.09-3.571-.859-3.616-3.029.045-2.17%202.351-2.893%203.616-2.984h.995c1.266.09%203.571.814%203.616%202.984%200%202.17-2.351%202.984-3.616%203.029m5.829-3.029c-.09-2.441-2.4-4.023-6.148-4.114h-.271c-3.752.09-6.1%201.537-6.148%204.068v.09c.09%202.532%202.4%204.023%206.148%204.114h.271c3.707-.09%206.058-1.582%206.148-4.159m-43.4%202.532c.136-.316%201.221-2.667%201.221-2.667l1.04%202.667zm5.605%203.074c-.407-.633-1.853-4.295-2.532-5.922l1.221-.181.136-.633h-1.849c-.678%200-3.571%200-3.842-.045l-.045.633%201.447.362s-2.125%204.249-2.577%204.837c-.362.09-1.311.316-1.673.362l-.09.768c.271-.045%204.023%200%204.385%200l.09-.723-1.311-.316s.588-1.221.678-1.356c.407-.09%202.848-.136%202.848-.136l.859%202.351a13.443%2013.443%200%200%201-1.45.18l-.09.768h5.379l.09-.678a11.677%2011.677%200%200%201-1.673-.271m33.136%204.747c-.5-1.04-1.311-3.029-1.537-3.571l.588-.09.045-.407-2.4.09v.312l.633.09c-.407.9-1.492%203.21-1.673%203.481-.181.045-.362.136-.542.181l-.045.362c.542-.045%201.763%200%201.944%200V21.4l-.588-.181s.362-.9.5-1.175h1.673l.452%201.175s-.407.09-.723.136l-.045.316h2.441l.045-.362a1.759%201.759%200%200%201-.768-.045zm-2.938-1.537c.09-.226.723-1.718.723-1.718l.678%201.718zm-7.142%201.537c-.316-.633-1.13-2.622-1.537-3.571l.633-.136V17.2l-2.441.09v.31l.633.09c-.407.9-1.492%203.21-1.673%203.481a2.548%202.548%200%200%201-.542.181l-.045.362h1.944V21.4l-.588-.181s.362-.9.5-1.175h1.673l.452%201.175s-.407.09-.723.136l-.045.316h2.441l.045-.362a1.613%201.613%200%200%201-.723-.045zm-2.938-1.537c.09-.226.723-1.718.723-1.718l.678%201.718z%22%20transform%3D%22translate(-17.151%20-.877)%22%2F%3E%20%3C%2Fg%3E%3C%2Fsvg%3E")}@media (max-width: 800px){.da_affili_banner{min-height:190px}.da_affili_banner .da_affili_img{margin-bottom:-190px}.da_affili_banner .da_affili_img a{max-width:190px}.da_affili_banner .da_affili_product_info{padding-left:195px}.da_affili_banner .da_affili_product_info .da_affili_productname{padding:20px 0px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea{display:inline-block}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul{padding-left:0px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li{max-width:245px;margin-bottom:7px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"]{font-size:13.5px;padding:10px 5px 10px 62px;max-width:240px;line-height:26px}*[class^="da_affili_icon"]{width:50px;height:25px}.da_affili_icon_da{width:40px;height:40px;margin-left:5px}.da_affili_icon_amazon{height:15px}.da_affili_icon_rakuten{height:17px}.da_affili_icon_yahoo{height:13px}}@media (max-width: 530px){.da_affili_banner{max-width:355px;position:relative}.da_affili_banner .da_affili_img{margin-bottom:0}.da_affili_banner .da_affili_img a{max-width:118px}.da_affili_banner .da_affili_img a.trim .price{font-weight:bold;font-size:15px;padding-bottom:5px}.da_affili_banner .da_affili_img a.trim .price span{font-size:10px;font-weight:normal}.da_affili_banner .da_affili_img a.trim .price span:first-letter{font-weight:bold}.da_affili_banner .da_affili_product_info{padding-left:0;width:100%}.da_affili_banner .da_affili_product_info .da_affili_productname{position:absolute;top:-120px;padding-left:125px;padding-right:5px}.da_affili_banner .da_affili_product_info .da_affili_productname a{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.da_affili_banner .da_affili_product_info .da_affili_buttonarea{padding-top:15px;padding-bottom:20px;border-top:solid 1px #E5E5E5;width:92%;width:calc(100% - 25px);display:block;margin:0px auto}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul{margin:0px auto;display:block;max-width:280px;padding-left:0px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li{max-width:280px}.da_affili_banner .da_affili_product_info .da_affili_buttonarea ul li a[class^="da_affili_link"]{max-width:280px;font-size:14px;padding:10px 5px 10px 85px}*[class^="da_affili_icon"]{left:8px;width:66px;height:20px}.da_affili_icon_da{width:40px;height:40px;margin-left:14px}.da_affili_icon_amazon{height:20px}.da_affili_icon_rakuten{height:22px}.da_affili_icon_yahoo{height:17px}}

  </style>

  <script type="text/javascript">

  sendHeight();

  function sendHeight(){
    var id = [affriatebannerloopid];
    var height = document.documentElement.scrollHeight;
    var password = 'VdKChsfG';
    var data = {i:id,h:height,p:password};
    parent.postMessage(data, "*");
  }
  </script>
  */}).toString().replace(/(\n)/g, '').replace(/\[product_image\]/g, product_image).replace(/\[product_price\]/g, product_price).replace(/\[product_name\]/g, product_name).replace(/\[product_url_da\]/g, product_url_da).replace(/\[product_my_shop\]/g, product_my_shop).replace(/\[product_url_am\]/g, product_url_am).replace(/\[product_url_ra\]/g, product_url_ra).replace(/\[product_url_ya\]/g, product_url_ya).replace(/\[affriatebannerloopid\]/g, affriatebannerloopid).split('/*')[1].split('*/')[0];

  // iframeにウィジェットの内容追加
  var doc = iframe.contentWindow.document;
  doc.open();
  doc.write(widget);
  doc.close();
}
//子フレームから高さ情報を取得
window.addEventListener('message', function(affiliframe) {
  if(affiliframe.data.p == 'VdKChsfG'){
    document.getElementById('da_affili_banner-widget'+affiliframe.data.i).height = affiliframe.data.h + 40;
    console.log(affiliframe.data.p+ 'ダメ？');
  };
}, false);

})();
