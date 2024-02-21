import { Notification } from '../../enterprise/entities/notification'

export interface NotificationsRepository {
  save(notification: Notification): Promise<void>
  findById(id: string): Promise<Notification | null>
  create(notification: Notification): Promise<void>
}
