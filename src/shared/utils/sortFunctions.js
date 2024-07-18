// Сортировка по алфавиту (возрастание)
export const alphabetIncreasingSort = (data) => {
    return [...data].sort((a, b) => a.firstName.localeCompare(b.firstName));
}

// Сортировка по алфавиту (убывание)
export const alphabetDescendingSort = (data) => {
    return [...data].sort((a, b) => b.firstName.localeCompare(a.firstName));
}

// Сортировка по возрасту (возрастание)
export const increasingSort = (data) => {
    return [...data].sort((a, b) => a.age - b.age);
}

// Сортировка по возрасту (убывание)
export const descendingSort = (data) => {
    return [...data].sort((a, b) => b.age - a.age);
}

// Вывод всех мужчин
export const filterByGenderMale  = (data) => {
    return [...data].filter((user) => user.gender === "male");
}

// Вывод всех женщин
export const filterByGenderFemale = (data) => {
    return [...data].filter((user) => user.gender === "female");
}