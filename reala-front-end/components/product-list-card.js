import { AiFillStar, AiOutlineHome } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiBathtub } from "react-icons/gi";
import { MdBed, MdCall } from "react-icons/md";
import { API_URL } from "../config";
import Link from "next/link";

const ProductListCard = ({ property }) => {
  const {
    image,
    price,
    slug,
    title,
    location,
    phone,
    beds,
    baths,
    propertyType,
  } = property?.attributes;

  return (
    <>
      <div className="property col-12 mb-4">
        <div className="list-view">
          <div className="row">
            <div className="col-md-5">
              <div className="list-view--image h-100">
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
                <div className="type">{property.attributes.type}</div>
              </div>
            </div>
            <div className="col-md-7 col-lg-6 offset-lg-1">
              <div className="list-view__info">
                <div className="list-view__info--title">
                  <h3>
                    <Link className="property-name" href={`/property/${slug}`}>
                      {property.attributes.title}
                    </Link>
                  </h3>
                </div>
                <div className="list-view__info--price">${price} / month</div>
                <div className="list-view__info--ratting">
                  <span>
                    <AiFillStar />
                    {property.attributes.rating}
                  </span>{" "}
                  5 reviews
                </div>
                <ul className="list-view__info--list">
                  <li>
                    <GoLocation /> {location}
                  </li>
                  <li>
                    <MdCall /> <Link href={`tel${phone}`}>{phone}</Link>
                  </li>
                </ul>
                <ul className="list-view__info--expert">
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
        </div>
      </div>
    </>
  );
};

export default ProductListCard;
