import { useState } from 'react'
import './App.css'
import Carmy from './assets/iphone14promax.webp'
import Cjoa from './assets/iphone16.jpg'
import Curs from './assets/iphone15.webp'
import Slider1 from './assets/1.jpg'
import Slider2 from './assets/2.jpg'
import Slider3 from './assets/3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <header>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Slider1} alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider3} alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Slider2} alt="Slide 2" />
            </SwiperSlide>
          </Swiper>
        </header>
        <section className="produtos">

          {/* Produto 1 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Cjoa} alt="" className="img-card" />
              <h2 className="titulo-card">Iphone 16 Pro Max</h2>
              <p className="desc">128GB, Câmera de 48Mp, Rede 5G e-Sim,  </p>
              <p className="preco">R$ 8.500,99</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (72)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

          {/* Produto 2 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Carmy} alt="" className="img-card" />
              <h2 className="titulo-card">Iphone 14 Pro Max </h2>
              <p className="desc">256gb, Câmera de 48Mp, Rede 5G e-Sim,</p>
              <p className="preco">R$ 5.100,00</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ☆</span> (15)</div>
              <div className="off">- 5%</div>
            </div>
          </a>

          {/* Produto 3 */}
          <a href="#" className="link-card">
            <div className="card">
              <img src={Curs} alt="" className="img-card" />
              <h2 className="titulo-card">Iphone 15 Pro Max</h2>
              <p className="desc">256gb, Câmera de 48Mp, Rede 5G e-Sim, Titânio Branco</p>
              <p className="preco">R$ 6.400,90</p>
              <div className="avaliacao"> <span>★ ★ ★ ★ ★</span> (302)</div>
              <div className="off">- 10%</div>
            </div>
          </a>

        </section>
        <section className="destaque">

          <iframe src="https://www.youtube.com/embed/p7cDN1ofIw0?autoplay=1&mute=1&controls=0&loop=1&playlist=p7cDN1ofIw0&modestbranding=1&showinfo=0" frameborder="0" allow="autoplay; fullscreen"></iframe>

        </section>
        
        <footer>

          <img src="" alt="" className="logo-footer" />

          <div className="social-icons">
            <div className="icon">
              <img src="" alt="" id="instagram" />
            </div>
            <div className="icon">
              <img src="" alt="" id="discord" />
            </div>
            <div className="icon">
              <img src="" alt="" id="x" />
            </div>
            <div className="icon">
              <img src="" alt="" id="youtube" />
            </div>
          </div>

        </footer>
      </main>
    </>
  )
}

export default App
