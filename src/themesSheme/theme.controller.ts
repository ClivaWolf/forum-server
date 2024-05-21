import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ThemeService } from './theme.service';
import { CreateThemeDto } from './dto/create-theme.dto';
import { UpdateThemeDto } from './dto/update-theme.dto';

@Controller('api/theme')
export class ThemeController {
  constructor(private readonly themeService: ThemeService) { }

  @Post()
  create(@Body() createThemeDto: CreateThemeDto) {
    return this.themeService.create(createThemeDto);
  }

  @Get()
  findAll() {
    return this.themeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.themeService.findOne({ where: { id } });
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateThemeDto: UpdateThemeDto) {
    return this.themeService.update(id, { where: { id } }, updateThemeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.themeService.delete(id);
  }

  @Get('byName/:name')
  getByName(@Param('name') name: string) {
    return this.themeService.getByName(name);
  }

  @Get('names/all')
  getNames() {
    return this.themeService.getNames();
  }
}
