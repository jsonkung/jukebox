import React from "react";
import { useParams } from "react-router-dom";

const Room = () => {
    let { id } = useParams();
    return (
        <div>Welcome to Room { id }</div>
    );
};

export default Room;