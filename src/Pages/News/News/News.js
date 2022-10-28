import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const news = useLoaderData();
    // console.log(news);
    useTitle('News Details')
    const { title, image_url, details, category_id
    } = news;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News about this Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default News;