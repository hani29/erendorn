import { useDispatch, useSelector } from 'react-redux'
import {useEffect} from 'react';  

import DevelopmentTimeline from '../../components/DevelopmentTimeline';
import { fetchTimelineDetails } from './actions'

const Index = ({ children }) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTimelineDetails())
    }, [dispatch])


    return <>
        <DevelopmentTimeline />
    </>
};

export default Index;