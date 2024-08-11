const FormattedDate = ({ timestamp }) => {
  const date = new Date(timestamp);

  const formattedDate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <span>
      {formattedDate} {formattedTime}
    </span>
  );
};

export default FormattedDate