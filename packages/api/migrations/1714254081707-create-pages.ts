import type { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePages1714254081707 implements MigrationInterface {
  name = 'CreatePages1714254081707';
  transaction = true;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pages" ("id" varchar PRIMARY KEY NOT NULL, "route" varchar NOT NULL)`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pages"`);
  }
}
