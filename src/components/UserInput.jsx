import InputGroup from "./InputGroup";

export default function UserInput({ handleChange }) {
  return (
    <section id="user-input">
      <InputGroup titles={["Initial Investment", "Annual Investment"]} handleChange={handleChange}/>
      <InputGroup titles={["Expects Return", "Duration"]} handleChange={handleChange}/>
    </section>
  );
}

