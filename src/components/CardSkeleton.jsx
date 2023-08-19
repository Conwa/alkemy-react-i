import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CardSkeleton() {
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  return (
    <>
      {Array(randomNumber(6, 11))
        .fill()
        .map((item, index) => {
          return (
            <div key={index}>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <div className=" h-96 w-56 rounded-xl flex flex-col cursor-default bg-gray-900 bg-opacity-80">
                  <div className="w-auto h-5/6 relative p-2">
                    <Skeleton
                      className="h-full w-full"
                      style={{ padding: "1rem", borderRadius: "0.75rem" }}
                    />
                    <Skeleton
                      className=" top-3 left-4 px-3 py-3 rounded-lg"
                      style={{
                        position: "absolute",
                        width: "25%",
                      }}
                    />
                  </div>
                  <div className="w-full h-1/6 p-2 flex flex-col justify-center">
                    <Skeleton style={{ borderRadius: "0.75rem" }} />
                  </div>
                </div>
              </SkeletonTheme>
            </div>
          );
        })}
    </>
  );
}
