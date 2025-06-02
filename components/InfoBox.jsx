const InfoBox = ({
  children,
  heading,
  backGroundColor = "bg-gray-100",
  textColor = "text-hray-800",
  buttonInfo,
}) => {
  return (
    <div className={`${backGroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor}btext-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor}mt-2 mb-4`}>{children}</p>
      <a
        href={buttonInfo.link}
        className={`${buttonInfo.backGroundColor} inline-block text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {buttonInfo.text}
      </a>
    </div>
  );
};

export default InfoBox;
