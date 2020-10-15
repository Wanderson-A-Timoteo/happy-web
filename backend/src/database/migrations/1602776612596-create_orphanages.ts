import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1602776612596 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza todas as alterações no banco de dados, criar deletar etc
        await queryRunner.createTable(new Table({
            name: 'orphanages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'name',
                    type: 'varchar'

                },
                {
                    name: 'latitude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'longititude',
                    type: 'decimal',
                    scale: 10,
                    precision: 2,
                },
                {
                    name: 'about',
                    type: 'text',
                },
                {
                    name: 'instructions',
                    type: 'text',
                },
                {
                    name: 'open_on_weekends',
                    type: 'boolean',
                    default: false,
                },
            ],
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfaz o que foi feito pelo metodo UP
        await queryRunner.dropTable('orphanages');
    }

}
