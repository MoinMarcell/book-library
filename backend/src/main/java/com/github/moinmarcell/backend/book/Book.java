package com.github.moinmarcell.backend.book;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@AllArgsConstructor
@Data
@Builder
@Document(collection = "books")
public class Book {

	private String id;
	private String isbn;
	private String title;
	private Author author;
	private String cover;
	private String opener;

}
