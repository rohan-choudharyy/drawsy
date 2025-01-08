interface Window {
  MathJax: {
    Hub: {
      Queue: (args: any[]) => void;
      Config: (config: any) => void;
    };
  }
} 