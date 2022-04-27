const Key = ({ buttonClass, text, action }) => {
  return (
    <li>
      <button className={buttonClass} onClick={action}>
        {text}
      </button>
    </li>
  );
};
export default Key;
