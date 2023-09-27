
import './App.css';
import Testimony from './components/Testimony';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <h1 > Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony 
        name='Emma Bostian'
        country='Sweden'
        images='emma'
        positions='Software Engineer'
        company='Spotify'
        comments=' I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamps course was the one which stuck. 
        Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'/>

      
        <Testimony 
        name='Sarah Chima'
        country='Nigeria'
        images='sarah'
        positions='Software Engineer'
        company='ChatDesk'
        comments=' freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum 
        took my coding knowledge from a total beginner level to a very confident level. It was everything 
        I needed to land my first dev job at an amazing company' />

<Testimony 
        name='Shawn Wang'
        country='Singapore'
        images='shawn'
        positions='Software Engineer'
        company='Amazon'
        comments='It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life. '
         />


      </div>

    </div>
  );
}

export default App;
