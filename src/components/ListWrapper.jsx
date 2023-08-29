/* eslint-disable react/prop-types */
import { useLocation } from "react-router-dom";

export default function ListWrapper({
  setListVariant,
  setHeaderTitle,
  setList,
}) {
  const inputOptions = document.querySelectorAll(`input[name="option"]`);

  let url = useLocation();
  url = url.pathname.slice(1);
  let idOption = "";

  if (url === "movies") {
    idOption = "upcoming";
  }
  if (url === "tvshows") {
    idOption = "airing_today";
  }

  inputOptions.forEach((input) => {
    input.addEventListener("click", () => {
      setList([]);
      setListVariant(input.id);
      setHeaderTitle(input.value);
    });
  });

  return (
    <div className=" py-4 lg:py-2 h-fit w-full">
      <div
        className="radio h-16 lg:h-18 w-full md:w-2/3 lg:w-1/2 rounded-xl flex flex-row items-center  overflow-hidden links-regular p-2"
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
          className=" py-2 basis-1/3 rounded-lg text-center"
        />
        <input
          label="Top Rated"
          type="radio"
          id="top_rated"
          name="option"
          value="Top Rated"
          className=" py-2 basis-1/3 rounded-lg text-center"
        />
        <input
          label="Upcoming"
          type="radio"
          id={idOption}
          name="option"
          value="Upcoming"
          className=" py-2 basis-1/3 rounded-lg text-center"
        />
      </div>
    </div>
  );
}
