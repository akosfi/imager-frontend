import * as React from "react";
import {FC, memo, useEffect} from "react";
import {StoreState} from "../../../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import ImagesActions from "../../../../../redux/images/actions";
import {Image} from "../../../../../redux/types";
import {getImages} from "../../../../../redux/images/selectors";
import ImageContainerItem from "../image_container_item/ImageContainerItem";

const css = require("./ImageContainer.module.scss");

type StateProps = {
    images: Image[]
}

type DispatchProps = {
    fetchImages: typeof ImagesActions.fetchImages
}

type Props = StateProps & DispatchProps;

const ImageContainer: FC<Props> = ({fetchImages, images}) => {
    useEffect(() => {
        fetchImages();
    }, [fetchImages]);


    const numberOfColumns = 3;

    const renderImagesForColumn = (columnIndex: number) => {
        const filteredArray: Image[] = [];

        for(let i = columnIndex; i < images.length; i=i+numberOfColumns) {
            filteredArray.push(images[i]);
        }

        return filteredArray.map(({url}) => <ImageContainerItem url={url} />)
    }

    return (
        <div className={css["ImageContainer"]}>
            <div className={css["column"]}>
                {renderImagesForColumn(0)}
            </div>

            <div className={css["column"]}>
                {renderImagesForColumn(1)}
            </div>

            <div className={css["column"]}>
                {renderImagesForColumn(2)}
            </div>

        </div>
    );
}

const mapStateToProps: MapStateToProps<StateProps, {}, StoreState> = state => ({
    images: getImages(state)
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = {
    fetchImages: ImagesActions.fetchImages
};

export default connect(mapStateToProps, mapDispatchToProps)(memo(ImageContainer));