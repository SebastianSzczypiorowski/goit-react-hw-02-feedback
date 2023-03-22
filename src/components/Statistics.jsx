import React, { useState } from 'react';


const Statistics = () => {

    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });
 
    const countTotalFeedback = () => {
        const  {good, neutral, bad } = feedback; 
        return good+ neutral+ bad;
    }

    const countPositiveFeedbackPercentage = () => {
        const {good} = feedback;
        const total = countTotalFeedback();
        return total === 0 ? 0 : Math.round((good / total) * 100)
    }
    return (
        <>
        <p>Good: {feedback.good}</p>
        <p>Neutral: {feedback.neutral}</p>
        <p>Bad: {feedback.bad}</p>
        <p>Total: {countTotalFeedback()}</p>
        <p>Positive Feedback: {countPositiveFeedbackPercentage()}%</p>
        </>
    );
  };

  export const useFeedback = () => {
    const [feedback, setFeedback] = useState({
      good: 0,
      neutral: 0,
      bad: 0
    });
    
    const handleFeedback = (type) => {
      setFeedback(prevState => ({ ...prevState, [type]: prevState[type] + 1 }));
    };
  
    return {
      feedback,
      handleFeedback
    };
  };



 export default Statistics 
