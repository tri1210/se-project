import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import SectionTitle from "./global/section-title";
import PropertyCard from "./property-card";

const FeaturedListing = ({ data }) => {
  const [key, setKey] = useState("rent");
  const featured = data?.filter(
    (property) => property.attributes.propertyType === "featured"
  );

  const propertyRent = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "rent"
  );
  const propertySale = featured?.filter(
    (property) =>
      property.attributes.categories.data[0]?.attributes.categoryname === "sale"
  );

  return (
    <div className="featured-list section-padding">
      <div className="container">
        <SectionTitle title="Featured Listing" />
        <div className="featured-listing__wrapper">
          <Tabs
            activeKey={key}
            onSelect={(k) => setKey(k)}
            id="controlled-tab-example-listing"
          >
            <Tab eventKey="rent" title="Rent">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">property not available for rent</span>
                ) : null}
                {propertyRent?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
            <Tab eventKey="sale" title="Sale">
              <div className="row justify-content-center">
                {data === null || undefined || 0 ? (
                  <span className="error">property not available for sale</span>
                ) : null}
                {propertySale?.slice(0, 3).map((property) => (
                  <PropertyCard property={property} key={property.id} />
                ))}
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default FeaturedListing;
