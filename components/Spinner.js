import Image from "next/image";

const Spinner = () => {
  return (
    <div className="spinner">
      <Image src="/images/spinner.gif" height={50} width={50} />
    </div>
  );
};

export default Spinner;
