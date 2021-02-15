import {useDispatch, useSelector} from 'react-redux'
import {useEffect} from 'react';
import RacesClasses from '../../components/RacesClasses';
import ControlArrow from '../../components/ControlArrow';
import ControlBar, { ControlBarContainer } from '../../components/ControlBar';

import { updateRacesClassesPosition, updateRacesClassesStep } from './actions'

import {
    leftArrowClicked,
    rightArrowClicked,
    controlBarClicked,
} from '../../helpers/utils'
import { fetchRacesDetails } from './actions'

const Index = ({ children }) => {
    const dispatch = useDispatch();
    const { racesClassesPosition } = useSelector((state) => state.racesClasses);

    useEffect(() => {
        dispatch(fetchRacesDetails())
    }, [dispatch])

    return <>
        <RacesClasses />
        <div>
            <ControlArrow
                onClick={() => {
                    leftArrowClicked('.races-classes-list-container', 341);
                    if(racesClassesPosition > 0)
                        dispatch(updateRacesClassesStep(-1))

                }}
                style={{ top: '60%' }}
                direction={'left'} />
            <ControlArrow
                onClick={() => {
                    rightArrowClicked('.races-classes-list-container', 341);
                    if(racesClassesPosition < 6)
                        dispatch(updateRacesClassesStep(1))
                }}
                style={{ top: '60%' }}
                direction={'right'} />
        </div>
        <ControlBarContainer>
            <ControlBar
                onClick={() => {
                    controlBarClicked(
                        0,
                        '.races-classes-list-container',
                        341,
                        3);
                    dispatch(updateRacesClassesPosition(0))
                }}
                disabled={(racesClassesPosition) < 3}
                selected={(racesClassesPosition) < 3} />
            <ControlBar
                onClick={() => {
                    controlBarClicked(
                        1,
                        '.races-classes-list-container',
                        341,
                        3);
                    dispatch(updateRacesClassesPosition(3))
                }}
                disabled={(racesClassesPosition) >= 3 && (racesClassesPosition) < 6}
                selected={(racesClassesPosition) >= 3 && (racesClassesPosition) < 6}/>
            <ControlBar
                onClick={() => {
                    controlBarClicked(
                        2,
                        '.races-classes-list-container',
                        341,
                        3);
                    dispatch(updateRacesClassesPosition(6))
                }}
                disabled={(racesClassesPosition) >= 6 && (racesClassesPosition) < 9}
                selected={(racesClassesPosition) >= 6 && (racesClassesPosition) < 9}/>
        </ControlBarContainer>
    </>
};

export default Index