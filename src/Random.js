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
  const [value, setValue] = useState('random person');
  const getRandomPerson = async () => {
    setLoading(true);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    console.log(data.results[0]);

    const {
      picture: { large: image },
    } = data.results[0];
    const { cell } = data.results[0];
    const { email } = data.results[0];
    const {
      name: { first, last },
    } = data.results[0];
    const {
      login: { password },
    } = data.results[0];

    const {
      dob: { age },
    } = data.results[0];

    const {
      location: {
        street: { name, number },
      },
    } = data.results[0];

    const newPerson = {
      image,
      cell,
      email,
      first,
      last,
      password,
      age,
      name: `${first} ${last}`,
      street: `${number} ${name}`,
    };
    //  console.log(newPerson);
    setLoading(false);
    setPerson(newPerson);
    setValue('random person');
  };

  useEffect(() => {
    getRandomPerson();
  }, []);

  const buttonHandler = (e) => {
    if (e.target.classList.contains('icon')) {
      const newValue = e.target.dataset.label;
      setValue(person[newValue]);
    }
  };

  return (
    <main className='container'>
      <section>
        <img
          src={(person && person.image) || defaultImage}
          alt='random image'
        />
        <p className='value'>{value}</p>
      </section>
      <div className='icon-flex'>
        <button
          className='icon'
          onMouseEnter={buttonHandler}
          data-label='email'
        >
          <FaEnvelopeOpen />
        </button>
        <button className='icon' onMouseEnter={buttonHandler} data-label='name'>
          <FaUser />
        </button>

        <button className='icon' onMouseEnter={buttonHandler} data-label='age'>
          <FaCalendarTimes />
        </button>
        <button
          className='icon'
          onMouseEnter={buttonHandler}
          data-label='street'
        >
          <FaMap />
        </button>
        <button className='icon' onMouseEnter={buttonHandler} data-label='cell'>
          <FaPhone />
        </button>
        <button
          className='icon'
          onMouseEnter={buttonHandler}
          data-label='password'
        >
          <FaLock />
        </button>
      </div>

      <button onClick={getRandomPerson} className='btn'>
        {loading ? 'loading..' : ' Random person'}
      </button>
    </main>
  );
};

export default RandomPerson;
