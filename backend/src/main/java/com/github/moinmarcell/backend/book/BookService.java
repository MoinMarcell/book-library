package com.github.moinmarcell.backend.book;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class BookService {

	private final BookRepository bookRepository;

	List<Book> getAllBooks() {
		return bookRepository.findAll();
	}

}
