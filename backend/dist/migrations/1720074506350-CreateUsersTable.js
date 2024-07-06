"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUsersTable1720074506350 = void 0;
class CreateUsersTable1720074506350 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`Users\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`username\` varchar(255) NOT NULL,
                \`password\` varchar(255) NOT NULL,
                \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                UNIQUE INDEX \`IDX_ffc81a3b97dcbf8e320d5106c0\` (\`username\`),
                PRIMARY KEY (\`id\`)
            ) ENGINE=InnoDB;
        `);
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS \`JournalEntries\` (
                \`id\` int NOT NULL AUTO_INCREMENT,
                \`userId\` int NOT NULL,
                \`title\` varchar(255) NOT NULL,
                \`content\` text NOT NULL,
                \`category\` varchar(255) NULL,
                \`date\` datetime NOT NULL,
                \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
                \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
                PRIMARY KEY (\`id\`),
                CONSTRAINT \`FK_ecfd85276c22c53d37c4c9115b5\` FOREIGN KEY (\`userId\`) REFERENCES \`Users\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION
            ) ENGINE=InnoDB;
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`JournalEntries\``);
        await queryRunner.query(`DROP INDEX \`IDX_ffc81a3b97dcbf8e320d5106c0\` ON \`Users\``);
        await queryRunner.query(`DROP TABLE \`Users\``);
    }
}
exports.CreateUsersTable1720074506350 = CreateUsersTable1720074506350;
