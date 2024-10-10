export const modifyHtml = (html) => {
  // Add Tailwind CSS classes to elements
  return html
    .replace(/<h1>/g, '<h1 className="text-4xl font-semibold mb-4">')
    .replace(/<h2>/g, '<h2 className="text-3xl font-medium my-3">')
    .replace(/<h3>/g, '<h3 className="text-2xl font-medium my-2">')
    .replace(/<h4>/g, '<h3 className="text-xl font-medium my-2">')
    .replace(/<p>/g, '<p className="text-base">')
    .replace(/<ul>/g, '<ul className="list-disc pl-5 my-3 ">')
    .replace(/<ol>/g, '<ol className="list-decimal pl-5 my-2">')
    .replace(/<li>/g, '<li className="my-1">')
    .replace(
      /<blockquote>/g,
      '<blockquote className="border-l-4 px-4 py-2 my-4 italic text-gray-600 bg-gray-50">',
    ) // Styling for blockquotes
    .replace(
      /<pre>/g,
      '<pre className="bg-gray-900 text-gray-100 p-4 rounded-sm overflow-x-auto my-4">',
    )
    .replace(
      /<code>/g,
      `<code className="block font-mono text-sm leading-snug text-white 
      bg-gray-900 p-2 rounded-sm overflow-x-auto">`,
    )
    .replace(/<img /g, '<img className="my-4 max-w-full h-auto" ') // Styling for images
    .replace(
      /<a /g,
      '<a className="underline italic hover:text-blue-500 transition duration-300" ',
    ) // Styling for images
    .replace(/<br\s*\/?>/g, '<br />'); // Handle <br> tags
};
