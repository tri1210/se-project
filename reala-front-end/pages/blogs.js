import { useState } from "react";
import Blog from "../components/blog";
import Layout from "../components/global/layout";
import InnerPageLayout from "../components/inner-page-layout";
import Pagination from "../components/pagination";
import { API_URL } from "../config";

const Blogs = ({ blogs }) => {
  const { data } = blogs;

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const blogData = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout title="All Property Blogs">
      <InnerPageLayout title="Blogs" />
      <div className="blog section-padding">
        <div className="container">
          <div className="row justify-content-center">
            {blogData === null || undefined || 0 ? (
              <span className="error">Reala Blogs Not Pound</span>
            ) : (
              blogData?.map((blogs) => <Blog blogs={blogs} key={blogs.id} />)
            )}
          </div>
          {data.length > 6 ? (
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={data?.length}
              paginate={paginate}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/blogs?populate=*`);
  const blogs = await res.json();

  return {
    props: { blogs },
  };
}
