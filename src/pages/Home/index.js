import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from './styles'

const Home = () => {

  const [showGame, setShowGame] = useState(false);

  function handleShowGame() {
    setShowGame(true);
  }

  return(
    <Container>
      <button onClick={handleShowGame}>Zora Santos</button>
      <button onClick={handleShowGame}>Caio Ian</button>

      { showGame ?
        <div>
          <Button as={Link} to="/perfil">LOL</Button>
          <button>TFT</button>
        </div>
      : ''}

    </Container>
  );
}

export default Home;