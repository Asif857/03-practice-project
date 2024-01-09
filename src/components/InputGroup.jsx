export default function InputGroup({ titles, handleChange }) {
  return (
    <div className="input-group">
      {titles.map((title) => {
        return (
          <p>
            <div>
              <label>{title}</label>
              <input type="number" onChange={(event) => handleChange(event,title)} required></input>
            </div>
          </p>
        );
      })}
    </div>
  );
}
