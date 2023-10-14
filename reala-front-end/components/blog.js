import Link from "next/link";
import { API_URL } from "../config";
import moment from 'moment';
import 'moment-timezone';

const Blog = ({ blogs }) => {
  const { image, title, subtitle, date, slug } = blogs?.attributes;

  return (
    <div className="col-md-6 col-lg-4 mb-4">
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
          <p>
            Created At:{" "}
            {moment(date).tz("America/New_York").format('MMMM Do YYYY')}
          </p>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
