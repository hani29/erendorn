import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';  
import About from '../../components/About';
import { fetchAboutDetails } from './actions'

const Index = ({ children }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchAboutDetails())
    }, [dispatch])


    return <About />
};

export default Index;
