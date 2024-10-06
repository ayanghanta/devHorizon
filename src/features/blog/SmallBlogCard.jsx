function SmallBlogCard() {
  return (
    <div className="relative flex gap-3 rounded border border-gray-200 bg-gray-50 p-3 transition duration-300 hover:shadow-md sm:flex-row">
      <img
        src="testblog2.png"
        alt="image of a TEST BLOG"
        className="w-6/12 rounded"
      />
      <p className="font-header mb-3 text-base">
        Exploring Mountan&apos;s Coolest Summer Camping and Sports
      </p>
      <span className="absolute bottom-0 right-5 cursor-pointer text-lg sm:bottom-3">
        &rarr;
      </span>
    </div>
  );
}

export default SmallBlogCard;
