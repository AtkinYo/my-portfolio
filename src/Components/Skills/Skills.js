// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import '../Styles/StyledCarousel.css'
import HTML from '../../Images/html5.png'
import CSS from '../../Images/css3.png'
import SASS from '../../Images/sass.png'
import BOOTSTRAP from '../../Images/bootstrap.png'
import JS from '../../Images/js.png'
import REACT from '../../Images/reactjs.png'
import JQUERY from '../../Images/jquery.png'
import GIT from '../../Images/git.png'

const Carousel = () => {


  return (
    <Swiper className="Swiper"
      spaceBetween={25}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >

      <SwiperSlide className="SwiperSlide">
          <img src={HTML} alt="HTML5" />
          <h2>HTML</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={CSS} alt="CSS3" />
          <h2>CSS</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={SASS} alt="SASS" />
          <h2>SASS</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={BOOTSTRAP} alt="BOOTSTRAP" />
          <h2>Bootstrap</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={JS} alt="JS" />
          <h2>Javascript</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={REACT} alt="REACT" />
          <h2>React JS</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={JQUERY} alt="JQUERY" />
          <h2>jQuery</h2>
      </SwiperSlide>

      <SwiperSlide className="SwiperSlide">
          <img src={GIT} alt="GIT" />
          <h2>Git</h2>
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel
