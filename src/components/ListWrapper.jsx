export default function Frame() {
  return (
    <div className="py-2 h-fit w-72">
      <div
        className="radio w-full h-10 rounded-xl flex overflow-hidden links-small"
        style={{
          backgroundColor: "#121829b5",
          backdropFilter: "blur(8px)",
        }}
      >
        <input
          label="All"
          type="radio"
          id="male"
          name="gender"
          value="male"
          defaultChecked="true"
          className="w-1/3 h-full"
        />
        <input
          label="Movies"
          type="radio"
          id="female"
          name="gender"
          value="female"
          className="w-1/3 h-full text-center"
        />
        <input
          label="TV Shows"
          type="radio"
          id="other"
          name="gender"
          value="other"
          className="w-1/3 h-full text-center"
        />
      </div>
    </div>
  );
}
