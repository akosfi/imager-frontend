import * as React from "react";
import {FC, memo} from "react";
import {map} from "lodash";
import DragAndDropInput from "./components/drag_and_drop_input/DragAndDropInput";
import ImageContainer from "./components/image_container/ImageContainer";
import {connect, MapStateToProps} from "react-redux";
import {StoreState} from "../../../redux/rootReducer";
import {getUploadErrors} from "../../../redux/images/selectors";
import SnackBar, {SnackBarType} from "../../common/snackbar/SnackBar";

const css = require('./HomePage.module.scss');

type StateProps = {
    errors: string[];
}

type Props = StateProps;

const HomePage: FC<Props> = ({errors}) => {

    const renderUploadErrors = () => (
        <section className={css["error-wrapper"]}>
            {errors.map(error => <SnackBar title={error} type={SnackBarType.ERROR} />)}
        </section>
    );

    return (
        <section className={css["HomePage"]}>
            <DragAndDropInput />
            {renderUploadErrors()}
            <ImageContainer />
        </section>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    errors: getUploadErrors(state)
});


export default connect(mapStateToProps)(memo(HomePage));