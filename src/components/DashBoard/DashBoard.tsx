import React, { useEffect } from 'react';
import SideBar from './SideBar';
import Content from './Content';

import { getUserInformation } from '../store/Users.js';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';

export default function DashBoard() {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.Users.userInformation);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userData) => {
      if (userData) {
        if (!userInfo) {
          dispatch(
            getUserInformation({
              uid: userData.uid,
            })
          );
        }
      } else {
        navigate('/login');
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch, navigate, userInfo]);

  useEffect(() => {}, [userInfo]);

  return (
    <section className="flex flex-col md:flex w-screen h-screen">
      <div className=" w-screen mx-auto md:w-64 md:mr-[10%]">
        <SideBar userInfo={userInfo ? userInfo : null} />
      </div>
      <div className="w-screen md:flex-grow md:ml-[10%]">
        <Content uid={userInfo ? userInfo.userIdentifer : null} />
      </div>
    </section>
  );
}
