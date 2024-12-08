import React from 'react'
import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  

const Product = () => {
    const products = [
        {
          id: 1,
          name: "Gradient Graphic T-shirt",
          price: 145,
          rating: 3.5,
          discount: null,
          image: "/product1.png",
        },
        {
          id: 2,
          name: "Polo with Tipping Details",
          price: 180,
          rating: 4.5,
          discount: null,
          image: "/polo.png",
        },
        {
          id: 3,
          name: "Black Striped T-shirt",
          price: 120,
          rating: 5,
          discount: 30,
          image: "/white-shirt.png",
        },
        {
          id: 4,
          name: "Skinny Fit Jeans",
          price: 240,
          rating: 3.5,
          discount: 20,
          image: "/jeans.png",
        },
        {
            id: 5,
            name: "Checkered Shirt",
            price: 145,
            rating: 3.5,
            discount: null,
            image: "/shirt.png",
          },
          {
            id: 6,
            name: "Sleeve Striped T-Shirt",
            price: 180,
            rating: 4.5,
            discount: null,
            image: "/sleeves.png",
          },
          {
            id: 7,
            name: "Vertical Striped Shirt",
            price: 120,
            rating: 5,
            discount: 30,
            image: "/striped.png",
          },
          {
            id: 8,
            name: "Courage Graphic T-Shirt",
            price: 240,
            rating: 3.5,
            discount: 20,
            image: "/graphic-shirt.png",
          },
          {
            id: 9,
            name: "Loose Fit Bermuda Shorts",
            price: 240,
            rating: 3.5,
            discount: 20,
            image: "/shorts.png",
          },
    
        // Add more products
      ];
    
      return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
      <p className="text-sm text-gray-600 mb-4">
        <a href="/" className="text-blue-500 hover:underline">
          Home
        </a>{' '}
        / Product
      </p>
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Filters Section */}
              <div className="lg:w-1/4 hidden lg:block">
                <Filters />
              </div>
              {/* Products Section */}
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-4">Casual</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
          <Pagination>
  <PaginationContent>
    <PaginationItem>
      <PaginationPrevious href="#" />
    </PaginationItem>
    <PaginationItem>
      <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
      <PaginationEllipsis />
    </PaginationItem>
    <PaginationItem>
      <PaginationNext href="#" />
    </PaginationItem>
  </PaginationContent>
</Pagination>

          </div>
          </div>
    );
    }

export default Product;

