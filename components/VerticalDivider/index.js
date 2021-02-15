const VerticalDivider = ({ children }) => {
    return <>
        <div className="vertical-divider-container">
            <img src="/images/vertical-divider/top.png" />

            {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((item, index) => <img key={index} src="/images/vertical-divider/mid.png" />)}

            <img src="/images/vertical-divider/bottom.png" />
        </div>
    </>
};

export default VerticalDivider;