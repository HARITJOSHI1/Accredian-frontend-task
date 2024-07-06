const apiStore = {
  referral: {
    sendReferral: {
      post: {
        prod: "https://accredian-backend-v1.vercel.app/api/referral",
        dev: "http://localhost:4000/api/referral",
      },
    },
  },
};


export default apiStore;
