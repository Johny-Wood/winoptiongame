import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getUser from "../../api/handlers/getUser";
import { setUser } from "../../store/slices/userSlice";
import UserProfileBtn from "./UserProfileBtn";

const UserProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const requestUser = (async () => {
      const response = await getUser();

      dispatch(setUser(response));
    })();
  }, []);

  return (
    <>
      <UserProfileBtn />
    </>
  );
};

export default UserProfile;
