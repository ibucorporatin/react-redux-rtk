import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
  const { loding, users, error } = useSelector((state) => state.users);
  console.log(users)
 const dispatch= useDispatch()
useEffect(() => {
  dispatch(fetchUsers())
}, []);
  return (
    <div>
      {loding ? (
        <h1>loading...</h1>
      ) : !error ? (
        <div>
          {users.map((a,index) => {
            return <h5 key={index} >{a.name}</h5>;
          })}{" "}
        </div>
      ) : (
        <h1>{error}</h1>
      )}
      {/* {users&&users.map((a)=><h1>{a}</h1>)} */}
    </div>
  );
};

export default UserView;
