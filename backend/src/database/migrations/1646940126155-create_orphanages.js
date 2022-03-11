"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrphanages1646940126155 = void 0;
const typeorm_1 = require("typeorm");
class createOrphanages1646940126155 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
            name: "orphanages",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: "increment",
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "latitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "longitude",
                    type: "decimal",
                    scale: 10,
                    precision: 2,
                },
                {
                    name: "about",
                    type: "text",
                },
                {
                    name: "instructions",
                    type: "text",
                },
                {
                    name: "opening_hours",
                    type: "varchar",
                },
                {
                    name: "open_on_weekends",
                    type: "boolean",
                    default: false,
                },
            ],
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable("orphanages");
    }
}
exports.createOrphanages1646940126155 = createOrphanages1646940126155;
