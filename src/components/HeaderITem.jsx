

// eslint-disable-next-line react/prop-types
function HeaderITem({name  }) {
  return (
    <div className="text-black flex  gap-4 text-[18px]  font-semibold cursor-pointer  hover:text-yellow-500 underline-offset-8">
      <h2>{name}</h2>
    </div>
  );
}

export default HeaderITem;

