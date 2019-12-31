export const AuroraDB = require('data-api-client')({
        secretArn: "arn:aws:secretsmanager:eu-west-1:831482984725:secret:MagaDBAdminSecret-qyHLgH",
        resourceArn: "arn:aws:rds:eu-west-1:831482984725:cluster:magadb",
        database: "magaTest" // default database
      });
//  secretArn: "arn:aws:secretsmanager:eu-west-1:831482984725:secret:rds-db-credentials/cluster-AHR2PQV6L42CBQ5IG4CZOCRK44/magaUser-kk2oIf",