const axios = require('axios')
const generalRequest = domine => resource =>{
    const url = `${domine}/${resource}`;

    return ({
        create: (data) => axios.post(url, data).then(x => x.data),
        get: ()=> axios.get(url).then(x => x.data),
        put: ()=> axios.put(url).then(x => x.data),
        path: ()=> axios.patch(url).then(x => x.data),
        delete: ()=> axios.delete(url).then(x => x.data)
    })
};

const Base = generalRequest("https://my-json-server.typicode.com/typicode/demo/");
const getAll = Base("posts");
getAll.get().then(x => console.log(x));
const getOne = Base("posts/1");
getOne.get().then(x => console.log(x));