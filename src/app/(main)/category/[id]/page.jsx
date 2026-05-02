import LeftSideBar from '@/components/news/LeftSideBar';
import NewsCard from '@/components/news/NewsCard';
import RightSideBar from '@/components/news/RightSideBar';
import { getCategories, getNewsByCategoriesId } from '@/lib/data';
import React from 'react';





const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    console.log(id, "paramsRes")

    const categories = await getCategories();
    console.log(categories);

    const news = await getNewsByCategoriesId(id);
    console.log(news, "newsby categories by id")


    return (
        <div className="text-xl font-medium grid grid-cols-12 gap-2 container mx-auto text-center">
            <div className="col-span-3">
                <LeftSideBar categories={categories} activeId={id}></LeftSideBar>
            </div>
            <div className="col-span-6">
                <h2 className="text-xl font-medium text-left mb-3">Dragon News By Category</h2>
                <div className="space-y-4 font-normal">
                    {
                        news.length > 0 ? news.map(n => {
                            return <NewsCard 
                            key={n._id} 
                            news={n}
                            ></NewsCard>
                        })
                        :
                        <h2 className='font-bold text-4xl my-7 text-center'>No News Found!</h2>
                    }
                </div>

            </div>
            <div className="col-span-3">
                <RightSideBar></RightSideBar>
            </div>
        </div>
    );
};

export default NewsCategoryPage;