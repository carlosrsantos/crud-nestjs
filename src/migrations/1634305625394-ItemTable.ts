import { MigrationInterface, QueryRunner } from 'typeorm';

export class ItemTable1634305625394 implements MigrationInterface {
  name = 'ItemTable1634305625394';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "taste" character varying NOT NULL, "description" character varying NOT NULL, "quantity" integer NOT NULL, "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "item"`);
  }
}
