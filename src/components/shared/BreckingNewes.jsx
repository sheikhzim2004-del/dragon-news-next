import React from 'react';
import Marquee from 'react-fast-marquee';


const newses = [
    { id: 1, title: "Space Exploration Advances with New Moon Mission." },
    { id: 2, title: "Healthcare Innovations Improve Patient Care Systems" },
    { id: 3, title: "Tech Giants Invest Billions in AI Development" },
    { id: 4, title: "New Cybersecurity Threats Raise Global Concerns" }
]

const BreckingNewes = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200 py-4 px-2 container mx-auto rounded-md gap-2'>
            <button className='btn bg-purple-600 text-white'>Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                {
                    newses.map(n => {
                        return <span key={n.id}>{n.title}</span>
                    })
                }
            </Marquee>
        </div>
    );
};

export default BreckingNewes;