export default function ListWrapper({ setListVariant, setHeaderTitle }) {
  const inputOptions = document.querySelectorAll(`input[name="option"]`);

  inputOptions.forEach((input) => {
    input.addEventListener("click", () => {
      setListVariant(input.id);
      setHeaderTitle(input.value);
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
          label="Popular"
          type="radio"
          id="popular"
          name="option"
          value="Popular"
          defaultChecked="true"
          className="w-fit py-2 px-8 rounded-lg"
        />
        <input
          label="Top Rated"
          type="radio"
          id="top_rated"
          name="option"
          value="Top Rated"
          className="w-fit py-2 px-8 rounded-lg"
        />
        <input
          label="Upcoming"
          type="radio"
          id="upcoming"
          name="option"
          value="Upcoming"
          className="w-fit py-2 px-8 rounded-lg"
        />
      </div>
    </div>
  );
}
