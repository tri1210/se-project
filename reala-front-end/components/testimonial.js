import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import SectionTitle from "./global/section-title";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <div className="testimonial section-padding section-bg">
      <div className="container">
        <SectionTitle title="What people said about Reala" />
        <div className="rwo">
          <div className="col-12">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay
              breakpoints={{
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                }
              }}
            >
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user1.jpg"
                        alt="user 01"
                      />
                    </div>
                    <h3 className="user__name">Mark Tony</h3>
                    <p className="user__title">Software Developer</p>
                  </div>
                  <p className="user__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate consequuntur eius sunt cum laborum harum provident
                    error animi ipsam modi debitis dignissimos veniam
                    repudiandae mollitia sed voluptates?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user2.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Jhon Dow</h3>
                    <p className="user__title">Frontend Developer</p>
                  </div>
                  <p className="user__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate consequuntur eius sunt cum laborum harum provident
                    error animi ipsam modi debitis dignissimos veniam
                    repudiandae mollitia sed voluptates?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user3.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Lama Dev</h3>
                    <p className="user__title">Full-stack Developer</p>
                  </div>
                  <p className="user__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate consequuntur eius sunt cum laborum harum provident
                    error animi ipsam modi debitis dignissimos veniam
                    repudiandae mollitia sed voluptates?
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="testimonial__item">
                  <div className="user">
                    <div className="user__image">
                      <img
                        className="img-fluid"
                        src="images/user4.jpg"
                        alt="user 02"
                      />
                    </div>
                    <h3 className="user__name">Jorina begum</h3>
                    <p className="user__title">Book Writer</p>
                  </div>
                  <p className="user__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate consequuntur eius sunt cum laborum harum provident
                    error animi ipsam modi debitis dignissimos veniam
                    repudiandae mollitia sed voluptates?
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
