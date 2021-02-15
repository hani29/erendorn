const Button = ({ children, onClick }) => {
    return <>
        <div
            onClick={onClick}
            className="button-container">
            <span>
                {children}
            </span>
        </div>
    </>
};

export default Button;