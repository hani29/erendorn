import ControlArrow from "../../components/ControlArrow";
import { useDispatch, useSelector } from "react-redux";
import { fetchAudioDetails } from "./actions";
import { useEffect } from "react";

const togglePlay = () => {
  var myAudio = document.getElementById("myAudio");

  myAudio.paused ? myAudio.play() : myAudio.pause(); myAudio.currentTime = 0;
};

const playAudio = (event) => {
  const video = event.currentTarget.querySelector('audio')
  if(video) video.play()
}

const pauseAudio = (event) => {
  const video = event.currentTarget.querySelector('audio')
  if(video) {
      video.pause()
      video.currentTime = 0
  }
}

const AudioSection = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAudioDetails());
  }, [dispatch]);

  return (
    <>
      <div className="audio-section-container">
        <h2>Audio</h2>
        <div className="audio-section-content">
          <Item />
        </div>
        <ControlArrow
          style={{ zIndex: 5, left: -130, bottom: "20%" }}
          direction={"left"}
        />
        <ControlArrow
          style={{ zIndex: 5, right: -130, bottom: "20%" }}
          direction={"right"}
        />
      </div>
    </>
  );
};

const Item = () => {
  const { audio } = useSelector((state) => state.audioClasses);

  return (
    <>
      {audio != undefined &&
        audio.map((item) => (
          <div className="audio-section-item-container">
            <div className="frame"
            onMouseOver={playAudio}
            onMouseOut={pauseAudio}>
              <audio controls id="myAudio"  style={{display: 'none'}}>
                <source src={item.url} type="audio/mp3" />
              </audio>
              <div></div>
              <img
                className="source"
                src="/images/media/audio-bg.png"
              />
              <img
                    className="floss"
                    src='/images/media/floss.png' />
                <img
                    className="control"
                    src='/images/media/play-button.png'  />
            </div>
            <div className="text-bg">
              <div >
                <h4>Track so & so</h4>
                <h3>MP3/320 KBPS</h3>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default AudioSection;
