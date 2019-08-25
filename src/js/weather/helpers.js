const urlWithParams = (url, params) => {
    let urlFetch = new URL(url);

    Object.keys(params).forEach(key =>
        urlFetch.searchParams.append(key, params[key])
    );

    return urlFetch;
};


export {
    urlWithParams,
};