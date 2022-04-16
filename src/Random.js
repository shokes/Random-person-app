import { useEffect, useState } from 'react';
import {
  FaEnvelopeOpen,
  FaUser,
  FaCalendarTimes,
  FaMap,
  FaPhone,
  FaLock,
} from 'react-icons/fa';
const url = 'https://randomuser.me/api/';
const defaultImage = 'https://randomuser.me/api/portraits/women/67.jpg';

const RandomPerson = function () {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState(null);

  const getRandomPerson = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    console.log(data.results[0]);

    const {
      picture: { large: image },
    } = data.results[0];

    const newPerson = {
      image,
    };

    setPerson(newPerson);
  };

  useEffect(() => {
    getRandomPerson();
  }, []);

  return (
    <main className='container'>
      <section>
        <img
          src={(person && person.image) || defaultImage}
          alt='random image'
        />
        <p>jfjffkkfjfkfkjf</p>
      </section>
      <button>
        <FaEnvelopeOpen />
      </button>
      <button>
        <FaUser />
      </button>

      <button>
        <FaCalendarTimes />
      </button>
      <button>
        <FaCalendarTimes />
      </button>
      <button>
        <FaCalendarTimes />
      </button>
      <button>
        <FaCalendarTimes />
      </button>
      <button onClick={getRandomPerson}>Random person</button>
    </main>
  );
};

export default RandomPerson;
