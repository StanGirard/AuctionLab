export const AuroraDB = require('data-api-client')({
        secretArn: "arn:aws:secretsmanager:eu-west-1:831482984725:secret:rds-db-credentials/cluster-BUZBRKP6VQY77CPY33KXLBJQJ4/magaUser-vrjdi8",
        resourceArn: "arn:aws:rds:eu-west-1:831482984725:cluster:maga-api-dev-rdscluster-2ql89ne66udb",
        database: "MagaDB" // default database
      });