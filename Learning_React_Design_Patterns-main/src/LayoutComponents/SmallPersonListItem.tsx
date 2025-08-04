interface Person {
    name: string;
    age: number;
}

interface SmallPersonListItemProps {
    person: Person;
}



export const SmallPersonListItem = ({ person }: SmallPersonListItemProps) => {
    if (!person) return null;
	const { name, age } = person;

	return (
		<p>Name: {name}, Age: {age} years</p>
	);
}