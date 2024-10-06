function wideBlogCard() {
  return (
    <div className="mb-12 rounded border border-gray-400 p-3 transition duration-300 hover:shadow-md sm:flex sm:gap-6">
      <img
        src="testblog.png"
        alt="poster of the BLOG TITLE"
        className="rounded sm:w-6/12"
      />
      <div>
        <p className="font-header mb-3 text-lg font-medium text-gray-900 sm:text-2xl">
          How Much Firewood Do You Need for Your Camping Trip?
        </p>
        <p className="mb-2 text-[10px] font-medium capitalize text-gray-400 sm:text-[12px]">
          septembar 4,2024
        </p>
        <p className="text-xs text-gray-600 sm:text-base">
          Plan your camping firewood nneds for weekends and weeklong trips.
          Learn how many bundles to bring for a cozy and anojyable campfire
          experience.
        </p>
        <div className="ml-auto mr-2 w-5 sm:text-2xl">&rarr;</div>
      </div>
    </div>
  );
}

export default wideBlogCard;
