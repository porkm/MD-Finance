import axios from "axios";

// http://localhost:6033/api/Finance/Get
const baseUrl = `http://localhost:6033`;

const financeService = {
    getFinanceDataPromice: function() {
        return axios.get(`${baseUrl}/api/Finance/Get`)
    }
};

export default financeService;