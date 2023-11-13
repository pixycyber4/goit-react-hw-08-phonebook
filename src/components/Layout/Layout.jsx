import NavBar from 'components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

// import NavBar from 'components/Navbar/Navbar';
// import React from 'react';
// import { Outlet } from 'react-router-dom';

// // import styled from 'styled-components';

// const Layout = () => {
//   return (
//     <div>
//       <NavBar />
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Layout;

// const LayoutWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
// `;

// const WrapperOutlet = styled.div`
//   padding: 20px 290px;
// `;
