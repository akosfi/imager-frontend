import * as React from "react";
import {FC, memo, useEffect} from "react";
import {StoreState} from "../../../../../redux/rootReducer";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import ImagesActions from "../../../../../redux/images/actions";
import {Image} from "../../../../../redux/types";
import {getImages} from "../../../../../redux/images/selectors";
import ImageContainerItem from "../image_container_item/ImageContainerItem";
import useWindowResize from "../../../../../utils/hooks/useWindowResize";

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

    const renderImagesForColumn = (columnIndex: number, numberOfColumns: number) => {
        const filteredArray: Image[] = [];

        for(let i = columnIndex; i < images.length; i=i+numberOfColumns) {
            filteredArray.push(images[i]);
        }

        return filteredArray.map(({url}) => <ImageContainerItem url={url} />)
    }

    const renderImageGridColumn = (columnIndex: number, numberOfColumns: number) =>
        <div className={css["column"]}>
            {renderImagesForColumn(columnIndex, numberOfColumns)}
        </div>

    const renderImageGridColumns = () => {
        const screenWidth = window.screen.width;

        if(screenWidth >= 992) {
            return (
                <>
                    {renderImageGridColumn(0, 3)}
                    {renderImageGridColumn(1, 3)}
                    {renderImageGridColumn(2, 3)}
                </>
            );
        }
        if(screenWidth >= 768) {
            return (
                <>
                    {renderImageGridColumn(0, 2)}
                    {renderImageGridColumn(1, 2)}
                </>
            );
        }

        return (
            <>
                {renderImageGridColumn(0, 1)}
            </>
        );


    }

    return (
        <div className={css["ImageContainer"]}>
            <div className={css["inner"]}>
                {renderImageGridColumns()}
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