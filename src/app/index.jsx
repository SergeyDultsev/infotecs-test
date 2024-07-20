import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/UserPage/HomePage.jsx';
import { SearchResultPage } from "@/pages/UserPage/SearchResultPage.jsx";

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search-result" element={<SearchResultPage />} />
            </Routes>
        </div>
    );
}

export default App
