declare global {
  interface Window {
    electronAPI: {
      // Add your electron API methods here
      // Example:
      // sendMessage: (message: string) => void;
      // onMessage: (callback: (message: string) => void) => void;
    };
  }
}

export {}; 