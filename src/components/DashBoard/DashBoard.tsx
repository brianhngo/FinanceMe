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
    <section className="flex w-screen h-screen">
      <div className="w-64">
        <SideBar userInfo={userInfo ? userInfo : null} />
      </div>
      <div className="flex-grow">
        <Content uid={userInfo ? userInfo.userIdentifer : null} />
      </div>
    </section>
  );
}
