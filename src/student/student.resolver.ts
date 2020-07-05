import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { StudentType } from './student.type';
import { StudentService } from './student.service';
import { CreateStudentInput } from './student.input';
import { Student } from './student.entity';

@Resolver(of => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Query(returns => StudentType)
  student(@Args('id') id: string): Promise<Student> {
    return this.studentService.getStudent(id);
  }

  @Mutation(returns => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
