import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';  
import Blogs from '..';
import { fetchBlogsDetails } from './actions'

const Index = ({ children }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchBlogsDetails())
    }, [dispatch])


    return <Blogs />
};

export default Index;
