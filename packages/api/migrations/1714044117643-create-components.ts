import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateComponents1714044117643 implements MigrationInterface {
  name = 'CreateComponents1714044117643';
  transaction = true;

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "components" (
        "id" varchar PRIMARY KEY NOT NULL,
        "name" varchar NOT NULL,
        "libraryName" varchar NOT NULL,
        "src" varchar NOT NULL
       )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "components"`);
  }
}
