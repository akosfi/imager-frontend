import * as React from "react";
import {FC, memo, useEffect} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import ImagesActions from "../../../redux/images/actions";
import DragAndDropInput from "./components/drag_and_drop_input/DragAndDropInput";
import ImageContainer from "./components/image_container/ImageContainer";
import LoadingSpinner from "../../common/loading_spinner/LoadingSpinner";

type StateProps = {}

type DispatchProps = {
}

type Props = {} & DispatchProps;

const HomePage: FC<Props> = ({}) => {

    return (
        <>
            <DragAndDropInput />
            <LoadingSpinner />
            <ImageContainer />
        </>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(HomePage));