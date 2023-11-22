import styles from "../styles";

function NewFeatures({ imgUrl, title, subtitle }) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div className={`${styles.flexCenter} w-16 h-16 rounded-3xl bg-gray-300`}>
        <img src={imgUrl} alt="icon" className="w-1/2 h-1/2 object-contain" />
      </div>
      <h1 className="mt-6 font-bold text-2xl text-white">Title {title}</h1>
      <p className="flex-1 mt-4 font-normal text-lg text-gray-400">
        {subtitle}
      </p>
    </div>
  );
}

export default NewFeatures;
