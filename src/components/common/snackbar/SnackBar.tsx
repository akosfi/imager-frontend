import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import classNames from "classnames";

const css = require("./SnackBar.module.scss");

export enum SnackBarIconType  {
    INITIAL
}

export enum SnackBarType  {
    ERROR="error",
    WARNING="warning",
    SUCCESS="success"
}

type StateProps = {}

type DispatchProps = {
}

type OwnProps = {
    title: string;
    icon?: SnackBarIconType;
    type: SnackBarType;
}

type Props = StateProps & DispatchProps & OwnProps;

const SnackBar: FC<Props> = ({title, icon, type}) => {

    return (
        <div className={classNames(css["SnackBar"], css[type])}>
            <div className={css["inner"]}>
                <span className={css["title"]}>{title}</span>
                <span className={css["icon"]}>{icon}</span>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(SnackBar));