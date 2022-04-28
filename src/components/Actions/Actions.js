import Action from "../Action/Action";
import Display from "../Display/Display";

const Actions = () => {
  const numberToCall = "667359961";
  const calling = false;

  return (
    <div className="actions">
      <Display displayClass={"number"} text={numberToCall} />
      <Action
        link={"#"}
        actionClass={`call ${numberToCall.length === 9 ? "active" : "off"}`}
        text={"Call"}
      />
      <Action
        link={"#"}
        actionClass={`hang ${calling ? "active" : "off"}`}
        text={"Hang"}
      />
    </div>
  );
};
export default Actions;
