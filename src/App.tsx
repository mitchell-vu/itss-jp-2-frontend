import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './components/Layouts/Layout';
import {
  HomePage,
  ListTeacherPage,
  LoginPage,
  SearchPage,
  SignUpPage,
  StudentInfo,
  TeacherHomePage,
  TutorApprovalPage,
  TutorInfo,
  UserManagementPage,
} from './pages';

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

          <Route path="teachers">
            <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<TutorInfo />} />
            <Route path="home" element={<TeacherHomePage />} />
          </Route>

          <Route path="students">
            <Route path=":student_id/:status" element={<StudentInfo />} />
            <Route path=":student_id/list-teacher" element={<ListTeacherPage />} />
          </Route>

          <Route path="administration">
            <Route path="" element={<Navigate to="./user" replace />} />
            <Route path="user" element={<UserManagementPage />} />
            <Route path="teacher/:id" element={<TutorApprovalPage />} />
          </Route>

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
