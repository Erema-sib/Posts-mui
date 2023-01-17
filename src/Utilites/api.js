const onResponce = (res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}


class Api {
    constructor ({baseUrl, headers}) {
        this._headers = headers;
        this._baseUrl = baseUrl;
    }

    getPostsList () {                        // Получение списка постов
        return fetch (`${this._baseUrl}/v2/group-7/posts`, {
            headers: this._headers
        }).then(onResponce)
    }

    getUserInfo () {                        // Получение пользователя
        return fetch (`${this._baseUrl}/v2/group-7/users/me`, {
            headers: this._headers
        }).then(onResponce)
    }

    getPaginatPosts (pageNum, number) {                        // Получение страницы и количества постов
        return fetch (`${this._baseUrl}/v2/group-7/posts/paginate?page=${pageNum}&limit=${number}`, {
            headers: this._headers
        }).then(onResponce)
       
    }

    changeLikePost(postId, isLike) {        //Установка и удаление лайка
        return fetch (`${this._baseUrl}/v2/group-7/posts/likes/${postId}`, {
           method: isLike ? "DELETE" : "PUT",
           headers: this._headers
        })
        .then(onResponce)
    }
}

const config = {
    baseUrl: "https://api.react-learning.ru",
    headers: {
        "content-type": "application/json",
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZhNTEwNjU5Yjk4YjAzOGY3NzljZjkiLCJncm91cCI6Imdyb3VwLTciLCJpYXQiOjE2Njc5MTE5NDYsImV4cCI6MTY5OTQ0Nzk0Nn0.ZmPeqcgqVhjb7XkTd6HQcz2yI7qRhjd6VEIEax9EcZw"
    }

    
}

const api = new Api(config);

export default api;