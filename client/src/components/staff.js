// import React, { Component } from 'react';
// import Navbar2 from './navbar2.js';
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';

 
// class Staff extends Component {
//     const sdk = new ChartsEmbedSDK({
//         baseUrl: 'https://charts.mongodb.com/charts-project-0-cmave',
//       });
//     const chart = sdk.createChart({
//         chartId: '775c5bb8-17b2-479c-840e-5e4639d7f644',
//       });
//     state = {  }
//     render() { 
//         return (
//             <div>
//                 <Navbar2 />
//                 <script>
//                 chart
//                     .render(document.getElementById('chart'))
//                     .catch(() => window.alert('Chart failed to initialise'));
//                 </script>
                
//                 <h3>This will be the Staff page!</h3>
                
//             </div>
//         );
//     }
// }
 
// export default Staff;
import React, { Component ,useContext,useState } from 'react';
import Navbar2 from './navbar2.js';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import Dashboard from './dashboard.jsx'
import '../App.css';
import axios from 'axios';
import AuthApi from '../utils/AuthApi';
import UserBooking from'./userbooking.js';
import LogoutButton from './logoutbutton.js';
import Navbar from './navbar.js';
import { authenticate, isAuth ,signout,getCookie } from '../auth/helpers';
import { useHistory } from 'react-router-dom';
import cookie from 'js-cookie';
// const sdk = new ChartsEmbedSDK({
//     baseUrl: 'https://charts.mongodb.com/charts-project-0-cmave',
//   });
// const chart = sdk.createChart({
//     chartId: '775c5bb8-17b2-479c-840e-5e4639d7f644',
//   });
export default function Staff() {
    
   
    
            
    return (
      <div>
        <Navbar2 />
            <Dashboard/>
      </div>
    );
  }