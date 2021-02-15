import Link from "next/link";

const VerticalMenuItem = ({ index, id, active, name, href, onClick }) => {
    return (<div
        onClick={() => onClick({ id, href })}
        className="vertical-menu-cell"
        style={{ top: ((index + 1) * 56) - 16 }}>
        <a href={href}>{ name }</a>
        <img
            src={`/images/vertical-menu/${active ? 'cell-active.png' : 'cell.png'}`}/>
    </div>)
};

export default VerticalMenuItem;