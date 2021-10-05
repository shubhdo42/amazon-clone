import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className ="home">
          <div className="home__container">
              <img 
              className = "home__image"
              src="https://m.media-amazon.com/images/I/71M5RL8EgML._SX3000_.jpg" alt="">
              </img>

              <div className="home__row">
                  <Product title="Up to 40% off | Mobiles & accessories"
                   price={19999}
                   image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Pranjal/MSO/update/DesktopGateway_CategoryCard_379X304._SY304_CB639966368_.jpg
                   "
                   rating={4}
                   />
                   <Product title="Up to 65% off | TVs & appliances"
                   price={29999}
                   image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/TVs/Jupiter21/LATV/R01_CC_379X304._SY304_CB639977399_.jpg
                   "
                   rating={5}
                   />

                  
                 

              </div>
              <div className="home__row">
                  <Product title="Under ₹599 | Pocket-friendly Fashion"
                   price={599}
                   image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/Gateway/Jupiter_21/PC__BTF_PFF/Rev_1/Mens-Clothing_._SY116_CB640931643_.jpg
                   "
                   rating={4}
                   />
                   <Product title="Up to 50% off | Alexa & Fire TV devices"
                   price={1999}
                   image ="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Jupiter-21/PC5_1x._SY116_CB640379960_.jpg
                   "
                   rating={4}
                   />
                   <Product title="Up to 70% off | Books, toys, grooming & more"
                   price={3999}
                   image ="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Books/092020/jupiter/gw/books-1x2._SY116_CB639940730_.jpg
                   "
                   rating={4}
                   />
                   

              </div>
              <div className="home__row">
                     

              </div>


          </div>

        </div>
    )
}

export default Home
