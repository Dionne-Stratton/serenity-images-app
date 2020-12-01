import axios from "axios";

// export const axiosWithAuthGallery = () => {
//   const token = "kh95KdcSSJAuLQr_1hXKF1ANzkro4HGGivozprOwOvk";
//   const spaceId = "3j13juwb67cs";
//   const environmentId = "master";

//   return axios.create({
//     headers: {
//       Authorization: token,
//       space: spaceId,
//       environment: environmentId,
//     },
//     baseURL: "https://cdn.contentful.com",
//   });
// };

export const axiosWithAuth = () => {
  const token =
    "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImMxMGY3YWEwNDEzMjA3YTZjZTVjMDg4OGI4OTAxOTMwZTMwYTczNDI0MDBkODc2NzMwN2JhZjMzNDc1MzFlZjkzNGU1ZGJiZTUzYjM1ZTllIn0.eyJhdWQiOiIzN2Q0YmQzMDM1ZmUxMWU5YTgwM2FiN2VlYjNjY2M5NyIsImp0aSI6ImMxMGY3YWEwNDEzMjA3YTZjZTVjMDg4OGI4OTAxOTMwZTMwYTczNDI0MDBkODc2NzMwN2JhZjMzNDc1MzFlZjkzNGU1ZGJiZTUzYjM1ZTllIiwiaWF0IjoxNjAzODUwMTcxLCJuYmYiOjE2MDM4NTAxNzEsImV4cCI6MTYzNTM4NjE3MSwic3ViIjoiNjA4NDQ0NyIsInNjb3BlcyI6WyJzaG9wcy5tYW5hZ2UiLCJzaG9wcy5yZWFkIiwiY2F0YWxvZy5yZWFkIiwib3JkZXJzLnJlYWQiLCJvcmRlcnMud3JpdGUiLCJwcm9kdWN0cy5yZWFkIiwicHJvZHVjdHMud3JpdGUiLCJ3ZWJob29rcy5yZWFkIiwid2ViaG9va3Mud3JpdGUiLCJ1cGxvYWRzLnJlYWQiLCJ1cGxvYWRzLndyaXRlIiwicHJpbnRfcHJvdmlkZXJzLnJlYWQiXX0.ArAhjD_NDqurXNfrJhl56QD_51i5yx0rrOJpcaMvVdc9zRdag-pBT2fMRrPlCDjqKHs0pzBRcq5SKML7ql8 ";

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://api.printify.com",
  });
};
