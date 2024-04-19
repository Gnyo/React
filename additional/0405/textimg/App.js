import './App.css';
import FPhotoText from './FPhotoText';

function App() {
  return (
    <div>
      <FPhotoText image="desktop" label = "Desktop" />
      <FPhotoText image="notebook" label = "NoteBook" />
      <FPhotoText image="pad" label = "Pad" />
    </div>
  );
}

export default App;