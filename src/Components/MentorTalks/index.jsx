// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../Styles/MentorTalks.css';

// import required modules
import { Pagination, Navigation } from 'swiper';

const MentorTalks = () => {
  const breakpoints = {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 700px
    700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  };
  return (
    <>
      <section id="mentor-talks">
        <h3>Mentor Talks</h3>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          //   slidesPerGroup={3}
          breakpoints={breakpoints}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
          id="talks"
        >
          <SwiperSlide className="talk">Slide 1</SwiperSlide>
          <SwiperSlide className="talk">Slide 2</SwiperSlide>
          <SwiperSlide className="talk">Slide 3</SwiperSlide>
          <SwiperSlide className="talk">Slide 4</SwiperSlide>
          {/* <SwiperSlide className="talk">Slide 5</SwiperSlide>
          <SwiperSlide className="talk">Slide 6</SwiperSlide>
          <SwiperSlide className="talk">Slide 7</SwiperSlide>
          <SwiperSlide className="talk">Slide 8</SwiperSlide>
          <SwiperSlide className="talk">Slide 9</SwiperSlide> */}
        </Swiper>
      </section>
    </>
  );
};

export default MentorTalks;
