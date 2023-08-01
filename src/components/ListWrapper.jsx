export default function ListWrapper({ setListVariant }) {
  const inputOptions = document.querySelectorAll(`input[name="option"]`);

  inputOptions.forEach((input) => {
    input.addEventListener("click", () => {
      setListVariant(input.value);
    });
  });

  return (
    <div className="py-2 h-fit w-fit">
      <div
        className="radio w-full rounded-xl flex overflow-hidden links-regular p-2"
        role="radiogroup"
        aria-labelledby="option-select"
        id="option-select"
        style={{
          backgroundColor: "#121829b5",
          backdropFilter: "blur(8px)",
        }}
      >
        <input
          label="Trending"
          type="radio"
          id="trending"
          name="option"
          value="trending"
          defaultChecked="true"
          className="w-fit py-2 px-8 rounded-lg"
        />
        <input
          label="Top Rated"
          type="radio"
          id="top-rated"
          name="option"
          value="top-rated"
          className="w-fit py-2 px-8 rounded-lg"
        />
        <input
          label="Upcoming"
          type="radio"
          id="ppcoming"
          name="option"
          value="upcoming"
          className="w-fit py-2 px-8 rounded-lg"
        />
      </div>
    </div>
  );
}
