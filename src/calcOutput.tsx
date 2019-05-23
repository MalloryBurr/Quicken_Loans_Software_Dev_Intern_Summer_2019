import * as React from 'react';

interface ICalcOutputProps {
    calc: number;
}

const CalcOutput = (props: ICalcOutputProps) => {
    return <p>{props.calc}</p>;
}

export default CalcOutput;