import { createContext, useContext, useReducer } from 'react';

const BlogWriteContext = createContext();

const initialSate = {
  blogContent: '',
  // blogBlocks: [],
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateContent':
      return { ...state, blogContent: action.payload };
    default:
      throw new Error('Unknown Action');
  }
}

function BlogWriteProvider({ children }) {
  const [{ blogContent }, dispatch] = useReducer(reducer, initialSate);
  return (
    <BlogWriteContext.Provider value={{ blogContent, dispatch }}>
      {children}
    </BlogWriteContext.Provider>
  );
}

function useBlogWrite() {
  const context = useContext(BlogWriteContext);
  if (context === undefined)
    throw new Error('You use this BlogWriteContext outside Provider');

  return context;
}

export { BlogWriteProvider, useBlogWrite };
