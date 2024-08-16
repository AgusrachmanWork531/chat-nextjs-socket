import React from "react";

interface LineProps {
    width: string;
    height: string;
    backgroundColor: string;
    margin: string;
}


const Line: React.FC<LineProps> = (props) => {
    return (
        <div style={{ width: props.width, height: props.height, backgroundColor: props.backgroundColor, margin: props.margin }}>
        </div>
    )
}

export default Line;