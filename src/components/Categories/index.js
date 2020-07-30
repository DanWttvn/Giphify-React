import React from "react";
import { Link } from "wouter";
// import "./Category.css";

export default function Categories({ name, terms = [] }) {
  return (
    <section>
		<p>{name}</p>
		<ul>
			{terms.map(term => (
				<li
					key={term}
					// type='primary'
				>
					<Link to={`/search/${term}`}>
						{term}
					</Link>
				</li>
			))}
		</ul>
    </section>
  );
}