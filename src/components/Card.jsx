import React from "react";
import { useWeather } from "../context";

const Card = () => {
    const {data} = useWeather();
    return (
        <div className="card">
            <img src={data?.current?.condition?.icon} />
            <h2>{data?.current?.temp_c}. C </h2>
            <h5>{data?.location?.name}, {data?.location?.country}</h5>
        </div>
    )
}

export default Card;