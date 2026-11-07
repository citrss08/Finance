// FINANCE / FIELD NOTES
// Educational finance article collection


// 1. ARTICLES

const notes = [

{
    id: 1,
    title: "Understanding Financial Statements",
    category: "Fundamentals",
    description: "Learn how companies report their financial performance and position.",
    sections: [
        {
            heading: "What are financial statements?",
            text: "Financial statements are formal reports that communicate a company's financial activities and position. Investors, creditors and managers use them to evaluate performance and make decisions."
        },
        {
            heading: "The three main statements",
            bullets: [
                "Income Statement: Reports revenue, expenses and profit or loss.",
                "Balance Sheet: Shows assets, liabilities and shareholders' equity.",
                "Cash Flow Statement: Tracks cash entering and leaving a business."
            ]
        },
        {
            heading: "Why do they matter?",
            text: "Together, these statements help users understand whether a business is profitable, financially stable and capable of generating cash."
        }
    ],
    example: "A business may report a profit but still experience cash shortages. This is why examining all three financial statements is important."
},

{
    id: 2,
    title: "Time Value of Money",
    category: "Fundamentals",
    description: "Understand why money today can be worth more than the same amount in the future.",
    sections: [
        {
            heading: "What is the time value of money?",
            text: "The time value of money is the principle that money available today can be more valuable than the same amount received in the future, because today's money can potentially earn a return."
        },
        {
            heading: "Present value and future value",
            bullets: [
                "Present Value (PV): The value today of a future amount.",
                "Future Value (FV): The value money today may grow to.",
                "Interest Rate: The rate at which money grows or is discounted."
            ]
        },
        {
            heading: "The formula",
            text: "FV = PV × (1 + r)ⁿ. This calculates future value using compound interest for a single investment."
        }
    ],
    example: "If $1,000 earns 5% annual interest for one year, its future value is $1,050."
},

{
    id: 3,
    title: "Understanding Compound Interest",
    category: "Fundamentals",
    description: "Discover how interest accumulates on both principal and previously earned interest.",
    sections: [
        {
            heading: "What is compound interest?",
            text: "Compound interest is interest calculated on the original principal and on interest accumulated during previous periods."
        },
        {
            heading: "The formula",
            text: "A = P(1 + r/n)ⁿᵗ"
        },
        {
            heading: "Understanding the variables",
            bullets: [
                "A = Final accumulated amount.",
                "P = Initial principal.",
                "r = Annual interest rate as a decimal.",
                "n = Compounding periods per year.",
                "t = Number of years."
            ]
        }
    ],
    example: "An initial investment of $1,000 earning 5% annually for 10 years, compounded annually, grows to approximately $1,628.89 before taxes and fees."
},

{
    id: 4,
    title: "Stocks vs Bonds",
    category: "Markets",
    description: "Explore two major financial instruments and understand their differences.",
    sections: [
        {
            heading: "What are stocks?",
            text: "A stock represents ownership in a company. Shareholders may benefit from increases in share prices and dividends, although neither is guaranteed."
        },
        {
            heading: "What are bonds?",
            text: "A bond is a debt instrument. An investor lends money to an issuer, which generally promises interest payments and repayment of principal according to the bond's terms."
        },
        {
            heading: "Key differences",
            bullets: [
                "Stocks represent ownership; bonds represent lending.",
                "Stock returns can include dividends and capital gains.",
                "Bond returns can include coupon payments.",
                "Both can lose value and carry different risks."
            ]
        }
    ],
    example: "Buying shares makes you a shareholder. Buying a company's bonds makes you a creditor of that company."
},

{
    id: 5,
    title: "Introduction to Investment Banking",
    category: "Banking",
    description: "Explore how investment banks help businesses raise capital and complete transactions.",
    sections: [
        {
            heading: "What is investment banking?",
            text: "Investment banking is a financial service that supports corporations, governments and other institutions with complex financial transactions."
        },
        {
            heading: "Main activities",
            bullets: [
                "Mergers and Acquisitions (M&A): Advising businesses on buying, selling or combining companies.",
                "Equity Capital Markets (ECM): Helping companies raise money by issuing shares.",
                "Debt Capital Markets (DCM): Helping organisations raise money through debt securities.",
                "Underwriting: Supporting the issuance and distribution of securities."
            ]
        },
        {
            heading: "Why is it important?",
            text: "Investment banks connect organisations that need capital with investors who are willing to provide it. They also advise on strategic transactions."
        }
    ],
    example: "A company planning to expand internationally may hire an investment bank to advise on acquiring a competitor."
},

{
    id: 6,
    title: "Risk and Diversification",
    category: "Markets",
    description: "Understand investment risk and why spreading investments can matter.",
    sections: [
        {
            heading: "What is investment risk?",
            text: "Investment risk refers to the possibility that an investment's actual outcome differs from what was expected, including the possibility of losing capital."
        },
        {
            heading: "What is diversification?",
            text: "Diversification means spreading investments across different assets, industries or markets rather than concentrating everything in one investment."
        },
        {
            heading: "Types of risk",
            bullets: [
                "Market Risk: Losses caused by movements in financial markets.",
                "Credit Risk: The possibility that a borrower fails to repay.",
                "Liquidity Risk: The difficulty of selling an asset quickly at a reasonable price.",
                "Interest Rate Risk: The possibility that changing interest rates affect investment values."
            ]
        }
    ],
    example: "An investor holding investments across several industries may be less exposed to the problems of a single company. Diversification does not eliminate risk."
},

{
    id: 7,
    title: "Corporate Finance",
    category: "Corporate Finance",
    description: "Learn how organisations make decisions about investments and financial resources.",
    sections: [
        {
            heading: "What is corporate finance?",
            text: "Corporate finance focuses on how businesses obtain, allocate and manage financial resources to support operations and long-term objectives."
        },
        {
            heading: "Three fundamental decisions",
            bullets: [
                "Investment Decisions: Choosing which projects and assets to invest in.",
                "Financing Decisions: Choosing how to fund activities through debt, equity or other sources.",
                "Dividend Decisions: Deciding how much profit to distribute to shareholders and how much to retain."
            ]
        },
        {
            heading: "The objective",
            text: "A central objective in corporate finance is creating long-term value while considering an organisation's financial position and stakeholders."
        }
    ],
    example: "A company considering a new factory must estimate its investment cost, expected cash flows and risks before proceeding."
},

{
    id: 8,
    title: "Introduction to Company Valuation",
    category: "Corporate Finance",
    description: "Explore how analysts estimate the economic value of a company.",
    sections: [
        {
            heading: "What is company valuation?",
            text: "Company valuation is the process of estimating the economic value of a business. It is used in investment analysis, mergers and acquisitions and financial planning."
        },
        {
            heading: "Common valuation methods",
            bullets: [
                "Discounted Cash Flow (DCF): Estimates value using projected future cash flows discounted to the present.",
                "Comparable Company Analysis: Compares a business with similar publicly traded companies.",
                "Precedent Transactions: Uses valuations implied by previous comparable transactions."
            ]
        },
        {
            heading: "Why is valuation important?",
            text: "Valuation helps investors and companies assess financial opportunities, compare businesses and evaluate potential transactions."
        }
    ],
    example: "An analyst may compare a company's enterprise value to its EBITDA to assess its valuation relative to similar businesses."
}

];


