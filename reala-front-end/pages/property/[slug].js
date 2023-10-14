import Skeleton from "react-loading-skeleton";
import Layout from "../../components/global/layout";
import PropertyCard from "../../components/property-card";
import { API_URL } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import SectionTitle from "../../components/global/section-title";
import {
  MdBed,
  MdOutlineKeyboardArrowLeft,
  MdOutlineNavigateNext,
} from "react-icons/md";
import { GiBathtub, GiMechanicGarage } from "react-icons/gi";
import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { BsCheckCircle } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaVoteYea,
} from "react-icons/fa";
import md from "markdown-it";

const PropertyPage = ({ properties, slug }) => {
  const property = properties?.filter((data) => data?.attributes.slug === slug);

  const {
    image,
    price,
    title,
    description,
    rating,
    location,
    date,
    beds,
    baths,
    user,
    propertyFeature,
    propertyType,
    categories,
  } = property[0]?.attributes;

  const relatedProperty = properties?.filter(
    (data) =>
      data?.attributes.categories.data[0]?.attributes.categoryname ===
      categories?.data[0]?.attributes.categoryname
  );

  return (
    <Layout title="{title}">
      {property === null ? (
        <div className="loader">
          <Skeleton />
        </div>
      ) : (
        <div className="single-page">
          <div className="rwo">
            <div className="col-12">
              <Swiper
                className="single-page__swiper"
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                autoplay
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {image.data === null ? "Image not available" : ""}
                {image?.data.map((images) => (
                  <SwiperSlide key={images.id}>
                    <img
                      className="img-fluid"
                      src={`${API_URL}${images.attributes.url}`}
                      alt={title}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="prev">
                <MdOutlineKeyboardArrowLeft />
              </div>
              <div className="next">
                <MdOutlineNavigateNext />
              </div>
            </div>
          </div>
          <div className="container">
            <div className="single-page__top">
              <h3>
                {title} <span>{propertyType}</span>
              </h3>
              <span className="price">${price}</span>
              <ul>
                <li>
                  <GoLocation /> {location}
                </li>
                <li>
                  <span>
                    <AiFillStar />
                    {rating}
                  </span>
                  5 Reviews
                </li>
              </ul>
            </div>
          </div>
          <div className="section-bg section-padding">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="description-card">
                    <div className="description-card__header">
                      <h4>Property Details</h4>
                    </div>
                    <div className="description-card__body">
                      <ul>
                        <li>
                          <span>
                            <MdBed />
                            Beds
                          </span>{" "}
                          <span>{beds}</span>
                        </li>
                        <li>
                          <span>
                            <GiBathtub />
                            Bathrooms
                          </span>{" "}
                          <span>{baths}</span>
                        </li>
                        <li>
                          <span>
                            <AiOutlineHome />
                            Area (sq ft)
                          </span>{" "}
                          <span>4506</span>
                        </li>
                        <li>
                          <span>
                            <GiMechanicGarage />
                            Garages
                          </span>{" "}
                          <span>2</span>
                        </li>
                        <li>
                          <span>
                            <FaVoteYea />
                            Built Year
                          </span>{" "}
                          <span>
                            {new Date(date).toLocaleDateString("en-US")}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {description === null ? (
                    ""
                  ) : (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Description</h4>
                      </div>
                      <div className="description-card__body">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: md().render(description),
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {propertyFeature === null ? (
                    ""
                  ) : (
                    <div className="description-card">
                      <div className="description-card__header">
                        <h4>Property Features</h4>
                      </div>
                      <div className="description-card__body features">
                        <ul>
                          {propertyFeature.map((features) => (
                            <li key={features.id}>
                              <span>
                                <BsCheckCircle /> {features.feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
                <div className="col-md-4">
                  <div className="description-sidebar">
                    <div className="description-sidebar__header">
                      <h4>Property Owner</h4>
                    </div>
                    <div className="description-sidebar__body">
                      <h4 className="username">
                        {user.data.attributes.username}
                      </h4>
                      <p className="mb-0">{user.data.attributes.whatsApp}</p>
                      <p>{user.data.attributes.email}</p>
                      <ul>
                        <li>
                          <a
                            href={user.data.attributes.facebook}
                            className="icon"
                          >
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a
                            href={user.data.attributes.twitter}
                            className="icon"
                          >
                            <FaTwitter />
                          </a>
                        </li>
                        <li>
                          <a
                            href={user.data.attributes.instagram}
                            className="icon"
                          >
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a
                            href={`tel:${user.data.attributes.whatsApp}`}
                            className="icon"
                          >
                            <FaWhatsapp />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="similar">
            <div className="featured-list section-padding">
              <div className="container">
                <SectionTitle position="left" title="Similar Properties" />
                <div className="featured-listing__wrapper">
                  <div className="row">
                    {relatedProperty?.slice(0, 3).map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default PropertyPage;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const allProperty = await res.json();
  const properties = allProperty.data;

  return {
    props: {
      properties,
      slug,
    },
  };
}
