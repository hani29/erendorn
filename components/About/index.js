import { connect, useDispatch, useSelector } from "react-redux";

const About = ({ children }) => {
    const dispatch = useDispatch()

  const aboutClasses = useSelector((state) => state.aboutClasses)

    return <>
        { aboutClasses.details != undefined &&
        <div className="about-inner-container" dangerouslySetInnerHTML={createMarkup(aboutClasses.details.about)}/>}
    </>
};

export default About;

const createMarkup = (data) => {
    return {
      __html: data,
    };
  };