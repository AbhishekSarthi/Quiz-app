import React, { useEffect, useState } from 'react';
import axios from 'axios';
import name from './name';
// import { findOneAndRemove } from '../../../backend/models/db';

const Statistics = () => {
    // let optionA = 0;
    // let optionB = 0;
    // let optionC = 0;
    // let optionD = 0;

    const [gp, setGp] = useState([]);
    const [score, setScore] = useState([]);
    const [consistency, setConsistency] = useState([]);
    const [siteConsistency, setSiteConsistency] = useState([]);
    const [deviance, setDeviance] = useState([]);
    const [siteDeviance, setSiteDeviance] = useState([]);
    const [rank, setRank] = useState([]);
    useEffect(() => {
        const getData = async () => {
            const data = await axios.get('/details/user');
            // name.answer = answer;
            // console.log(data.data);
            // console.log(name);
            data.data.forEach((d) => {
                if (
                    d.username === name.username &&
                    d.password === name.password
                ) {
                    name._id = d._id;
                    // console.log(name._id);
                }
            });
            // console.log('nam', name);
            const rawData = await axios.get(`/details/user/${name._id}`);
            // const finalData = data.data[data.data.length - 1];
            const newData = rawData.data;
            // console.log(newData);
            setGp(newData.gameplayed);
            setScore(newData.score);
            setConsistency(newData.consistency);
            setSiteConsistency(newData.siteConsistency);
            setDeviance(newData.deviance);
            setSiteDeviance(newData.siteDeviance);
            setRank(newData.rank);
            // data.forEach((d) => {
            //     // console.log(d.answer);
            //     if (d.answer === 'A') optionA++;
            //     if (d.answer === 'B') optionB++;
            //     if (d.answer === 'C') optionC++;
            //     if (d.answer === 'D') optionD++;
            // });
            // console.log(optionA, optionB, optionC, optionD);
            // console.log(finalData);
            // setGp(finalData.gameplayed);
            // setScore(finalData.score);
            // setConsistency(finalData.consistency);
            // setSiteConsistency(finalData.siteConsistency);
            // setDeviance(finalData.deviance);
            // setSiteDeviance(finalData.siteDeviance);
            // setRank(finalData.rank);
        };
        getData();
    });
    return (
        <div className="mb-2 mt-2">
            <div className="statistics">
                <h2 className="text-left">Statistics</h2>
                <ul className="list-group text-left">
                    <li>1.Games played:{gp}</li>
                    <li>2. Total Score: {score}</li>
                    <li>3. Consistency averge: {consistency}</li>
                    <li>4. Site consistency average: {siteConsistency}</li>
                    <li>5. Deviance average: {deviance}</li>
                    <li>6. Site Deviance average:{siteDeviance}</li>
                    <li>7. Ranking - {rank} </li>
                </ul>
            </div>
        </div>
    );
};

export default Statistics;
