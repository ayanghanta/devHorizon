function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-gray-800 px-3 pb-6 pt-12 text-center">
      <p className="text-xs text-gray-400">
        &copy;{new Date().getFullYear()} devHorizen. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
