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
    <div className="text-xl font-bold grid grid-cols-12 gap-2 container mx-auto text-center">
      <div className="col-span-3">
        <h2 className="text-xl font-medium text-left mb-3">All Categories</h2>
        <ul>
          {
            categories.news_category.map(category => <li
              key={category.category_id}
              className="bg-gray-200 text-gray-600 p-4 my-2 rounded-md flex flex-col gap-4"
            >{category.category_name}</li>)
          }
        </ul>
      </div>
      <div className="col-span-6 bg-pink-300">
        <h2 className="text-xl font-medium text-left mb-3">Dragon News Home</h2>
      </div>
      <div className="col-span-3 bg-red-100">
        <h2 className="text-xl font-medium text-left mb-3">Login With</h2>
      </div>
    </div>
  );
}
