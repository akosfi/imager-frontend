const getImageUrl = (url: string) => `${process.env.REACT_APP_SERVER_URL}/${url}`;

export default getImageUrl;