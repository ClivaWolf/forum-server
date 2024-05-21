import { Injectable } from '@nestjs/common';
import { Theme } from 'src/themesSheme/entities/theme.entity';
import { BaseService } from 'src/shared/services/base.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ThemeService extends BaseService<Theme> {
  constructor(
    @InjectRepository(Theme)
    private readonly themeRepository: Repository<Theme>,
  ) {
    super(themeRepository);
  }

  async getByName(name: string) {
    return await this.themeRepository.findOne({ where: { name } });
  }

  async getNames() {
    return await this.themeRepository.find({ select: ['name'] });
  }
}
