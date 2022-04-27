import buttons from "../../data/buttons";
import Key from "../Key/Key";

const Keyboard = () => {
  return (
    <div class="keyboard-container">
      <ol class="keyboard">
        {buttons.map((button) => {
          return <Key buttonClass={button.class} text={button.text} />;
        })}
      </ol>
    </div>
  );
};
export default Keyboard;
