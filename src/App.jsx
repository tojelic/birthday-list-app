import { useState } from 'react';
import Person from './components/Person';
import people from './data';
const App = () => {
  const [peopleState, setPeopleState] = useState(people);
  return (
    <main>
      <section className="container">
        <h3>{peopleState.length} birthdays today</h3>

        <ul>
          {peopleState.map((item) => (
            <Person key={item.id} {...item}></Person>
          ))}
        </ul>
        <button className="btn" onClick={() => setPeopleState([])}>
          Clear users
        </button>
      </section>
    </main>
  );
};
export default App;
