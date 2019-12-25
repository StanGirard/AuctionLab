export const AuroraDB = require('data-api-client')({
        secretArn: "arn:aws:secretsmanager:eu-west-1:831482984725:secret:rds-db-credentials/cluster-JBD3PFEDXZZMQYHPXDFQRMDE3E/magaUser-Jh5uHl",
        resourceArn: "arn:aws:rds:eu-west-1:831482984725:cluster:maga-api-dev-rdscluster-1fvtt5q641ru3",
        database: "MagaDB" // default database
      });