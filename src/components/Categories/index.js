import React from "react";
import { CategoryLink, CategoryList, CategoryListItem, CategoryTitle } from "./styles.js"

export default function Categories({ name, terms = [] }) {
  return (
    <section>
		<CategoryTitle>{name}</CategoryTitle>
		<CategoryList>
			{terms.map((term, i) => (
				<CategoryListItem
					key={term}
					index={i}
				>
					<CategoryLink to={`/search/${term}`}>
						{term}
					</CategoryLink>
				</CategoryListItem>
			))}
		</CategoryList>
    </section>
  );
}