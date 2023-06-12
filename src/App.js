import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Members from './pages/Members';
import SongList from './pages/SongList';
import Header from './components/Header';
import Player from './pages/Player';
import PlayerIndex from './pages/PlayerIndex';

function App() {
  // 멤버 정보
  const [members] = useState([
    { name: 'Maggie Adams', photo: 'photos/Mag.png' },
    { name: 'Sammie Purcell', photo: 'photos/Sam.png' },
    { name: 'Tim Purcell', photo: 'photos/Tim.png' },
    { name: 'Scott King', photo: 'photos/King.png' },
    { name: 'Johnny Pike', photo: 'photos/JPike.jpg' },
    { name: 'Toby Ruckert', photo: 'photos/Toby.jpg' },
  ]);

  // 노래 정보
  const [songs] = useState([
    { id: 1, title: "Fallin' for you", musician: 'Colbie callet', youtube_link: 'PABUl_EX_hw' },
    { id: 2, title: "Can't hurry love", musician: 'The supremes', youtube_link: 'EJDPhjQft04' },
    { id: 3, title: 'Landslide', musician: 'Dixie chicks', youtube_link: 'V2N7gYom9-A' },
    { id: 4, title: "Can't let go", musician: 'Linda ronstadt', youtube_link: 'P-EpGKXmoe4' },
    { id: 5, title: 'Doctor my eyes', musician: 'Jackson Browne', youtube_link: '7JlFKS_1oZk' },
    { id: 6, title: 'We gotta get you a woman', musician: 'Todd Rundgren', youtube_link: 'EyUjbBViAGE' },
    { id: 7, title: 'Hip to my heart', musician: 'Band Perry', youtube_link: 'vpLCFnD9LFo' },
    { id: 8, title: 'Rolling in the deep', musician: 'Adele', youtube_link: 'EvK8pDK6IQU' },
  ]);

  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About title="인디밴드" />} />
          <Route path="/members" element={<Members members={members} />} />
          {/* nested Route */}
          <Route path="/songs" element={<SongList songs={songs} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
