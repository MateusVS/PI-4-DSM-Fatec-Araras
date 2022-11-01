export default interface IEvent {
  id: number;
  description: string;
  temperature: number;
  wasRead: boolean;
  comments: string;
  userId: number;
  createdAt: Date;
  updatedAt: Date;
}
