import { PaginationParams } from '@/core/repositories/pagination-params'
import { AnswerComment } from '../../enterprise/entities/answer-comment'

export interface AnswerCommentsRepository {
  findManyByAnswerId(
    answerId: string,
    params: PaginationParams,
  ): Promise<AnswerComment[]>
  findById(id: string): Promise<AnswerComment | null>
  create(answer: AnswerComment): Promise<void>
  delete(answer: AnswerComment): Promise<void>
}
