import LeftSideBar from "@/components/news/LeftSideBar";
import RightSideBar from "@/components/news/RightSideBar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {

  const categories = await getCategories();
  console.log(categories);

  return (
    <div className="text-xl font-medium grid grid-cols-12 gap-2 container mx-auto text-center">
      <div className="col-span-3">
        <LeftSideBar categories={categories} activeId={null}></LeftSideBar>
      </div>
      <div className="col-span-6 bg-pink-300">
        <h2 className="text-xl font-medium text-left mb-3">Dragon News Home</h2>
      </div>
      <div className="col-span-3 bg-red-100">
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
}
