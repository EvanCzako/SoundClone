export const fetchComments = () => (
    $.ajax({
        url: '/api/comments',
        method: 'GET'
    })
);

export const fetchComment = (commentId) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'GET'
    })
);

export const createComment = (comment) => (
    $.ajax({
        url: `/api/comments/`,
        method: 'POST',
        data: { comment: comment }
    })
);

// export const updateComment = (comment) => (
//     $.ajax({
//         url: `/api/comments/${comment.id}`,
//         method: 'PATCH',
//         data: { comment: {body: comment[body]},
//                 trackId: comment[trackId],
//                 author_id: comment[author_id]}
//     })
// );

export const deleteComment = (commentId) => (
    $.ajax({
        url: `/api/comments/${commentId}`,
        method: 'DELETE'
    })
);