import * as React from "react";
import {FC, memo, useEffect} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import ImagesActions from "../../../redux/images/actions";
import DragAndDropInput from "./components/drag_and_drop_input/DragAndDropInput";
import SnackBar, {SnackBarIconType, SnackBarType} from "../../common/snackbar/SnackBar";

type StateProps = {}

type DispatchProps = {
    fetchImages: typeof ImagesActions.fetchImages
}

type Props = {} & DispatchProps;

const HomePage: FC<Props> = ({fetchImages}) => {
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    return <><DragAndDropInput /></>
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    fetchImages: ImagesActions.fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(HomePage));