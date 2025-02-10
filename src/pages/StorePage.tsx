import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { products, productCategories } from "../data/products";
import { Product } from "../types/index";

const StoreContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const StoreHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const FiltersSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f5f5f5;
  border-radius: 8px;
`;

const FilterGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  padding: 1.5rem;
`;

const ProductName = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #333;
`;

const ProductPrice = styled.div`
  font-size: 1.25rem;
  color: #e85d13;
  font-weight: bold;
  margin: 0.5rem 0;
`;

const ProductMeta = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin: 0.5rem 0;
`;

const AddToCartButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: #e85d13;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d04d0e;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const StockStatus = styled.span<{ inStock: boolean }>`
  color: ${(props) => (props.inStock ? "#2ecc71" : "#e74c3c")};
  font-size: 0.9rem;
`;

const StorePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [region, setRegion] = useState<string>("all");

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        (region === "all" || product.region === region)
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  const uniqueRegions = Array.from(new Set(products.map((p) => p.region)));

  return (
    <>
      <Header />
      <StoreContainer>
        <StoreHeader>
          <h1>
            <i className="fa-solid fa-shop"></i> Mexican Artisan Market
          </h1>
          <p>
            Support traditional Mexican artisans and bring authentic cookware to
            your kitchen
          </p>
        </StoreHeader>

        <FiltersSection>
          <FilterGroup>
            <label htmlFor="category">Category:</label>
            <Select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              {productCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label htmlFor="region">Region:</label>
            <Select
              id="region"
              value={region}
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="all">All Regions</option>
              {uniqueRegions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </Select>
          </FilterGroup>

          <FilterGroup>
            <label htmlFor="sort">Sort by:</label>
            <Select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </Select>
          </FilterGroup>
        </FiltersSection>

        <ProductGrid>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id}>
              <ProductImage src={product.imageUrl} alt={product.name} />
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
                <ProductMeta>
                  Region: {product.region}
                  <br />
                  Artisan: {product.artisan}
                  <br />
                  <StockStatus inStock={product.inStock}>
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </StockStatus>
                </ProductMeta>
                <AddToCartButton disabled={!product.inStock}>
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </AddToCartButton>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
      </StoreContainer>
      <Footer />
    </>
  );
};

export default StorePage;
