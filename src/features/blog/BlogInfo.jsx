import { Link } from 'react-router-dom';
import { PiShareFatDuotone, PiHeart, PiHeartFill } from 'react-icons/pi';
import { useState } from 'react';
import { formatDate } from '../../utils/formatDate';

function BlogInfo({ readTime = 5, blogPublishDate }) {
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike((like) => !like);
  }

  return (
    <div className="mb-12">
      <div className="ml-4 flex items-center gap-4 sm:ml-10">
        <img
          src="/myPhoto.jpg"
          alt="photo of ayan"
          className="w-7 rounded-full opacity-90 grayscale sm:w-8"
        />
        <div>
          <Link to="/about" className="text-xs hover:underline sm:text-sm">
            Ayan Ghanta
          </Link>
          <p className="text-xs text-gray-400 sm:text-sm">
            {readTime} min read | {formatDate(blogPublishDate)}
          </p>
        </div>
        <div className="ml-auto mr-16 flex items-center gap-4">
          {like ? (
            <PiHeartFill
              className="cursor-pointer fill-rose-500 p-1.5 text-3xl text-gray-500 sm:text-4xl"
              onClick={handleLike}
            />
          ) : (
            <PiHeart
              className="cursor-pointer rounded-full p-1.5 text-3xl text-gray-500 transition duration-300 hover:bg-rose-100 hover:fill-rose-500 sm:text-4xl"
              onClick={handleLike}
            />
          )}
          <PiShareFatDuotone className="cursor-pointer text-xl text-gray-400 sm:text-2xl" />
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
