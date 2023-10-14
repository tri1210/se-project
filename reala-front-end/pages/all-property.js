import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Layout from "../components/global/layout";
import { API_URL } from "../config";
import AllPropertyNav from "../components/all-property-nav";
import PropertyCard from "../components/property-card";
import ProductListCard from "../components/product-list-card";
import InnerPageLayout from "../components/inner-page-layout";
import Pagination from "../components/pagination";

const AllProperty = ({ property }) => {
  const { data } = property;
  const [view, setView] = useState(false);

  const searchProperty = () => {
    var searchKeyword, i, txtValue;
    let input = document.getElementById("search-input");
    let filter = input.value.toUpperCase();
    let allProperty = document.getElementById("property-list");
    let property = allProperty.getElementsByClassName("property");

    for (i = 0; i < property.length; i++) {
      searchKeyword = property[i].getElementsByClassName("property-name")[0];
      txtValue = searchKeyword.textContent || searchKeyword.innerText;

      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        property[i].style.display = "";
      } else {
        property[i].style.display = "none";
      }
    }
  };

  const [key, setKey] = useState("all");

  const propertyRent = data?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "rent"
  );
  const propertySale = data?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "sale"
  );

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const propertyData = data?.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout>
      <InnerPageLayout title="All Property" />
      <div className="all-property featured-list section-padding">
        <div className="container">
          <AllPropertyNav
            setView={setView}
            searchProperty={searchProperty}
            view={view}
            data={data}
          />
          <div id="property-list">
            {view ? (
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab id="controlled-tab-example" eventKey="all" title="All">
                  <div className="row">
                    {data === null && (
                      <span className="error">Property not available</span>
                    )}
                    {propertyData?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
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
                </Tab>
                <Tab eventKey="rent" title="Rent">
                  <div className="row">
                    {data === null && (
                      <span className="error">Property not available</span>
                    )}
                    {propertyRent?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Sale">
                  <div className="row">
                    <span className="error">
                      {data === null && (
                        <span className="error">
                          Property not available for sale
                        </span>
                      )}
                    </span>
                    {propertySale?.map((property) => (
                      <ProductListCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
              </Tabs>
            ) : (
              <Tabs activeKey={key} onSelect={(k) => setKey(k)}>
                <Tab eventKey="all" title="All">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">Property not available</span>
                    ) : null}
                    {propertyData?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
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
                </Tab>
                <Tab eventKey="rent" title="Rent">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">
                        Property not available for rent
                      </span>
                    ) : null}
                    {propertyRent?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
                <Tab eventKey="sale" title="Sale">
                  <div className="row">
                    {data === null || undefined || 0 ? (
                      <span className="error">
                        Property not available for Sale
                      </span>
                    ) : null}
                    {propertySale?.map((property) => (
                      <PropertyCard property={property} key={property.id} />
                    ))}
                  </div>
                </Tab>
              </Tabs>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AllProperty;

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/properties?populate=*`);
  const property = await res.json();

  return {
    props: { property },
  };
}
