import { useEffect, useState } from "react";

const Profile = (props) => {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("This is Interval message");
    }, 1000);

    return () => {
      clearInterval(timer);
    }

  }, []);

  return (
    <div className="profile">
      <h2>Profile Functional Component</h2>
      <h3>Name: {props.name}</h3>
      <h4>Count: {count}</h4>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default Profile;