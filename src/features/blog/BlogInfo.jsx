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
      <div className="ml-10 flex items-center gap-4">
        <img
          src="/myPhoto.jpg"
          alt="photo of ayan"
          className="w-8 rounded-full opacity-90 grayscale"
        />
        <div>
          <Link to="/about" className="text-sm hover:underline">
            Ayan Ghanta
          </Link>
          <p className="text-sm text-gray-400">
            {readTime} min read | {formatDate(blogPublishDate)}
          </p>
        </div>
        <div className="ml-auto mr-16 flex items-center gap-4">
          {like ? (
            <PiHeartFill
              className="cursor-pointer fill-rose-500 p-1.5 text-4xl text-gray-500"
              onClick={handleLike}
            />
          ) : (
            <PiHeart
              className="cursor-pointer rounded-full p-1.5 text-4xl text-gray-500 transition duration-300 hover:bg-rose-100 hover:fill-rose-500"
              onClick={handleLike}
            />
          )}
          <PiShareFatDuotone className="cursor-pointer text-2xl text-gray-400" />
        </div>
      </div>
    </div>
  );
}

export default BlogInfo;
