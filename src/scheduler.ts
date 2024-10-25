const { CloudSchedulerClient } = require('@google-cloud/scheduler');

// Khởi tạo client cho Cloud Scheduler
const client = new CloudSchedulerClient();

async function createSchedulerJobs() {
  const projectId = 'fir-example-9ece3'; //process.env.GCP_PROJECT;
  const location = 'asia-northeast1';
  const cloudRunUri = 'https://example-app-604131271753.asia-northeast1.run.app'//process.env.CLOUD_RUN_URI; 
  const serviceAccountEmail = 'example@fir-example-9ece3.iam.gserviceaccount.com'; //process.env.SERVICE_ACCOUNT_EMAIL;

  const postUser = {
    name: `projects/${projectId}/locations/${location}/jobs/call-users-api-get`,
    schedule: '*/5 * * * *', // Mỗi 5 phút
    httpTarget: {
      uri: `${cloudRunUri}/users`,
      httpMethod: 'POST',
      oidcToken: {
        serviceAccountEmail: serviceAccountEmail,
      },
    },
  };

  // Định nghĩa job POST
  const postDeleteUser = {
    name: `projects/${projectId}/locations/${location}/jobs/call-users-api-post`,
    schedule: '0 * * * *', // Mỗi giờ
    httpTarget: {
      uri: `${cloudRunUri}/deleted-users`,
      httpMethod: 'POST',
      oidcToken: {
        serviceAccountEmail: serviceAccountEmail,
      },
    },
  };

  try {
    // Tạo job GET
    await client.createJob({
      parent: `projects/${projectId}/locations/${location}`,
      job: postUser,
    });
    console.log('GET scheduler job created.');

    // Tạo job POST
    await client.createJob({
      parent: `projects/${projectId}/locations/${location}`,
      job: postDeleteUser,
    });
    console.log('POST scheduler job created.');
  } catch (error) {
    console.error('Error creating scheduler jobs:', error);
  }
}

createSchedulerJobs();
