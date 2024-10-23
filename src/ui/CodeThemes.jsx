import { useBlogContext } from '../contexts/writeContext';
import { themes } from '../utils/CodeBlock';

function CodeThemes() {
  const { dispatch, codeTheme } = useBlogContext();
  const themeOptions = Object.keys(themes);

  function handleThemeChange(e) {
    dispatch({ type: 'updateTheme', payload: e.target.value });
  }

  return (
    <div className="mt-4 flex flex-col justify-center text-gray-500">
      <label htmlFor="codetheme">Code theme</label>
      <select
        id="codetheme"
        className="cursor-pointer"
        defaultValue={codeTheme}
        onChange={(e) => handleThemeChange(e)}
      >
        {themeOptions.map((theme) => (
          <option value={theme} key={theme}>
            {theme}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CodeThemes;
