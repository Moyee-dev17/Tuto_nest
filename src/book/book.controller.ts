import { Controller, Get, Post, Body, Patch, Delete ,Param} from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('book')
export class BookController {
  constructor(private readonly BookService: BookService) {}

  @Post(":id")
  create(@Body() createBookDto: CreateBookDto,@Param('id') id:number) {
    return this.BookService.create(createBookDto ,+id);
  }

  @Get()
  findAll() {
    return this.BookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.BookService.findOne(id);
  }

  // @Patch(':id')
  // update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
  //   return this.bookService.update(id, updateBookDto);
  // }

  
}
