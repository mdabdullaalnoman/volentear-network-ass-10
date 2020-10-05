// import React, { useContext } from 'react';
// import { Redirect, Route } from 'react-router-dom';
// import { UserContext } from '../../App';

// import React , { useContext } from "react";
// import { Redirect, Route } from "react-router-dom";
// import { UserContext } from "../../App";

// const PrivateRoute = ({ children, ...rest }) => {
//     const [loggedInUser , setLoggedInUser] = useContext(UserContext);
//     return (
//         <Route
//             {...rest}
//             render={({ location }) =>
//                 loggedInUser.email ? (
//                     children
//                 ) : (
//                         <Redirect
//                             to={{
//                                 pathname: "/loogin",
//                                 state: { from: location }
//                             }}
//                         />
//                     )
//             }
//         />
//     );
// };

// export default PrivateRoute;

import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser , setLoggedInUser ] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/loogin",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;