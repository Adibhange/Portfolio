const BackgroundCircles = () => {
  const sizes = [620, 820, 1020, 1220, 1420, 1620];

  return (
    <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      {sizes.map((size) => (
        <div
          key={size}
          className={`absolute inset-0 left-1/2 top-1/2 rounded-full border-2 border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5`}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundCircles;
