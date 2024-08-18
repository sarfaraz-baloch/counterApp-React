function Button({ text, value, updateResult }) {
    return (
      <div>
        <button className="btn" onClick={() => updateResult(value)}>
          {text}
        </button>
      </div>
    );
  }
  
  export default Button;
  