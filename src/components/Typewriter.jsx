import { Typewriter } from 'react-simple-typewriter';

export default function App() {
  return (
    <div className='bg-head bg-glow text-white z-10 text-4xl text-center' style={{ whiteSpace: 'pre-line' }}>
  <Typewriter
    words={['Connecting Talents\nBuilding Futures.']}
    loop={true}
    cursor
    cursorStyle="|"
    typeSpeed={50}
    deleteSpeed={50}
    delaySpeed={800}
  />
    
</div>

  );
}