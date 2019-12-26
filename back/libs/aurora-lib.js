export const AuroraDB = require('data-api-client')({
        secretArn: "arn:aws:secretsmanager:eu-west-1:831482984725:secret:rds-db-credentials/cluster-AHR2PQV6L42CBQ5IG4CZOCRK44/magaUser-kk2oIf",
        resourceArn: "arn:aws:rds:eu-west-1:831482984725:cluster:maga-api-dev-rdscluster-azj0d6acvg92",
        database: "MagaDB" // default database
      });