import * as React from "react";
import {FC, memo, useEffect} from "react";
import {StoreState} from "../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import ImagesActions from "../../../redux/images/actions";

type StateProps = {}

type DispatchProps = {
    fetchImages: typeof ImagesActions.fetchImages
}

type Props = {} & DispatchProps;

const HomePage: FC<Props> = ({fetchImages}) => {
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);

    return <span>hey!</span>
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({

});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    fetchImages: ImagesActions.fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(HomePage));