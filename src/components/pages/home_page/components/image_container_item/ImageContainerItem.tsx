import * as React from "react";
import {FC, memo} from "react";
import {StoreState} from "../../../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";

const css = require("./Header.mod.scss");

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const ImageContainerItem: FC<Props> = () => {

    return (
        <div>
            <div>ImageContainer</div>
            <div>
            </div>
        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ImageContainerItem));