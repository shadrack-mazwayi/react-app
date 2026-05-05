import CountButton from './count-button';

{/* Define a React component/function with props/arguments */ }

{/*
function Header(header) {
return <h1>{header.title}</h1>;
}
*/}

function Header({ title }) {
    return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage() {

    {/* Define an array of names to be rendered in the component */ }
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

    return (
        <div>
            {/* Nesting the Header component */}
            <Header title="Develop. Preview. Ship." />

            {/* Render the list of names using map function to create list items */}
            <ul>
                {names.map(name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>

            {/* Button to increment the count state variable,
                The button is imported from count-button.jsx */}
            <CountButton />

        </div>
    );
}