import Link from 'next/link';
import React from 'react';

const LeftSideBar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="text-xl font-medium text-left mb-3">All Categories</h2>
      <ul>
        {
          categories.news_category.map(category => <li
            key={category.category_id}
            className={`${activeId === category.category_id && "bg-slate-200 border border-green-600"}  font-medium text-gray-600 my-2 rounded-md flex flex-col gap-4 items-start cursor-pointer hover:bg-gray-100`}
          >
            <Link 
            href={`/category/${category.category_id}`}
            className='w-full p-4'>
            {category.category_name}</Link>
          </li>)
        }
      </ul>
    </div>
  );
};

export default LeftSideBar;