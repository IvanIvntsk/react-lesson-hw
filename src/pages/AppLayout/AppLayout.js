import React from 'react';
import CarsPage from "../CarsPage/CarsPage";
import CommentsPage from "../CommentsPage/CommentsPage";
import PostsPage from "../PostsPage/PostsPage";

const AppLayout = () => {
    return (
        <div>
            <CarsPage/>
            <CommentsPage/>
            <PostsPage/>
        </div>
    );
};

export default AppLayout;