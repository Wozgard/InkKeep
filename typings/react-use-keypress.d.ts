declare module 'react-use-keypress' {
  type Key = string | string[];

  export default function useKeypress(key: Key, callback: (event: KeyboardEvent) => void, dependencies?: any[]): void;
}
