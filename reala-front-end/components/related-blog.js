import Link from "next/link";
import { API_URL } from "../config";

const RelatedBlog = ({ blog }) => {
  const { image, title, subtitle, date, slug } = blog?.attributes;

  return (
    <div className="col-md-6 mb-4 mb-md-0">
      <div className="blog__item">
        <div className="blog__item--image">
          <img
            className="img-fluid"
            src={
              image?.data !== null
                ? `${API_URL}${image?.data?.attributes.url}`
                : "/images/404.jpg"
            }
            alt=""
          />
        </div>
        <div className="blog__item__info">
          <h3 className="title">
            <Link href={`/blog/${slug}`}>{title}</Link>
          </h3>
          <p>Created At: {new Date(date).toLocaleDateString("en-US")}</p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlog;
