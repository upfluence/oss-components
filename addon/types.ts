export type FeedbackMessageType = 'error' | 'warning' | 'success';
export type FeedbackMessage = {
  type: FeedbackMessageType;
  value?: string;
};
