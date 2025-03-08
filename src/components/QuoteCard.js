import React, {useEffect, useState} from "react";
import "../styles/main.css";

const QuoteCard = () => {
    const [quote, setQuote] = useState({ text: "", author: "" });

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        const response = await fetch("https://api.quotable.io/random");
        const data = await response.json();
        setQuote({ text: data.content, author: data.author });
    };

    return (
        <React.Fragment>
            <div className="quote-card">
                <p className="quote-text">"{quote.text}"</p>
                <p className="quote-author">- {quote.author}</p>
            </div>

            <button className="refresh-button" onClick={fetchQuote}>
                refresh
            </button>
        </React.Fragment>
    );
};

export default QuoteCard;