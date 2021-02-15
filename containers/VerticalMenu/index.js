import { useEffect } from 'react'
import { useRouter } from 'next/router';
import {
    useDispatch,
    useSelector
} from 'react-redux'

import VerticalMenu from '../../components/VerticalMenu';

import { fetchVerticalMenuItems, verticalMenuItemSelected } from './actions'


const Index = () => {
    const dispatch = useDispatch()
    const router = useRouter();

    useEffect(() => {
        dispatch(fetchVerticalMenuItems())
    }, [dispatch])

    const verticalMenu = useSelector((state) => state.verticalMenu);
    const { menuItems } = verticalMenu;

    return <VerticalMenu
        items={menuItems}
        onItemClicked={({ id, href }) => {
            router.push(href);
            dispatch(verticalMenuItemSelected(id))
        }}
    />
};


export default Index;