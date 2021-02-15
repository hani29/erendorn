import RacesClassesItem, { RacesClassesItemContainer } from '../RacesClassesItem';
import VerticalDivider from '../VerticalDivider';
import { useSelector } from "react-redux";

const RacesClasses = ({ children }) => {

    const {race} = useSelector((state) => state.racesClasses)
  
    return <>
        <div className="races-classes-list-container">
            {race !==undefined &&
                race.map((race, index) => (
                    <RacesClassesItemContainer key={index}>
                        <RacesClassesItem {...race} />
                        {
                            (index !== race.length - 1) ? <VerticalDivider /> : null
                        }
                    </RacesClassesItemContainer>
                ))
            }
        </div>
    </>
};

export default RacesClasses;