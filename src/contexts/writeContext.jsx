/*
import { createContext, useContext } from 'react';

const BlogWriteContext = createContext();

function BlogWriteProvider({ children }) {
  return <BlogWriteContext.Provider>{children}</BlogWriteContext.Provider>;
}

const initialSate = {
  blogBlocks: [],
  // blogBlocks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'h1':
      return {};
    default:
      throw new Error('Unknown Action');
  }
}

function useBlogWrite() {
  const context = useContext(BlogWriteContext);
  if (context === undefined)
    throw new Error('You use this BlogWriteContext outside Provider');

  return context;
}

export { BlogWriteProvider, useBlogWrite };

*/
