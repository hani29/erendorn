import { useDispatch, useSelector } from 'react-redux'

import Component from '../../components/Component';

const Index = ({ children }) => {
    const dispatch = useDispatch()
    return <Component />
};

export default Index;