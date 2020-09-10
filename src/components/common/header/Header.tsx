import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";

const css = require("./Header.mod.scss");

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const Header: FC<Props> = () => {

    return (
        <div className={css["Header"]}>
            <div>Logo</div>
            <div>
                asd
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(Header));