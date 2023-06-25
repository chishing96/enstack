import mainChairImage from "../../assets/chair.jpeg";
import chair2 from "../../assets/chair2.jpeg";
import chair3 from "../../assets/chair3.jpeg";

import mainBedImage from "../../assets/bed.jpeg";
import bed2 from "../../assets/bed2.jpeg";
import bed3 from "../../assets/bed3.jpeg";

import mainLampImage from "../../assets/lamp.jpeg";
import lamp2 from "../../assets/lamp2.jpeg";
import lamp3 from "../../assets/lamp3.jpeg";

import mainTableImage from "../../assets/table.jpeg";
import table2 from "../../assets/table2.jpeg";
import table3 from "../../assets/table3.jpeg";

import mainArmChairImage from "../../assets/armchair.jpeg";
import armchair2 from "../../assets/armchair2.jpeg";
import armchair3 from "../../assets/armchair3.jpeg";

export const productItemsData = [
  {
    type: "Lamp",
    name: "Black Simple Lamp",
    price: 12.0,
    main_image: mainLampImage,
    product_images: [lamp2, lamp3],
    priority: 1,
    product_id: "00000001",
    description: "Lorem Ipsum...",
    rating: 4.75,
    review_count: 50,
    stock: 5,
  },
  {
    type: "Table",
    name: "Black Simple Table",
    price: 12.61,
    main_image: mainTableImage,
    product_images: [table2, table3],
    priority: 1,
    product_id: "00000002",
    description: "Lorem Ipsum...",
    rating: 4.1,
    review_count: 10,
    stock: 50,
  },
  {
    type: "Chair",
    name: "Black Simple Armchair",
    price: 1.61,
    main_image: mainArmChairImage,
    product_images: [armchair2, armchair3],
    priority: 0,
    product_id: "00000003",
    description: "Lorem Ipsum...",
    rating: 1.1,
    review_count: 100,
    stock: 0,
  },
  {
    type: "Bed",
    name: "Black Simple Bed",
    price: 2.61,
    main_image: mainBedImage,
    product_images: [bed2, bed3],
    priority: 10,
    product_id: "00000004",
    description: "Lorem Ipsum...",
    rating: 0,
    review_count: 0,
    stock: 2,
  },
  {
    type: "Chair",
    name: "White Simple Chair",
    price: 99.0,
    main_image: mainChairImage,
    product_images: [chair2, chair3],
    priority: 12,
    product_id: "00000005",
    description: "Lorem Ipsum...",
    rating: 0,
    review_count: 0,
    stock: 0,
  },
  {
    type: "Table",
    name: "White Simple Table",
    price: 80.0,
    main_image: mainTableImage,
    product_images: [table2, table3],
    priority: 0,
    product_id: "00000006",
    description: "Lorem Ipsum...",
    rating: 5.0,
    review_count: 1000,
    stock: 2,
  },
  {
    type: "Chair",
    name: "White Simple Armchair",
    price: 1000000.5,
    main_image: mainArmChairImage,
    product_images: [armchair2, armchair3],
    priority: 0,
    product_id: "00000007",
    description: "Lorem Ipsum...",
    rating: 3.0,
    review_count: 1,
    stock: 1,
  },
];
