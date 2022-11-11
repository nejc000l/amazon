import Head from "next/head";
import { useState } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  const [search,setSearch] = useState('')
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header products={products} search={search} setSearch={setSearch} />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed   search={search} setSearch={setSearch}  products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: {
      products,
    },
  };
}
