import Section from './Section';
import Statistics from './Statistics';
import Feedback from './FeedbackOptions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Section title="Please leave feedback">
        <Feedback />
      </Section>
      <Section title="Statistics">
        <Statistics />
      </Section>
    </div>
  );
};
