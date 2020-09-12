import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import Button from "../button/Button";
import {Link} from "react-router-dom";

const css = require("./Header.module.scss");

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const Header: FC<Props> = () => {

    return (
        <div className={css["Header"]}>
            <div className={css["logo"]}>
                <Link to={"/"}>
                    <span className={css["text"]}>IMAGERRR</span>
                </Link>
            </div>
            <div className={css["button-container"]}>
                <Link to={"/sign-in"}>
                    <Button title={"Sign In"} />
                </Link>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));