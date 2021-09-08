export const fetchUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET',
    })
);

export const fetchUser = (email) => (
    $.ajax({
        url: `/api/users/${email}`,
        method: 'GET'
    })
);