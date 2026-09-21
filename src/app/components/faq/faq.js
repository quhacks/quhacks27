import FaqQuestion from './FaqQuestion/faqQuestion';
import styles from './component.module.css';

const questions = [
  ['What is a hackathon?', 'A hackathon is an event where you build a project from scratch, on your own or with a team. It could be a game, website, app, robot, or something else entirely. There are also workshops and chances to meet other students!'],
  ['Who can attend?', 'Any current middle or high school student can participate, regardless of experience. If you’ve graduated and want to volunteer or mentor, email info@quhacks.tech.'],
  ['Do I need to know how to code?', 'Nope! You can learn at workshops, ask for help, and try building your first project. Beginners are welcome.'],
  ['How much does it cost?', 'Nothing! QuHacks is free to attend, thanks to our sponsors.'],
  ['When and where is it?', 'QuHacks 2027 is our 10th anniversary event. We’ll announce the date, venue, and registration details here and on Discord when they’re confirmed.'],
  ['What if I don’t have a team?', 'You can come on your own and meet teammates at the event, or work solo. Teams can have up to four people.'],
  ['What should I bring?', 'A laptop or another device you can code on, its charger, and any materials you need for your project. We’ll share a full list before the event.'],
  ['Can I use a project I’ve already started?', 'Please start your project at QuHacks so everyone gets the same amount of time to build. You’re welcome to think of ideas beforehand.'],
  ['Who’s the duck?', 'That’s Freddy! He’s our mascot, rubber-duck debugging buddy, and this year’s resident jungle explorer.'],
  ['I have another question!', 'Send us a message on Discord or email info@quhacks.tech. We’re happy to help.'],
];

export default function Faq() {
  return (
    <div className={styles.sectionContainer}>
      <h2>FAQ</h2>
      <div className={styles.questions}>
        {questions.map(([question, answer]) => (
          <FaqQuestion key={question} question={question} answer={answer} />
        ))}
      </div>
    </div>
  );
}
