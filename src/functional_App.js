import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
  const profiles = [
    {name: "Tanaka", age: 10},
    {name: "Satou", age: 5},
    {name: "Takahashi", age: 1}
  ];
  return (
      <div>
        {
          profiles.map((profile, i) => <User name={profile.name} age={profile.age} key={i}/>)
        }
      </div>
  )
};

const User = (props) => {
  return (
      <div>My name is {props.name} and {props.age} years old</div>
  );
};

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
};

// User.defaultProps = {
//   age: 1
// };

export default App;
