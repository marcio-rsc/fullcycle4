import { Controller, Get, Post, Body } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from 'src/dto/category.dto';

@Controller('categories')
export class CategoryController {

    constructor (
        @InjectRepository(Category)
        private categoryRepo: Repository<Category>
    )
    {

    }

    @Get()
    async category_list(){
        const categories = await this.categoryRepo.find();
        return { categories };
    }

    @Post()
    async category_create(@Body() body: CategoryDto): Promise<Category> {
        const categories = await this.categoryRepo.create(body);
        return this.categoryRepo.save(categories);
    }
}
