import React from 'react';

const loading = () => {
    return (
        <div className='flex justify-center items-center h-[85vh]'>
            <h2>Global Loading...</h2>
            <span className="loading loading-dots loading-xl"></span>
        </div>
    );
};

export default loading;