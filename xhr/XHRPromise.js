class XHRPromise {
    get(url) {
        return this.makeRequest('GET', url);
    }

    post(url, body) {
        return this.makeRequest('POST', url, body);
    }

    makeRequest(method, url, body) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open(method, url);
            xhr.send(body ? JSON.stringify(body) : undefined);

            xhr.addEventListener('load', () => {
                const data = JSON.parse(xhr.response);
                resolve(data);
            });

            xhr.addEventListener('error', error => {
                reject(error);
            });
        });
    }
}

const myXHRPromise = new XHRPromise();

// Promise
//     .all([myXHRPromise.get('comments.json'), myXHRPromise.get('repliesAll.json')])
//     .then(response => {
//         const [dataComments, dataReplies] = response;
//         return dataComments.comments.map(comment =>
//             Object.assign(comment, {
//                 replies: dataReplies.replies.filter(reply => reply.commentId === comment.id)
//             }));
//     })
//     .then(comments => addComments(comments));

(async () => {
    const [dataComments, dataReplies] = await Promise
        .all([myXHRPromise.get('comments.json'), myXHRPromise.get('repliesAll.json')]);

    const commentsWithReplies = dataComments.comments.map(
        comment => Object.assign(comment, {
            replies: dataReplies.replies.filter(reply => reply.commentId === comment.id)
        }));

    addComments(commentsWithReplies);
})();