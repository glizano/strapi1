module.exports = ({ env }) => ({
  upload: {
    provider: "ibm-object-storage",
    providerOptions: {
      endpoint: env("IBM_COS_ENDPOINT", "<endpoint>"),
      apiKeyId: env("IBM_COS_API_KEY_ID", "<api-key>"),
      serviceInstanceId: env(
        "IBM_COS_SERVICE_INSTANCE_ID",
        "<resource-instance-id>"
      ),
      params: {
        Bucket: env("IBM_COS_BUCKET", "<bucket>"),
      },
    },
  },
});
