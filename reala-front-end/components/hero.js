import { useRouter } from "next/router";
import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { BsSearch } from "react-icons/bs";

const Hero = () => {
  const router = useRouter();
  const [key, setKey] = useState("rent");
  const [query, setQuery] = useState("");
  const querySearchHandler = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  const submitHandlerRent = (e) => {
    e.preventDefault();
    router.push(`/search-rent?query=${query}`);
  };
  const submitHandlerSale = (e) => {
    e.preventDefault();
    router.push(`/search-sale?query=${query}`);
  };

  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-3">Find your dream home now</h1>
            <h3 className="mb-5 fs-5">
              We helps people to getting home and renting with good price
            </h3>
            <Tabs
              id="controlled-tab-example-hero"
              activeKey={key}
              onSelect={(k) => setKey(k)}
            >
              <Tab eventKey="rent" title="For-Rent">
                <form className="hero__search" onSubmit={submitHandlerRent}>
                  <input
                    onChange={querySearchHandler}
                    type="text"
                    placeholder="Search..."
                  />
                  <button type="submit" aria-label="Search for-rent">
                    <BsSearch />
                  </button>
                </form>
              </Tab>
              <Tab eventKey="sale" title="For-Sale">
                <form className="hero__search" onSubmit={submitHandlerSale}>
                  <input
                    onChange={querySearchHandler}
                    type="text"
                    placeholder="Search..."
                  />
                  <button type="submit" aria-label="Search for-sale">
                    <BsSearch />
                  </button>
                </form>
              </Tab>
            </Tabs>
          </div>
          <div className="col-lg-6">
            <div className="hero__image">
              <img src="images/hero.jpg" alt="hero" />
              <div className="image-two">
                <img src="images/house1.jpg" alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
