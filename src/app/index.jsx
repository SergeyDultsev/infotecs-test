import { Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage.jsx';
import { SearchResultPage } from "@/pages/SearchResultPage.jsx";

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
