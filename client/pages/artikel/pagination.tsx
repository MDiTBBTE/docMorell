import React, { useState, useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";


 const Pagination = () => {

    const [localArticles, setLocalArticles] = useState(null);
    const [page, setPage] = useState(0);
    const { articles, } = useTypedSelector(
        (state) => state.article
    );

    const chunkArray = (arr, size) =>
        arr.length > size
            ? [arr.slice(0, size), ...chunkArray(arr.slice(size), size)]
            : [arr];


    useEffect(() => {
        articles && setLocalArticles(chunkArray(articles, 1));
    }, [articles]);

    <div style={{ display: "flex", flexDirection: "column" }}>
        {localArticles && localArticles[page].map((e) => e.text)}
        <div style={{ margin: "30px" }}>
            {[0, 1, 2].map((e) => (
                <span
                    style={{
                        padding: "10px",
                        cursor: "pointer",
                        backgroundColor: page === e ? "#ccc" : "#fff",
                    }}
                    onClick={() => setPage(e)}
                >
                    {e}
                </span>
            ))}
        </div>
    </div>
};
    export default Pagination;

