import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Cetegory = () => {
    const {id} = useParams();
    const cetegoryNews = useLoaderData()
    return (
        <div>
            { id && <h2>This Cetegory News: {cetegoryNews.length}</h2>}
            {
                cetegoryNews.map(news => <NewsCard
                key={news._id}
                news = {news}
                ></NewsCard>)
            }
        </div>
    );
};

export default Cetegory;