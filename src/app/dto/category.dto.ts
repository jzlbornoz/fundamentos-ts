import { AccessType, CategoryModel } from '../models/category.model';
import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';

export interface IntefaceCreateCategoryDto
  extends Omit<CategoryModel, 'id' | 'updateAt' | 'createdAt'> {}

export class CreateCategoryDto implements IntefaceCreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 180)
  name!: string;
  //el ! le indica a TS que se inicializara en otro momento.

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  access?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = '234hhhh';
    dto.image = 'https://api.escuelajs.co/api/v1';
    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
