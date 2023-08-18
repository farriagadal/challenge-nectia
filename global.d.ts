declare global {
  interface Window {
    gtag: {
      (command: 'config', targetId: string, config?: { page_path?: string, page_title?: string, page_location?: string }): void;
      (command: 'event', eventName: string, eventParameters?: { event_category?: string; event_label?: string; value?: string }): void;
    };
  }
}
export {}
