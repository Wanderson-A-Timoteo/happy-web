import {MigrationInterface, QueryRunner} from "typeorm";

export class createOrphanages1602773954780 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realiza alterações no banco de dados
        // Criar tabela, criar um novo campo, deletar algum campo
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfazer o que foi feito no metodo UP
    }

}
