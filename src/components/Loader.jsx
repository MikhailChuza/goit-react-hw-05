import { ThreeDots } from "react-loader-spinner";
export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color=" rgb(9, 51, 57)"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
}
