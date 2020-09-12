import {Image} from "../../types";
import {call, put} from "redux-saga/effects";
import uploaderApi from "../../../config/uploaderApi";
import ImagesActions from "../actions";

const mockImages: Image[] = [
    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },

    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },

    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },

    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },

    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },

    {
        url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    },
    {
        url: "https://images.squarespace-cdn.com/content/v1/53cfc1dce4b01ee22a512a92/1450151098815-NJNUMTPFUQ0NJVJSXY3B/ke17ZwdGBToddI8pDm48kJoYEb5S8OhMLjKh6plxP457gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmQPoRzxSr1hzN-vPBHt7YyNobfn3lQW19A4S7jdttn8pGGlHiDaNzPkNjwUfhD5bM/image-asset.jpeg",
        createdAt: new Date().toString()
    },
    {
        url: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180522150455/lake-baikal-summer-1024x683.jpg",
        createdAt: new Date().toString()
    }
]

const mockGetImages = () => new Promise((resolve => resolve(mockImages)));


function* fetchImagesSaga() {
    //const images: Image[] = yield call(uploaderApi.get, '/get');
    const images: Image[] = yield call(mockGetImages);
    yield put(ImagesActions.loadImages(images));
}

export default fetchImagesSaga;