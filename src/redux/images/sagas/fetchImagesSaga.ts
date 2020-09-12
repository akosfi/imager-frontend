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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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
        url: "https://lh3.googleusercontent.com/proxy/nzDZi6o7Ico8ac90f6-coNuNQ7g_LuYobWI3oSzfiblXjmRGFraf7v3_C_xRtrr2UcXIP9RxV-WZwd3rDIVA_GIQod0-CBBgm2IIVnOtYd830gaIm-hN2RVHhHRmG3EqhFbQdGALtvvM0-xQAw",
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