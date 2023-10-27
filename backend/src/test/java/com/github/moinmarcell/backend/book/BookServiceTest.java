package com.github.moinmarcell.backend.book;

import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class BookServiceTest {

	private final BookRepository bookRepository = mock(BookRepository.class);
	private final BookService bookService = new BookService(bookRepository);

	@Test
	void getAllBooks_whenNoBooksInDb_thenReturnEmptyList() {
		// GIVEN
		List<Book> expected = List.of();

		// WHEN
		when(bookRepository.findAll()).thenReturn(expected);
		List<Book> actual = bookService.getAllBooks();

		// THEN
		verify(bookRepository).findAll();
		assertEquals(expected, actual);
	}

	@Test
	void getAllBooks_whenBooksInDb_thenReturnListOfBooks() {
		// GIVEN
		List<Book> expected = List.of(
				new Book("1", "isbn", "title", Author.builder().firstName("Firstname").lastName("Lastname").build(), "cover", "opener"),
				new Book("2", "isbn2", "title2", Author.builder().firstName("Firstname2").lastName("Lastname2").build(), "cover2", "opener2")
		);

		// WHEN
		when(bookRepository.findAll()).thenReturn(expected);
		List<Book> actual = bookService.getAllBooks();

		// THEN
		verify(bookRepository).findAll();
		assertEquals(expected, actual);
	}
}