import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from 'react';
import MyExercise from '../../components/MyExercise/MyExercise';
import MyDiary from '../../components/MyDiary/MyDiary';
import Categories from './Categories/Categories';
import BodyRecord from './BodyRecord/BodyRecord';

const MyRecord = () => {
  useEffect(() => {
    AOS.init({
            duration: 2000,
        });
        AOS.refresh();
    }, []);
    return (
        <>
          <Categories /> 
          <BodyRecord />
          <MyExercise />
          <MyDiary />
        </>
    );
};

export default MyRecord;