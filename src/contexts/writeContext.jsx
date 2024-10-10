import { createContext, useContext, useReducer } from 'react';

const BlogContext = createContext();

const initialSate = {
  title: '',
  description: '',
  category: [],
  codeLanguage: 'javascript',
  codeTheme: 'github',
  blogContent: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'updateContent':
      return { ...state, blogContent: action.payload };
    case 'updateTitle':
      return { ...state, title: action.payload };
    case 'updateDescription':
      return { ...state, description: action.payload };
    default:
      throw new Error('Unknown Action');
  }
}

function BlogProvider({ children }) {
  const [{ blogContent, codeTheme, codeLanguage }, dispatch] = useReducer(
    reducer,
    initialSate,
  );
  return (
    <BlogContext.Provider
      value={{ blogContent, dispatch, codeTheme, codeLanguage }}
    >
      {children}
    </BlogContext.Provider>
  );
}

function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined)
    throw new Error('You use this BlogWriteContext outside Provider');

  return context;
}

export { BlogProvider, useBlogContext };
