import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import Button from "../button/Button";

const css = require("./Header.module.scss");

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const Header: FC<Props> = () => {

    return (
        <div className={css["Header"]}>
            <div className={css["logo"]}>
                <span className={css["text"]}>IMAGERRR</span>
            </div>
            <div className={css["button-container"]}>
                <Button title={"Sign In"} />
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));