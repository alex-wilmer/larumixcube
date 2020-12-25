import { useState } from 'react'
import { ReactComponent as Cube } from './cube.svg';

function App() {
  let [showTL, setShowTL] = useState(false)
  return (
    <div className="App">
      <Cube />
      <h2>
        <a href={process.env.PUBLIC_URL + '/larumix_cube.mp3'}>
          larumix_cube.mp3</a>
      </h2>

      {!showTL &&
        // eslint-disable-next-line
        <a href="#" onClick={() => setShowTL(true)}>show tracklist (spoilers!)</a>}
      <br />
      {showTL &&
        <>
          <div>Noclu - Trythistrythat</div>
          <div>Sharks - Opal</div>
          <div>Virtual Riot - Dream Logic</div>
          <div>Feed Me - Coffee Black</div>
          <div>PhaseOne ft. Koven - Lost</div>
          <div>Flux Pavilion & Feed Me ft. meesh - Survive</div>
          <div>Gentlemens Club ft. Paige Eliza - Ocean Drive</div>
          <div>Skope - Hoops</div>
          <div>iPhone Ringtone (Jaydon Lewis Trap Remix)</div>
          <div>Animal Crossing Theme</div>
          <div>Dossa & Locuzzed - Get Nasty</div>
          <div>QUIX ft. Nevve - Gunning For You</div>
          <div>GRiZ & Blunts & Blondes - Juicy</div>
          <div>Doctor P, Lizzo - Sweet Shop (Shlump Remix) + Juice Mashup</div>
          <div>Zeds Dead & Slushii - Drifting</div>
          <div>Doctor P - Wpn't Let Go</div>
          <div>Excision & Wooli & HALIENE - Erase You</div>
          <div>Flux Pavilion ft. Drowsy - Sink Your Teeth In</div>
          <div>LSDREAM - ACE OF CUPS</div>
          <div>Rome In Silver, Pharrell Williams - Get Lost + Happy Mashup</div>
          <div>Metrik ft ShockOne - Dying Light</div>
          <div>ShockOne - Follow Me</div>
          <div>Stonebank ft. EMEL - Be Alright (Au5 Remix)</div>
        </>}
    </div>

  );
}

export default App;
