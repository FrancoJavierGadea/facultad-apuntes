
function ArrowHead({ id = 'arrow', ...others }) {
    return (<defs>
        <marker
            id={id}
            viewBox="0 0 10 10"
            refX="10"
            refY="5"
            markerUnits="strokeWidth"
            markerWidth="10"
            markerHeight="10"
            orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" {...others} />
        </marker>
    </defs>);
}

export default ArrowHead;