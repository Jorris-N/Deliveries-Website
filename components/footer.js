class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <style>
          footer {
            height: 100vh;
            list-style: none;
            align-items: center;
            background: whitesmoke;
            width:100%
          }
          .footer, .footerTop{
            padding-top: 100px;
            padding-bottom: 110px;
          }
          .container{
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
          }
          .container a{
            text-decoration: none;
          }
          .widget2 li, .widget li{
            list-style: none;
          }
          .widget h3, .widget2 h3, .widget3 h3, .widget4 h3{
            font-family: Segoe UI Semibold;
            font-weight: bold; 
            font-size: 22px;
            margin-bottom: 20%;
          }
          .widget li, .widget2 li, .widget3 li{
            color: #919191;
            list-style-type: none;
            margin-bottom: 18%;
            font-size: 18px;
            font-family: calibri;
          }
          
          .widget a, .widget2 a, .widget3 a{
            color: #919191;
          }
          .widget a:hover, .widget2 a:hover, .widget3 a:hover{
            color:  #87CEEB;
          }
          .widget3 i{
            font-size: 24px;
            text-align: center;
          }
          .widget3 p{
            font-family: calibri;
          }
          .copybord{
            border-top: 1px solid #E8E8E8;
            padding-bottom: 30px;
          }
          .text p{
            text-align: center;
            font-family: calibri;
            font-size: 18px;
            font-weight: bold;
            color: #919191;
          }
        </style>
        <footer>
        <div class="footerTop">
        <div class="container">
            <div class="widget">
                <h3>Services</h3>
                <ul>
                  <li> <a href="../train.html">Train Freight</a></li>
                 <li> <a href="../road.html">Road Freight</a></li>
                  <li><a href="../air.html">Air Freight</a></li>
                  <li><a href="../warehouse.html">Warehousing</a></li>
             </ul>
            </div>
            <div class="widget2">
                <h3>company</h3>
                <ul>
               <li> <a href="https://www.businessdailyafrica.com/">News</a></li>
               <li> <a href="../company.html">Testimonials</a> </li>
                <li><a href="../history.html">History</a></li>
                <li><a href="../company.html">Why Us?</a></li>
                </ul>
            </div>
            <div class="widget3">
                <h3>Follow Us</h3>
               <p style="color: #243c64;"> <i class="fa fa-facebook-square" aria-hidden="true" style="color: #243c64;"></i>&nbsp; @ Marshall Logistics</p><br>
               <p style="color: #00acee;"> <i class="fa fa-twitter-square" aria-hidden="true" style="color: #00acee;"></i>&nbsp; @ Marshall Logistics</p><br>
               <p style="color: #0e76a8;"> <i class="fa fa-linkedin-square" aria-hidden="true" style="color: #0e76a8;"></i>&nbsp; @ Marshall Logistics</p><br>
               <p style="color:  #db4a39;"> <i class="fa fa-google-plus-square" aria-hidden="true" style="color:  #db4a39;"></i>&nbsp; @ Marshall Logistics</p>
            </div>
            <div class="widget4">
                <h3>Subscribe NewsLetter</h3>
                <form action="" method="post">
                    <input type="email" name="email" placeholder="&nbsp;Enter Your Email" required style="height:30px; border: 1px solid; border-radius: 6px;" >
                    <button type="submit" style="padding: 8px; background: #87CEEB; border:none; color:#fff; font-size: 14px; border-radius: 6px;">Subscribe</button>
                </form>
            </div>
        </div>

    </div>
    <div class="copyright">
        <div class="copybord"></div>
        <div class="text">
            <p>Copyright &copy; 2022 All Rights Reserved | <span style="color: #87CEEB;">Marshall Logistics</span></p>
        </div>
    </div>
        </footer>
      `;
    }
  }
  
  customElements.define('footer-component', Footer);