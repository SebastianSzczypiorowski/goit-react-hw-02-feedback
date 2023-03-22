

import { useFeedback } from './Statistics';

const Feedback = () => {
  const { feedback, handleFeedback } = useFeedback();

  const handleClick = (type) => {
    handleFeedback(type);
  };

  return (
    <>
      <button onClick={() => {handleClick("good")}}>Good</button>
      <button onClick={() => {handleClick("neutral")}}>Neutral</button>
      <button onClick={() => {handleClick("bad")}}>Bad</button>
    </>
  );
};

export default Feedback;
