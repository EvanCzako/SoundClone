export const fetchUsers = () => (
    $.ajax({
        url: '/api/users',
        method: 'GET',
    })
);

export const fetchUserByEmail = (email) => (
    $.ajax({
        url: `/api/users/get_by_email?email=${email}`,
        method: 'GET'
    })
);