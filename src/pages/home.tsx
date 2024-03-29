import { FormEvent, useState } from "react";
import "./info.css";
import "./home.css";

import cardData from "../data/data";
import TopBar from "../component/TopBar";
import FooterBlock from "../component/FooterBlock";
import CateItem from "../data/cateList";
import Carousel from "../component/Carousel";

import { useNavigate, createSearchParams } from "react-router-dom";

import { CardData } from "../data/data";

function Home() {
  const [keyword, setKeyword] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const navigate = useNavigate();

  // for recommend products to show
  const [products, setProducts] = useState<CardData[]>([]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (selectedCategory) {
      navigate({
        pathname: `/result/${selectedCategory}`,
        search: createSearchParams({ keyword }).toString(),
      });
      // searchProducts(keyword, selectedCategory);
      // createSearchParams({ keyword, category: String(selectedCategory) }).toString();

      console.log("it is push this id: ", selectedCategory);
      console.log("it is push this kw: ", keyword);
    } else {
      return(<>
      Category not found
      </>);
      // navigate(`/result/${searchParams}`);
    }
  }

  return (
    <>
      <div className="container">
        <TopBar />

        <div className="banner-top">
          <div className="banner-top-message">
            Shop new & used items
            <br />
            for sale
          </div>
        </div>
        <div className="search-section">
          <div className="search-block">
            <form onSubmit={handleSearch}>
              <div className="search-by-kw">
                <label className="search-heading">
                  Search by keyword
                  <span className="search-optional">(Optional)</span>
                </label>

                <input
                  className="input"
                  type="text"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Search by keyword"
                ></input>
              </div>
              <div className="search-by-cate">
                <label className="search-heading">
                  Category
                  <span className="search-optional">(Optional)</span>
                </label>
                <select
                  name="category"
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(Number(e.target.value))}
                >
                  <option value="">Select a category</option>
                  {CateItem.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.item}
                    </option>
                  ))}
                </select>
              </div>
              <button
                className="search-mp"
                type="submit"
                onClick={() => {
                  handleSearch;
                }}
              >
                Search Marketplace
              </button>
            </form>
          </div>
          <div className="search-section-footer">
            <a
              href="https://apps.apple.com/nz/app/trade-me-buy-sell/id392567559"
              target="_blank"
              className="get-app"
            >
              Get the Trade Me iOS app{" "}
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=nz.co.trademe.trademe&referrer=utm_source%3Dtm%26utm_medium%3Dnewtm&pli=1"
              target="_blank"
              className="get-app"
            >
              Get the Trade Me Android app
            </a>
          </div>
        </div>
        <div className="categories">
          <div className="cate-list">
            <ul>
              {CateItem.slice(1).map((item) => (
                <li key={item.id}>{item.item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="deals-section">
          <div className="deals-section-wrapper">
            <div className="deal-heading">
              <div className="topic">Deals</div>
              <div className="deal-view-all">View all(32,000)</div>
            </div>
            <div className="deals-list">
              <Carousel cardData={cardData} />
            </div>
          </div>
        </div>

        <div className="popular-search">
          <div className="topic">Popular Searches</div>
          <div className="col-lists">
            <div className="half-col-list">
              {/* first col */}
              <div className="popular-col">
                <div className="popular-col-title">Pets and animals</div>
                <div className="popular-list">Dogs for sale</div>
                <div className="popular-list">Puppies for sale</div>
                <div className="popular-list">LiveStock</div>
              </div>
              {/* second col */}
              <div className="popular-col">
                <div className="popular-col-title">Home and outdoors</div>
                <div className="popular-list">Furniture</div>
                <div className="popular-list">Outdoor furniture</div>
                <div className="popular-list">Fence posts & timber</div>
              </div>
            </div>
            <div className="half-col-list">
              {/* third col */}
              <div className="popular-col">
                <div className="popular-col-title">Tech and leisure</div>
                <div className="popular-list">iPhone</div>
                <div className="popular-list">Mountain bike</div>
                <div className="popular-list">Nintendo switch</div>
                <div className="popular-list">Women's shoes</div>
              </div>
              {/* last col */}
              <div className="popular-col">
                <div className="popular-col-title">Other</div>
                <div className="popular-list">Flatmates wanted</div>
                <div className="popular-list">Car parts & accessories</div>
              </div>
            </div>
          </div>
        </div>
        <FooterBlock />
      </div>
    </>
  );
}
export default Home;
