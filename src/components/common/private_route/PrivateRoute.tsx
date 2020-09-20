import * as React from "react";
import {FC, memo} from "react";
import {Redirect, Route} from "react-router";

type OwnProps = {
    path: string;
    redirectPath: string;
    exact: boolean;
    children: any;
    guard: boolean;
}


type Props = OwnProps;

const PrivateRoute: FC<Props> = ({path, exact, children, guard,redirectPath}) =>
    <Route path={path} exact={exact} >{
        guard ? children : <Redirect to={redirectPath} />
    }</Route>;

export default memo(PrivateRoute);