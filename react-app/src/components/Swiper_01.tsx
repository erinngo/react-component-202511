import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "../scss/Swiper_01.module.scss";
import "swiper/css";

interface Props {
  tags?: string[];
}

function Swiper_01({ tags = mock_reviewAI }: Props) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <>
      <h5> 동적 스와이퍼 한줄</h5>
      <section className={styles.wrap}>
        {tags?.length ? (
          <Swiper
            slidesPerView={"auto"}
            slidesOffsetBefore={10}
            slidesOffsetAfter={10}
          >
            {tags.map((t, i) => (
              <SwiperSlide key={`${t}-${i}`} className={styles.tagSlide}>
                <button
                  type="button"
                  className={`${styles.tag} ${
                    activeIndex === i ? styles.active : ""
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <p>{t}</p>
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
      </section>
    </>
  );
}

/**
 * mock
 */
const mock_reviewAI = [
  "날씬해 보여요",
  "사이즈 맞아요",
  "배송이 빨라요",
  "컬러가 예뻐요",
  "선물하기 좋아요",
  "면이 부드러워요",
  "생활방수가 돼요",
  "구김이 없네요",
  "화사해요",
  "재구매 의사 있어요",
];

export default Swiper_01;
