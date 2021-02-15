const ControlBar = ({ children, selected = false, style = {}, onClick, disabled }) => {
    return <>
        <div
            onClick={!disabled ? onClick : null}
            className={`control-bar ${selected ? 'selected' : ''}`}
            style={style} />
    </>
};

export const ControlBarContainer = ({ children, style = {} }) => {
    return <>
        <div
            className="control-bar-container"
            style={style}>
            {
                children
            }
        </div>
    </>
}

export default ControlBar;