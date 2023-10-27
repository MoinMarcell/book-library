import './App.css'
import BookGallery from "./book/BookGallery.tsx";
import {Book} from "./book/Book.ts";

function App() {
    const books: Book[] = [
        {
            id: "1",
            isbn: "978-3-16-148410-0",
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg",
            opener: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
        },
        {
            id: "2",
            isbn: "978-3-16-148410-1",
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
            opener: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        },
        {
            id: "3",
            isbn: "978-3-16-148410-2",
            title: "The Silmarillion",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Silmarillion_1977.jpg",
            opener: "The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.",
        },
        {
            id: "1",
            isbn: "978-3-16-148410-0",
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg",
            opener: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
        },
        {
            id: "2",
            isbn: "978-3-16-148410-1",
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
            opener: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        },
        {
            id: "3",
            isbn: "978-3-16-148410-2",
            title: "The Silmarillion",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Silmarillion_1977.jpg",
            opener: "The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.",
        },
        {
            id: "1",
            isbn: "978-3-16-148410-0",
            title: "The Lord of the Rings",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Lord_of_the_Rings_The_Fellowship_of_the_Ring_%282001%29_theatrical_poster.jpg",
            opener: "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work.",
        },
        {
            id: "2",
            isbn: "978-3-16-148410-1",
            title: "The Hobbit",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/30/Hobbit_cover.JPG",
            opener: "The Hobbit, or There and Back Again is a children's fantasy novel by English author J. R. R. Tolkien. It was published on 21 September 1937 to wide critical acclaim, being nominated for the Carnegie Medal and awarded a prize from the New York Herald Tribune for best juvenile fiction.",
        },
        {
            id: "3",
            isbn: "978-3-16-148410-2",
            title: "The Silmarillion",
            author: {
                firstName: "J.R.R.",
                lastName: "Tolkien",
            },
            cover: "https://upload.wikimedia.org/wikipedia/en/3/3d/The_Silmarillion_1977.jpg",
            opener: "The Silmarillion is a collection of mythopoeic works by English writer J. R. R. Tolkien, edited and published posthumously by his son, Christopher Tolkien, in 1977, with assistance from Guy Gavriel Kay.",
        },
    ];


    return (
        <BookGallery books={books}/>
    )
}

export default App
