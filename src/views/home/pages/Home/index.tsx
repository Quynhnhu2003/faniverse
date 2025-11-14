// ** Styles Import
import styles from "./index.module.scss";

// ** Another Import
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { listBanner } from "../../../../data/home/listBanner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Home() {
  // ** State
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // ** Hook
  const navigate = useNavigate();

  // ** Function
  const handleClickBanner = (url: string) => {
    if (!url) return;

    navigate(url);
  };
  return (
    <div className={styles.homeContainer}>
      <Swiper
        modules={[EffectCoverflow, Navigation, Autoplay, EffectFade]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={-100} // làm cho slide giữa che bớt hai bên
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          scale: 0.8,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        style={{ width: "100%", padding: "4rem 0 2rem" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {listBanner.map((i, index) => (
          <SwiperSlide key={i.id + "-" + index}>
            <button
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                overflow: "hidden",
                borderRadius: "16px",
                border: 'none',
                backgroundColor: 'transparent'
              }}
            >
              <img
                src={i.imageUrl}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              {/* Overlay mờ cho slide không active */}
              {activeIndex !== index && <div className="slide-overlay" />}
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Home;
