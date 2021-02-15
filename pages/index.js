import { useEffect } from 'react';
import { useRouter } from 'next/router'
import {
    useDispatch,
    useSelector
} from 'react-redux'

import DOELayout from '../layouts/DOELayout'
import About from '../sections/About';
import RacesClasses from '../sections/RacesClasses';
import DevelopmentTimeline from '../sections/DevelopmentTimeline';
import Media from '../sections/Media';
import Footer from '../components/Footer';

import { getNextHash, getPreviousHash, getCurrentHash } from '../helpers/utils'
import { verticalMenuItemSelected } from '../containers/VerticalMenu/actions'
import VerticalMenu from "../containers/VerticalMenu";

const Index = () => {
    const router = useRouter();
    const dispatch = useDispatch()

    useEffect(() => {
        const { id } = getCurrentHash(window.location.hash)
        if(id) dispatch(verticalMenuItemSelected(id))

        let scrollStarted = false;
        const arrowController = (event) => {
            const currentHash = window.location.hash;
            if (event.code === 'ArrowDown') {
                const { href, id } = getNextHash(currentHash);
                router.push(href)
                if(id) dispatch(verticalMenuItemSelected(id))
            } else if (event.code === 'ArrowUp') {
                const { href, id } = getPreviousHash(currentHash);
                router.push(href)
                if(id) dispatch(verticalMenuItemSelected(id))
            }
        };

        const scrollController = (event) => {
            if(!scrollStarted) {
                const currentHash = window.location.hash;
                if (event.deltaY > 0) {
                    const { href, id } = getNextHash(currentHash);
                    router.push(href)
                    if(id) dispatch(verticalMenuItemSelected(id))
                } else if (event.deltaY < 0) {
                    const { href, id } = getPreviousHash(currentHash);
                    router.push(href)
                    if(id) dispatch(verticalMenuItemSelected(id))
                }
            }
            clearTimeout(scrollStarted);
            scrollStarted = setTimeout(() => {
                scrollStarted = false;
            }, 100);
        };
        window.addEventListener('wheel', scrollController, false);
        document.onkeydown = arrowController;

        document.body.style.overflow = 'hidden'

        return function cleanup() {
            window.removeEventListener('wheel', scrollController, false);
            document.onkeydown = null;
            document.body.style.overflow = 'scroll'
        }
    });
  return (
    <DOELayout>
        <About />
        <RacesClasses />
        <DevelopmentTimeline />
        <Media />
        <Footer />
        <VerticalMenu />
    </DOELayout>
  )
};

export default Index;
