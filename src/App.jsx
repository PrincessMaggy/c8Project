import './App.css';
import Button from './Components/Button';
import SearchInput from './Components/Searchinput';




function App() {
    return (
        
        <>
        
          <div className='mt-20 flex items-center justify-center'> <img src="/images/Confetti 1.png" alt="image" className=' object-contain h-64 w-96'/></div>
         <div className='mt-1 flex items-center justify-center'> <img src="/images/Emotion.png" alt="image"  className=' object-contain h-44 w-64'/></div>
           
           <div>
           <p className=" mt-1 text-lg font-extrabold  text-black ">YOU DID IT!</p>
      <p className='font-medium'> Awesome!</p>
      <p className='font-medium'> you have planned a meal in a week</p>
      </div>

           
            <Button />
            <SearchInput />
            

          
        </>
    );
}

export default App;
