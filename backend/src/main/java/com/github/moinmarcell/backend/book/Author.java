package com.github.moinmarcell.backend.book;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@AllArgsConstructor
@Data
@Builder
public class Author {

	private String firstName;
	private String lastName;

}
