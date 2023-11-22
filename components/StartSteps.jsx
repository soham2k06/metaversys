import styles from "../styles";

function StartSteps({ number, text }) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-gray-700`}>
        <p className="font-bold text-xl text-white">0{number}</p>
      </div>
      <p className="flex-1 ml-8 font-normal text-lg leading-8 text-gray-300">
        {text}
      </p>
    </div>
  );
}

export default StartSteps;
