import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/layout/Layout';
import { HomePage, ListTeacherPage, LoginPage, SearchPage, SignUpPage } from './pages';
import StudentInfo from './pages/StudentInfo/StudentInfo';
import TeacherHomePage from './pages/TeacherHomePage/TeacherHomePage';
import TutorInfo from './pages/TutorInformation/TutorInfo';

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="tutorInfo/:id" element={<TutorInfo />} />
          <Route path="list-teacher" element={<ListTeacherPage />} />
          <Route path="search-teacher" element={<SearchPage />} />
          <Route path="teacher-homepage" element={<TeacherHomePage />} />
          <Route path="student-info/:student_id/:status" element={<StudentInfo />} />

          <Route path="auth">
            <Route path="login" element={<LoginPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
          </Route>
        </Route>
      </Routes>

      <ToastContainer
        theme="colored"
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        draggable
        pauseOnHover
        closeOnClick
      />
    </>
  );
};

export default App;
