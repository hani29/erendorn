import { useDispatch } from 'react-redux'
import {useEffect} from 'react';  
import Media from '../../components/Media';
import { fetchImages, fetchVideos } from './actions'

const Index = ({ children }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchImages())
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchVideos())
    }, [dispatch])

    return <Media />
};

export default Index;