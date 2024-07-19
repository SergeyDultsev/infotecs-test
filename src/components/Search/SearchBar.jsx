import {useState} from "react";
import {InputApp} from "@/components/ui/Input/InputApp.jsx";
import {ButtonApp} from "@/components/ui/Button/ButtonApp.jsx";
import SearchBarStyle from './SearchBar.module.scss';

export function SearchBar({ onSearch }) {
    const [key, setKey] = useState("");
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (key && query !== null) {
            onSearch(key, query);
        }
    }

    return (
        <div className={SearchBarStyle.searchBar}>
            <InputApp
                value={key}
                onChange={(event) => setKey(event.target.value)}
                type="text"
                placeholder="Ключ поиска (например, age)"
            />
            <InputApp
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                placeholder="Значение поиска (например, 20)"
            />
            <ButtonApp onClick={handleSearch} text={"Поиск"} />
        </div>
    );
}