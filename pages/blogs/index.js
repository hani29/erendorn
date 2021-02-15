import { useRouter } from 'next/router';
import _ from 'lodash';
import { connect, useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from 'react';  
import {fetchBlogsDetails} from './Blogs/actions'


import DOELayout from '../../layouts/DOELayout';

const BlogsPage = () => {
    const dispatch = useDispatch()

    const router = useRouter();

    useEffect(() => {
        dispatch(fetchBlogsDetails())
    }, [dispatch])


    const {blogs} = useSelector((state) => state.blogsClasses)

    return (
        <DOELayout>
            <img className="background" src="/images/sections/background/races-classes.jpg" />
            <div className="blogs-container">
                <h3 className="blogs-heading">Blogs</h3>
                <div className="blogs-list">
                   {blogs.map((item)=> <BlogItem item={item} onClick={() => { router.push(`/blogs/${item.id}`) }} />)}
                </div>
            </div>
        </DOELayout>
    )
}


const BlogItem = ({ onClick, item }) => {
    return (<div
        className="blog-item"
        onClick={onClick}>
        <BlogItemDivider
            length={57} />
        <h2>{item.title}</h2>
        <div className="sub-head">
            <span className="date">{item.date}</span>
            <span className="content-type">Development Log</span>
        </div>
        <div className="content">
            <div className="image">
                <img src="/images/media/audio-bg.png" />
                <img className="frame" src="/images/blogs/thumbnail.png"/>
            </div>
            <div className="text" dangerouslySetInnerHTML={createMarkup(item.synopsis)}>
            </div>
        </div>
    </div>)
}

const createMarkup = (data) => {
    return {
        __html: data
    }
}

const BlogItemDivider = ({ length = 20 }) => {
    return <>
        <div className="blog-item-divider">
            <img src='/images/blogs/divider/left.png' />
            {
                _.range(0, length).map(number => <img src='/images/blogs/divider/tile.png' />)
            }
            <img src='/images/blogs/divider/middle.png' />
            {
                _.range(0, length).map(number => <img src='/images/blogs/divider/tile.png' />)
            }
            <img src='/images/blogs/divider/right.png' />
        </div>
    </>
}


export default BlogsPage;