import DOELayout from "../../layouts/DOELayout";
import { useRouter } from "next/router";
import { connect, useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchBlogsDetails } from "./Blogs/actions";

export default function BlogsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogsDetails());
  }, [dispatch]);
  const router = useRouter();
  const { blogId } = router.query;
  const { blogs } = useSelector((state) => state.blogsClasses);

  return (
    <DOELayout>
      <img
        className="background"
        src="/images/sections/background/races-classes.jpg"
      />
      <div className="blogs-container">
        <h3 className="blogs-heading">Blogs</h3>
        <div className="blog-content">
          <div>
            <h2>June DevLog | Game Development Summary</h2>
            <span className="date">06 / 10 / 2020</span>
          </div>
          <div>{blogId}</div>
          {blogs.map((item) =>
            blogId === item.bid ? (
              <div
                className="content"
                dangerouslySetInnerHTML={createMarkup(item.content)}
              />
            ) : null
          )}
        </div>
      </div>
    </DOELayout>
  );
}

const createMarkup = (data) => {
  return {
    __html: data,
  };
};
