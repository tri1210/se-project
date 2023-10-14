import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import Link from "next/link";

const PropertyCard = ({ property }) => {
  const {
    image,
    price,
    slug,
    title,
    rating,
    type,
    location,
    phone,
    beds,
    baths,
    propertyType,
  } = property?.attributes;
  return (
    <div className="col-md-6 col-lg-4 mb-4 property">
      <div className="featured-list__item">
        <div className="featured-list__item--image">
          <img
            className="img-fluid"
            src={
              image?.data !== null
                ? `${API_URL}${image?.data[0]?.attributes.url}`
                : "/images/404.jpg"
            }
            alt={title}
          />
          {propertyType !== null && (
            <div className="popular">{propertyType}</div>
          )}
          <div className="price">${price} / month</div>
        </div>
        <div className="featured-list__item__info">
          <div className="featured-list__item__info--title">
            <h3>
              <Link className="property-name" href={`/property/${slug}`}>
                {title}
              </Link>
            </h3>
          </div>
          <div className="featured-list__item__info--ratting">
            <span>
              <AiFillStar />
              {rating}
            </span>{" "}
            5 reviews
          </div>
          <ul className="featured-list__item__info--list">
            <li>
              <span>{type}</span>
            </li>
            <li>
              <GoLocation /> {location}
            </li>
            <li>
              <MdCall /> <a href={`tel${phone}`}>{phone}</a>
            </li>
          </ul>
          <ul className="featured-list__item__info--expert">
            <li>
              <MdBed /> {beds} Beds
            </li>
            <li>
              <GiBathtub /> {baths} Baths
            </li>
            <li>
              <AiOutlineHome /> 6,541 sqft
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
