import { InputType, Field } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateStudentInput {
  @MinLength(1)
  @Field()
  firstName: string;

  @MinLength(1)
  @Field()
  lastName: string;
}