// 2. FIND WEBSITE ELEMENTS

const notesGrid = document.getElementById("notes-grid");
const searchInput = document.getElementById("search-input");
const filterButtons = document.querySelectorAll(".filter-button");
const emptyMessage = document.getElementById("empty-message");
const noteCount = document.getElementById("note-count");

const dialog = document.getElementById("article-dialog");
const articleContent = document.getElementById("article-content");
const closeDialog = document.getElementById("close-dialog");

let activeCategory = "All";


// 3. DISPLAY ARTICLES

function displayNotes() {

    const searchTerm = searchInput.value.toLowerCase().trim();

    const filteredNotes = notes.filter(note => {

        const matchesCategory =
            activeCategory === "All" ||
            note.category === activeCategory;

        const searchableText = [
            note.title,
            note.category,
            note.description,
            ...note.sections.map(section => section.text || ""),
            ...note.sections.flatMap(section => section.bullets || [])
        ].join(" ").toLowerCase();

        return matchesCategory &&
               searchableText.includes(searchTerm);
    });

    notesGrid.innerHTML = filteredNotes.map(note => `

        <article class="note-card">

            <div class="card-top">
                <span class="card-category">${note.category}</span>
                <span class="card-number">
                    ${String(note.id).padStart(2, "0")}
                </span>
            </div>

            <h3>${note.title}</h3>

            <p>${note.description}</p>

            <button
                class="read-link"
                data-note-id="${note.id}"
                type="button"
            >
                READ ARTICLE →
            </button>

        </article>

    `).join("");

    noteCount.textContent =
        `${String(filteredNotes.length).padStart(2, "0")} ARTICLES`;

    emptyMessage.hidden = filteredNotes.length !== 0;
}


// 4. SEARCH FUNCTION

searchInput.addEventListener("input", displayNotes);


// 5. CATEGORY FILTERS

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        activeCategory = button.dataset.filter;

        filterButtons.forEach(filter => {
            filter.classList.remove("active");
        });

        button.classList.add("active");

        displayNotes();

    });

});


// 6. OPEN ARTICLES

function openArticle(noteId) {

    const note = notes.find(
        item => item.id === Number(noteId)
    );

    if (!note) return;

    const sectionsHTML = note.sections.map(section => {

        let content = "";

        if (section.text) {
            content += `<p>${section.text}</p>`;
        }

        if (section.bullets) {
            content += `
                <ul>
                    ${section.bullets.map(item =>
                        `<li>${item}</li>`
                    ).join("")}
                </ul>
            `;
        }

        return `
            <section class="article-section">
                <h3>${section.heading}</h3>
                ${content}
            </section>
        `;

    }).join("");

    articleContent.innerHTML = `

        <p class="article-category">${note.category}</p>

        <h1 class="article-title">${note.title}</h1>

        <p>${note.description}</p>

        ${sectionsHTML}

        <div class="article-example">
            <strong>PRACTICAL EXAMPLE</strong>
            <p>${note.example}</p>
        </div>

    `;

    dialog.showModal();
}


// 7. LISTEN FOR ARTICLE CLICKS

notesGrid.addEventListener("click", event => {

    const button = event.target.closest("[data-note-id]");

    if (!button) return;

    openArticle(button.dataset.noteId);

});


// 8. CLOSE ARTICLES

closeDialog.addEventListener("click", () => {
    dialog.close();
});

dialog.addEventListener("click", event => {

    if (event.target === dialog) {
        dialog.close();
    }

});


// 9. COPYRIGHT YEAR

document.getElementById("year").textContent =
    new Date().getFullYear();


// 10. START THE WEBSITE

displayNotes();
