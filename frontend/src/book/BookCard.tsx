import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import {Book} from "./Book.ts";

type BookCardProps = {
    book: Book;
}

export default function BookCard(props: BookCardProps) {

    const maxCharacters: number = 200;
    const opener: string = props.book.opener;

    let openerText: string = opener;

    if (opener.length > maxCharacters) {
        const lastSpaceIndex: number = opener.lastIndexOf(" ", maxCharacters);

        if (lastSpaceIndex !== -1) {
            openerText = opener.substring(0, lastSpaceIndex) + " ...";
        } else {
            openerText = opener.substring(0, maxCharacters) + " ...";
        }
    }

    return (
        <Card sx={{maxWidth: 345, maxHeight: 300}} className="book-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={props.book.cover}
                    alt={props.book.title + " cover"}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {openerText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}