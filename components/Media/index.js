import MediaSection from '../../containers/MediaSection';
import VerticalDivider from '../VerticalDivider';
import AudioSection from "../../containers/AudioSection";
import { useSelector } from "react-redux";

const Media = ({ children }) => {
    
    const imageClasses = useSelector((state) => state.imageClasses)

    return <>
        <div className="media-inner-container">
            <MediaSection
                title={'Screenshots'}
                mediaType={'image'}
                items={imageClasses.src}
            />
            <VerticalDivider />
            <MediaSection
                title={'Artworks'}
                mediaType={'video'}
                items={imageClasses.source}
            />
        </div>
        <AudioSection />
    </>
};

export default Media;