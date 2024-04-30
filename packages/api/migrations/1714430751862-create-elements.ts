import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateElements1714430751862 implements MigrationInterface {
  name = 'CreateElements1714430751862';
  transaction = true;

  async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "elements" (
        "id" varchar PRIMARY KEY NOT NULL,
        "pageId" varchar NOT NULL,
        "props" text NOT NULL,
        "componentId" varchar,
        CONSTRAINT "FK_b8449461acc9be40608f95be5d9" FOREIGN KEY ("componentId") REFERENCES "components" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT "FK_26f8220c801b997be59c44cc2af" FOREIGN KEY ("pageId") REFERENCES "pages" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
      )`
    );
  }

  async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "elements"`);
  }
}
