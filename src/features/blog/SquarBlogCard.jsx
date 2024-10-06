function SquarBlogCard() {
  return (
    <div className="rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md">
      <img
        src="testblog.png"
        alt="poster of the BLOG TITLE"
        className="rounded"
      />
      <div>
        <p className="font-header mb-3 text-lg text-gray-700 sm:mt-2 sm:text-2xl">
          How Much Firewood Do You Need for Your Camping Trip?
        </p>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400">
          Septembar 4,2024
        </p>
        <p className="text-xs text-gray-500 sm:text-sm">
          Plan your camping firewood nneds for weekends and weeklong trips.
          Learn how many bundles to bring for a cozy and anojyable campfire
          experience.
        </p>
        <div className="ml-auto w-5 cursor-pointer sm:text-2xl">&rarr;</div>
      </div>
    </div>
  );
}

export default SquarBlogCard;
