const SlicedImageGrid = () => {
  const groupPinkPurple = [5, 10];
  const groupBlueCyan = [9 , 14];

  const columns = 4;
  const rows = 5;

  const getOverlayClass = (i: number) => {
    if (groupPinkPurple.includes(i)) {
      return 'bg-gradient-to-b from-[#946DF0] to-[#3A2669]';
    } else if (groupBlueCyan.includes(i)) {
      return 'bg-gradient-to-b from-[#E87DB3] to-[#AB4277]';
    } else {
      return 'bg-white/15'; // default for uncolored
    }
  };

  return (
    <div className="w-full max-h-screen overflow-y-hidden flex items-center justify-center bg-black">
      <div
        className="grid gap-2"
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
          width: '120%',
          height: '120vh',
          marginLeft: '-5%',
          marginTop: '-8vh',
        }}
      >
        {Array.from({ length: columns * rows }).map((_, i) => {
          const x = (i % columns) * (100 / (columns - 1));
          const y = Math.floor(i / columns) * (100 / (rows - 1));

          return (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden"
              style={{
                backgroundImage: "url('')",
                backgroundSize: `${columns * 100}% ${rows * 100}%`,
                backgroundPosition: `${x}% ${y}%`,
              }}
            >
              <div className={`absolute inset-0 rounded-lg ${getOverlayClass(i)}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlicedImageGrid;
