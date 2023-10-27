import {Book} from "./Book.ts";
import {Box} from "@mui/material";
import BookCard from "./BookCard.tsx";

type BookGalleryProps = {
    books: Book[];
}

export default function BookGallery(props: BookGalleryProps) {
    return (
        <Box component="main" sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "flex-start",
            width: "100%",
            height: "100vh",
            gap: "1rem",
        }}>
            {props.books.map((book) => (
                <BookCard key={book.id} book={book}/>
            ))}
        </Box>
    );
}