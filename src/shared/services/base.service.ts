import { FindOneOptions, Repository } from 'typeorm';
import { EntityTarget } from 'typeorm/common/EntityTarget';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class BaseService<T> {
    protected constructor(protected readonly repository: Repository<T>) { }

    async create(entity: T): Promise<T> {
        return await this.repository.save(entity);
    }

    async findOne(options: FindOneOptions<T>): Promise<T> {
        return this.repository.findOne(options);
    }

    async findAll(): Promise<T[]> {
        return this.repository.find();
    }

    async update(id: string, options: FindOneOptions<T>, entity: T): Promise<T> {
        await this.repository.update(id, entity as QueryDeepPartialEntity<T>);
        return this.findOne(options);
    }

    async delete(id: string): Promise<void> {
        await this.repository.delete(id);
    }
}