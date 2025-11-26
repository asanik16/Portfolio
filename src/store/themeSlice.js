import { createSlice } from '@reduxjs/toolkit';

// Get initial theme from localStorage or default to 'dark'
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'dark';
  }
  return 'dark';
};

const initialState = {
  mode: getInitialTheme(),
  activeSection: 'home',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
      }
    },
    setTheme: (state, action) => {
      state.mode = action.payload;
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', state.mode);
      }
    },
    setActiveSection: (state, action) => {
      state.activeSection = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setActiveSection } = themeSlice.actions;
export default themeSlice.reducer;
