const searchUsers = async (key, value) => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await fetch(`${apiUrl}users/filter?key=${key}&value=${value}`);

    if (response.ok) {
        const result = await response.json();
        return result;
    } else {
        throw new Error('Ошибка при выполнении запроса');
    }
};

export default searchUsers;