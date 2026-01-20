export type FeedbackMessage = {
  type: 'error' | 'warning' | 'success';
  value?: string;
};
