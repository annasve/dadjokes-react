import './style.css';
import { useState, useEffect } from 'react';

import { Joke } from '../../components/Joke';

export const HomePage = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch('http://localhost:4000/api/jokes');
      const data = await response.json();
      setJokes(data.result);
    };
    fetchJokes();
  }, []);

  return (
    <div className="container">
      {jokes.map(({ id, avatar, name, text, likes, dislikes }) => {
        return (
          <Joke
            key={id}
            userAvatar={avatar}
            userName={name}
            text={text}
            likes={likes}
            dislikes={dislikes}
          />
        );
      })}
    </div>
  );
};
