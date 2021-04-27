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
    "Bearer ZTMwYTcsL7ql8 ";

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: "https://api.printify.com",
  });
};
