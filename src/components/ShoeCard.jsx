const ShoeCard = ({
  shoe,
  bigShoeImage,
  setBigShoeImage,
  changeBigShoeImage
}) => {
  return (
    <div
      className={`border-2 rounded-xl cursor-pointer max-sm:flex-1 ${
        bigShoeImage === shoe.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      }`}
      onClick={() => setBigShoeImage(shoe.bigShoe)}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 sm:w-40 rounded-xl max-sm:p-4">
        <img
          src={shoe.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
