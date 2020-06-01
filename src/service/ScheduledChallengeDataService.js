import React, { Component } from 'react';
import axios from 'axios'
//const INSTRUCTOR = 'in28minutes'
var apiBaseUrl = "http://192.168.1.103:8083";

class ScheduledChallengeDataService {

    getScheduledQuestionByUserId(userId) {

        // return axios.get(`${apiBaseUrl}/schQuesByUid/${userId}`,
        return axios.get(`http://localhost:8083/schQuesByUid/${userId}`,
            {
                headers: {
                    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
                },
                crossdomain: true
            }
        );
    }

    submitScheduledQuestionResultsByUserId(objQuesResultSet) {

        console.log("submitScheduledQuestionResultsByUserId submitted : ", objQuesResultSet);
        //return axios.post(`http://localhost:8083/addObjRes`, objQuesResultSet);
        return axios.post(`http://localhost:8083/addObjResList`, objQuesResultSet ,{
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            crossdomain: true
        });
    }


    submitScheduledSubQuestionResultsByUserId(subQuesResultSet) {

        console.log("submitScheduledSubQuestionResultsByUserId submitted : ", subQuesResultSet);
        //return axios.post(`http://localhost:8083/addObjRes`, objQuesResultSet);
        return axios.post(`http://localhost:8083/addSubjRes`, subQuesResultSet, {
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            crossdomain: true
        });
    }

    
    submitScheduledSubQuestionResultsListByUserId(subQuesResultSet) {

        console.log("submitScheduledSubQuestionResultsListByUserId submitted : ", subQuesResultSet);
        return axios.post(`http://localhost:8083/addSubQResList`, subQuesResultSet,{
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            crossdomain: true
        });
    }
    runScheduledQuestionTestCases(validateProgramContent)  {

        console.log("runScheduledQuestionTestCases submitted : ", validateProgramContent);
        return axios.post(`http://localhost:8082/validateSubjQues`, validateProgramContent,{
            headers: {
                'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
            },
            crossdomain: true
        });
    }

    getScheduledQuestionByCandidateId(candidateId) {

        // return axios.get(`${apiBaseUrl}/schQuesByUid/${userId}`,
        return axios.get(`http://localhost:8083/schQuesByCandidate/${candidateId}`,
            {
                headers: {
                    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
                },
                crossdomain: true
            }
        );
    }

    updateChallengeStatus(candidateId) {

        // return axios.get(`${apiBaseUrl}/updateChallengeStatus/${userId}`,
        return axios.put(`http://localhost:8083/updateChallengeStatus/${candidateId}`,
            {
                headers: {
                    'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'
                },
                crossdomain: true
            }
        );
    }

}

export default new ScheduledChallengeDataService()