const ControlArrow = ({ children, direction = 'left', onClick, style = {} }) => {
    return <>
        <div onClick={onClick} className={`control-arrow ${direction}`} style={style} />
    </>
};

export default ControlArrow;