export const increasingSort = (data) => {
    return [...data].sort((a, b) => a.age - b.age);
}

export const descendingSort = (data) => {
    return [...data].sort((a, b) => b.age - a.age);
}

export const filterByGenderMale  = (data) => {
    return [...data].filter((user) => user.gender === "male")
}

export const filterByGenderFemale = (data) => {
    return [...data].filter((user) => user.gender === "female")
}